<template>
  <div class="cards_holder">
    <template v-for="card in getArticleCardsMock">
      <d-article-card :props="card" :key="card.articleId" @add-to-cart="(e) => onArticleAddToCard(e)"/>
    </template>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Mock from "~/__mocks__/Mock";
import {IArticleCard} from "~/types/cardsType";

@Component
export default class DCardsList extends Vue {
  
  private articleCardsMock: IArticleCard[] = Mock.getArticleCards(5  );
  get getArticleCardsMock(){
    return this.articleCardsMock
  }
  
  onArticleAddToCard(articleId: number): void {
    let temp = this.articleCardsMock.find((x) => x.articleId == articleId);
    if (temp == undefined)
      return;
    temp.amountInCart = 1;
    let newArr = this.articleCardsMock.map(x => x.articleId !== articleId ? x : temp);
    if (newArr == undefined)
      return;
    console.log(newArr)
    this.articleCardsMock = newArr as IArticleCard[];
  }
  
  
}
</script>

<style scoped>
  .cards_holder {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    justify-items: center;
    align-items: center;
  }
</style>