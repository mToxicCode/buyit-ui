<template>
  <div class="cards_holder">
    <template v-for="card in getArticleCardsMock">
      <d-article-card :props="card" :key="card.id" @add-to-cart="(e) => onArticleAddToCard(e)" @delete-from-cart="(e) => onArticleDeleteFromCard(e)"/>
    </template>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {IItem} from "~/types/ItemTypes";
import {Emit, Prop} from "vue-property-decorator";
 
@Component
export default class DCardsList extends Vue {
  @Prop()
  props!: IItem[]
  
  @Emit('add-to-cart')
  onArticleAddToCard(articleId:number):number{
    return articleId;
  }  
  @Emit('delete-from-cart')
  onArticleDeleteFromCard(articleId:number):number{
    return articleId;
  }
  
  get getArticleCardsMock(){
    return this.props;
  }
  
}
</script>

<style scoped>
  .cards_holder {
    min-width: 260px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    justify-items: center;
    align-items: center;
    min-height: 100%;
  }
</style>