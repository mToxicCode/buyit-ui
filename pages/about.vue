<template>
<div style="width: 100%; display: flex; flex-direction: column; align-items: center" class="default_container">
  <img src="../static/BuyItFavicon.png" alt="BuyIt Logo Fav" style="margin-top: 30px"/>
  <h1 style="margin-top: 20px; font-weight: 800; font-size: 50px">BuyIt Marketplace</h1>
  <h1>{{this.getItem}}</h1>
  <a-skeleton active/>
  <a-skeleton active/>
  <a-skeleton active/>
  <a-skeleton active/>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ItemsClient from "~/api/items-client";
import {IItem} from "~/types/ItemTypes";
import {DeliveryDeadline} from "~/types/filler";
import {SortingMode, SortingType} from "~/types/sorting";

@Component(  {async asyncData({params, error}){
  let item = await ItemsClient.getItemsByFilter({
    categories: [],
    deliveryDeadline: DeliveryDeadline.express,
    priceMax: 0,
    priceMin: 0,
    reviewCountMax: 0,
    reviewCountMin: 0,
  },{count: 0, offset: 0}, {mode: SortingMode.none, type: SortingType.none});
  return {item}
}})
export default class AboutPage extends Vue{
  item?:IItem;
  
  get getItem(){
    return this.item ?? {}
  }
}
</script>

<style scoped> 

</style>