<template>
  <div class="card">
    <div style="height: 200px">
    <img class="card_image" v-bind:src="this.props.imageLink" alt="card image"/>
    </div>
    <div style="display: flex; flex-direction: column;">
      <span class="card_price">{{ this.props.articlePrice }} {{ this.props.priceCurrency }}</span>
      <a class="card_name">{{ this.props.articleName }}</a>
    </div>
    <div style="margin-top: auto">
      <template v-if="!this.isInCart">
        <a-button type="primary" class="card_button" @click="() => onAddToCartClicked(this.props.articleId)">В корзину</a-button>
      </template>
      <template v-else>
        <div style="display: flex; margin-bottom: 5px">
          <a-button style="padding-left: 10px; padding-right: 10px"><a-icon type="minus"/></a-button>
          <p style="margin-top: auto; margin-bottom: auto; padding: 3px">
           {{ this.props.amountInCart }} шт
          </p>
          <a-button style="padding-left: 10px; padding-right: 10px"><a-icon type="plus" /></a-button>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from "vue";
import Component from "vue-class-component";
import {Emit, Prop} from "vue-property-decorator";
import {IArticleCard} from "~/types/cardsType";

@Component
export default class DArticleCard extends Vue {
  @Prop()
  props!: IArticleCard
  
  get isInCart():boolean {
    return this.props.amountInCart > 0;
  }
  
  @Emit('add-to-cart')
  onAddToCartClicked(articleId:number):number {
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
}

.card:hover {
  transition-duration: 1s;
  background: rgba(100, 107, 112, 0.1);;
}

.card_image {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.card_price {
  color: red;
  margin-top: 5px;
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