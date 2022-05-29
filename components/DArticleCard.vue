<template>
  <div :class="this.cssProps">
    <div style="width: 100%; display: flex; background: rgba(0,0,0,0.02); border-radius: 10px">
      <div style="height: 200px; margin-left: auto; margin-right: auto">
        <img class="card_image" :src="this.props.imageUrls[0]" alt="card image"/>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; ">
      <span class="card_price">{{ this.props.price }} ₽</span>
      <a class="card_name">{{ this.props.name }}</a>
      <div style="display: flex;" :class="isDisabled">
        <a-rate :default-value="this.props.rating.value" disabled style="font-size: 15px; color: orange; width: 100%"/>
        <div style="font-size: 12px; margin-left: 5px; width: 100%; justify-content: center"><p style="margin-top: 5px">
          {{ this.props.rating.reviewCount }} отзыва</p></div>
      </div>
    </div>
    <div style="margin-top: auto">
      <template v-if="!this.isInCart">
        <a-button type="primary" class="card_button" @click="() => onAddToCartClicked(this.props.id)">В корзину
        </a-button>
      </template>
      <template v-else>
        <div style="display: flex; margin-bottom: 5px">
          <a-button style="padding-left: 10px; padding-right: 10px"
                    @click="() => onDeleteFromCartClicked(this.props.id)">
            <a-icon type="minus"/>
          </a-button>
          <p style="margin-top: auto; margin-bottom: auto; padding: 3px">
            {{ this.inCartAmount }} шт
          </p>
          <a-button style="padding-left: 10px; padding-right: 10px" @click="() => onAddToCartClicked(this.props.id)">
            <a-icon type="plus"/>
          </a-button>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from "vue";
import Component from "vue-class-component";
import {Emit, Prop} from "vue-property-decorator";
import {IItem, IItemInCart} from "~/types/ItemTypes";

@Component
export default class DArticleCard extends Vue {
  @Prop()
  props!: IItem
  @Prop()
  small?: boolean;


  get cssProps(){
    if (this.small)
      return "small_card"
    else 
      return "card"
  }
  
  get isDisabled(){
    if (this.small)
      return "disabled"
    else 
      return ""
  }

  get isInCart(): boolean {
    return (<IItemInCart[]>this.$store.getters["cart-store/items"]).some(x => x.itemId == this.props.id)
  }

  get inCartAmount(): number {
    return (<IItemInCart[]>this.$store.getters["cart-store/items"]).find(x => x.itemId == this.props.id)?.amount ?? 0
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
.card {
  width: 250px;
  height: 400px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: white;
}

.small_card {
  background: white;
  width: 180px;
  height: 310px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.card_image {
  max-width: 100%;
  height: 100%;
  border-radius: 10px;
}

.card_price {
  color: red;
  margin-top: 5px;
}

.disabled {
  display: none!important;
}

.card_name {
  font-weight: 400;
  margin-top: 5px;
}

.card_button {
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 10px;
  font-weight: 700;
}
</style>