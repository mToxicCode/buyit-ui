<template>
  <header class="back header" >
    <div class="inner default_container">
      <NuxtLink style="display: flex; text-decoration: none;" to="/">
        <img src="../static/BuyItLogo.svg" alt="BuyItLogo" style="width: 120px">
        <p style="margin-left: 5px; color: #02bfbf;">
          Marketplace
        </p>
      </NuxtLink>
      <div style="width: 100%">
        <a-input-search placeholder="Искать на BuyIt" style="width: 100%" enter-button @search="onSearch"/>
      </div>
      <ul>
        <li>
          <a-badge count="2">
            <NuxtLink to="/user" style="display: flex; flex-direction: column; color: rgba(0, 0, 0, 0.65)">
              <a-icon type="smile" style="font-size: 30px"/>
              <div style="font-size: 10px">Кабинет</div>
            </NuxtLink>
          </a-badge>
        </li>
        <li>
          <a-badge :count="getCartCount"> <!-- TODO: Заменить на пропс -->
            <NuxtLink to="/cart" style="display: flex; flex-direction: column; color: rgba(0, 0, 0, 0.65)">
              <a-icon type="shopping-cart" style="font-size: 30px"/>
              <div style="font-size: 10px">Корзина</div>
            </NuxtLink>
          </a-badge>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {IItemInCart} from "~/types/ItemTypes";



@Component
export default class DHeader extends Vue {
  onSearch(value: string): void {
    this.$router.push("/search");
  }
  
  get getCartCount(){
    let result = 0;
    (<IItemInCart[]> this.$store.getters["cart-store/items"]).forEach(x => result += x.amount)
    return result
  }
}
</script>

<style scoped>
@import "shared-styles/global.css";

.back {
  width: 100%;
  height: 80px;
  z-index: 10;
  background: white;
}

.header {
  position:fixed;
  left:0;          
  top:0;            
  width:100%;      
  z-index:200;  
  height:80px;    
}

.inner {
  height: 100%;
  width: 100%;
  display: grid;
  padding-right: 30px;
  padding-left: 30px;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 3fr 1fr;
}

.upper_btn {

}

ul {
  margin-bottom: 0;
  width: 100%;
  display: flex;
  padding-left: 0;
  justify-content: space-around;
}

li {
  padding-left: 5px;
  padding-right: 5px;
  list-style: none;
}
</style>