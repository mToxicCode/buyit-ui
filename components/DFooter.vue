<template>
  <footer class="back">
    <div class="footer default_container">
      <div>
        <img src="../static/BuyItFavicon.png" alt="BuyItLogoFav">
      </div>
      <div>
        <NuxtLink to="/">BuyIt</NuxtLink>
        <p class="under_scope">Интернет-магазин</p>
      </div>
      <div>
        <NuxtLink to="/">BuyIt Вакансии</NuxtLink>
        <p class="under_scope">Работа в BuyIt</p>
      </div>
      <div>      
        <NuxtLink to="/">Стать селлером</NuxtLink>
        <p class="under_scope">Работа с нами</p></div>
      <div>
        <NuxtLink to="/about">О Нас</NuxtLink>
        <p class="under_scope">Наша деятельность</p>
      </div>
    </div>
    <div class="default_container lower_text"><p style="font-size: 10px">daniilda & ToxiCode © Все права защищены</p></div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class DFooter extends Vue {
  
}
</script>

<style scoped>
@import "shared-styles/global.css";

.footer {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
}

.lower_text {
  display: flex;
  justify-content: center;
}

.back{
  width: 100%;
  height: 200px;
  background: rgba(0, 0, 0, 0.15);
  padding-top: 30px;
}

.under_scope{
  margin-top: 10px;
}
</style>