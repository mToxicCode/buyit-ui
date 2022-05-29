<template>
  <div style="background: rgba(0, 0, 0, 0.05); padding-bottom: 10px">
    <div class="default_container">
      <template v-if="isEmpty">
        <div style="padding-top: 30px">
          <h3 style="font-size: 30px; font-weight: 800">
            🧐 Корзина пуста  
          </h3>
          <h4 style="padding-left: 35px">
             Воспользуйтесь поиском, чтобы найти всё что нужно. 
          </h4>
        </div>
      </template>
      <template v-else>
        <div class="wrapper">
          <div>
          <template v-for="item in getItemsInCart" >
            <DCartListItem :key="item.id" :item="item" @add-to-cart="(e) => onArticleAddToCard(e)" @delete-from-cart="(e) => onArticleDeleteFromCard(e)"/>
          </template>
          </div>
          <div></div>
          <div class="checkout_box">
            <a-button type="primary"
                      style="width: 350px; height: 60px; margin-left: auto; margin-right: auto; margin-top: 15px; background: #10c44c; border-color: #10c44c"
                      v-on:click="createOrder">
              Оформить заказ
            </a-button>
            <div style="margin-left: 40px; display: flex; justify-content: space-between">
            <p style="font-weight: bold">Сумма заказа: </p>
              <p style="margin-right: 100px; font-weight: 600; font-size: 18px; color: red">{{getSum}} ₽</p>
            </div>
          </div>
        </div>
      </template>
      <div style="margin-top: 200px;">
        <p>Рекомендации 🔥</p>
        <div style="display:grid; justify-content: space-between; height: 100%; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr">
        <template v-for="suggestion in getSuggestions">
          <d-article-card style="margin-top: 10px" :props="suggestion" :small="true" :key="suggestion.id" @add-to-cart="(e) => onArticleAddToCard(e)" @delete-from-cart="(e) => onArticleDeleteFromCard(e)"/>
        </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {IItem, IItemInCart} from "~/types/ItemTypes";
import ItemsClient, {IPlaceOrderRequest} from "~/api/items-client";
import {DeliveryDeadline} from "~/types/filler";
import {SortingMode, SortingType} from "~/types/sorting";

@Component({
  async asyncData({params, error, store}) {
    let itemsInCart = await ItemsClient.getItemsByIds((<IItemInCart[]>store.getters["cart-store/items"]).map(x => x.itemId));
    let response = await ItemsClient.getItemsByFilter({
      categories: [],
      deliveryDeadline: DeliveryDeadline.default,
      priceMax: 0,
      priceMin: 0,
      reviewCountMax: 0,
      reviewCountMin: 0
    }, {count: 5, offset: 0}, {mode: SortingMode.none, type: SortingType.none})
    let suggestions = response.items;
    return {itemsInCart, suggestions}
  }
})
export default class CartPage extends Vue {
  itemsInCart: IItem[] = new Array<IItem>();
  suggestions: IItem[] = new Array<IItem>();

  get getItemsInCart() {
    return this.itemsInCart;
  }
  
  get getSuggestions(){
    return this.suggestions;
  }
  
  get getSum(){
    let result = 0;
    this.itemsInCart.forEach(x => result += x.price * (<IItemInCart[]>this.$store.getters["cart-store/items"]).find(y => y.itemId == x.id)?.amount!)
    return result;
  }

  get isEmpty() {
    return this.$store.getters["cart-store/items"].length == 0;
  }
  
  async createOrder() {
    let orderRequest: IPlaceOrderRequest = {
      itemsInOrder: (<IItemInCart[]>this.$store.getters["cart-store/items"]),
      dstPlace: "test"
    }
    console.log(orderRequest)
   let token = this.$cookies.get("jwtToken");
   console.log(token)
    await ItemsClient.placeOrder(orderRequest, token);
    await this.$store.dispatch("cart-store/clearCart")
  }

  onArticleDeleteFromCard(id: number){
    this.$store.dispatch("cart-store/deleteItemFromCart", id)
    this.loadItems();
  }

  onArticleAddToCard(id: number){
    this.$store.dispatch("cart-store/addItemToCart", id)
    this.loadItems();
  }
  
  async loadItems(){
    this.itemsInCart = await ItemsClient.getItemsByIds((<IItemInCart[]>this.$store.getters["cart-store/items"]).map(x => x.itemId));
  }

}
</script>

<style scoped>
.checkout_box {
  background: white;
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 15px;
}

.wrapper {
  display: grid;
  grid-template-columns: 15fr 1fr 8fr;
  height: 100%;
  justify-content: space-between;
}
</style>