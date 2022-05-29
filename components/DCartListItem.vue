<template>
  <div>
    <div class="element">
      <div class="cart_image_wrapper">
        <img :src="getItem.imageUrls[0]" class="cart_image" alt="item image"/>
      </div>
      <div class="cart_description">
        <a style="font-weight: 600; font-size: 18px" href="#">{{ getItem.name }}</a>
        <p>{{ getItem.description }}</p>
      </div>
      <div class="price_wrapper">
        <p style="font-weight: 600; font-size: 18px; color: red">{{ getItem.price }} ₽</p>
        <div style="display: flex; margin-bottom: 5px; width: 100%">
          <a-button style="padding-left: 10px; padding-right: 10px"
                    @click="() => onDeleteFromCartClicked(getItem.id)">
            <a-icon type="minus"/>
          </a-button>
          <a-input :value="inCartAmount" style="margin-top: auto; margin-bottom: auto; padding: 3px"/>
          <a-button style="padding-left: 10px; padding-right: 10px" @click="() => onAddToCartClicked(getItem.id)">
            <a-icon type="plus"/>
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Emit, Prop} from "vue-property-decorator";
import {IItem, IItemInCart} from "~/types/ItemTypes";

@Component
export default class DCartListItem extends Vue {
  @Prop()
  item!: IItem
  
  value: number = this.inCartAmount;

  get getItem() {
    return this.item;
  }

  get inCartAmount(): number {
    return (<IItemInCart[]>this.$store.getters["cart-store/items"]).find(x => x.itemId == this.getItem.id)?.amount ?? 0
  }
  
  
  onAmountChange(): void {
    
  }

  @Emit('add-to-cart')
  onAddToCartClicked(articleId: number): number {
    return articleId;
  }

  @Emit('delete-from-cart')
  onDeleteFromCartClicked(articleId: number): number {
    return articleId;
  }
}
</script>

<style scoped>
.element {
  width: 100%;
  max-height: 250px;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  background: white;
  padding: 10px;
  margin-top: 15px;
}

.cart_image {
  width: 80px;
}

.cart_image_wrapper {
  margin-left: 15px;
}

.cart_description {
  margin-left: 15px;
  width: 100%;
}

.price_wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


</style>