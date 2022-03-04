<template>
  <header class="back">
    <div class="inner">
      <div style="font-size: 30px; font-weight: 800">
        BuyIt
      </div>
      <div style="width: 100%">
        <a-input-search placeholder="Искать на BuyIt" style="width: 100%"/>
      </div>
      <ul>
        <li>
          <a-badge count="2">
          <a href="#" style="display: flex; flex-direction: column; color: rgba(0, 0, 0, 0.65)">
            <a-icon type="smile" style="font-size: 30px" />
            <div style="font-size: 10px">Кабинет</div>
          </a>
          </a-badge>
        </li>
        <li>
          <a-badge count="1"> <!-- TODO: Заменить на пропс -->
          <a href="#" style="display: flex; flex-direction: column; color: rgba(0, 0, 0, 0.65)">
            <a-icon type="shopping-cart" style="font-size: 30px"/>
            <div style="font-size: 10px">Корзина</div>
          </a>
          </a-badge>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class DHeader extends Vue{

}
</script>

<style scoped>

.back{
  background: #bae8e8;
  width: 100%;
  height: 80px;
}

.inner{
  width: 100%;
  height: 100%;
  display: grid;
  padding-right: 30px;
  padding-left: 30px;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 3fr 1fr;
}

.upper_btn {
  
}

ul{
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