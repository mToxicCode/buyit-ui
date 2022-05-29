<template>
  <div class="default_container">
    <d-carousel-banner style="padding-left: 20px; padding-right: 20px; margin-top: 10px; margin-bottom: 10px" height="200px" width="100%" :content="sliderMock"/>
    <div v-for="section in getFrontPageSections">
      <d-ad-banner :link="section.banner.redirectUrl" :img="section.banner.imageUrl" style="margin-top: 10px; margin-bottom: 10px;"/>
      <d-cards-list :props="section.items" @add-to-cart="(e) => onArticleAddToCard(e)" @delete-from-cart="(e) => onArticleDeleteFromCard(e)"/>
    </div>


  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";
import {IItem, IItemInCart} from "~/types/ItemTypes";
import {IImageLinkPair} from "~/types/imageLinkPair";
import slidersMock from "~/__mocks__/slidersMock";
import ItemsClient, {IFrontPageSection} from "~/api/items-client";
import {DeliveryDeadline} from "~/types/filler";
import {SortingMode, SortingType} from "~/types/sorting";

@Component({async asyncData({params, error}){
    let response = await ItemsClient.getFacadeItems();
    let sections = response.sections;
    return {sections}
  }})
export default class IndexPage extends Vue {
  private sliderMock: IImageLinkPair[] = slidersMock.sliderSet;
  sections?: IFrontPageSection[]
  get getArticleCardsMock(){
    return {}
  }
  
  get getFrontPageSections(){
    return this.sections ?? [];
  }

  onArticleDeleteFromCard(id: number){
    this.$store.dispatch("cart-store/deleteItemFromCart", id)
  }

  onArticleAddToCard(id: number){
    this.$store.dispatch("cart-store/addItemToCart", id)
  }
}
</script>
