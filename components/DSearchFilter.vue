<template>
<div class="filters_box">
  <div>
  <p style="font-weight: 800">Цена</p>
  <a-slider range :default-value="[9999, 99999]" :max="99999" :min = "9999"/>
  <div style="display: flex; margin-top: 20px">
    <a-input/>
    <div style="width: 80px"></div>
    <a-input/>
  </div>
  </div>
  <div style="margin-top: 20px">
    <p style="font-weight: 800">Сроки доставки</p>
    <a-radio-group :default-value="1">
      <a-radio style="display: block; font-weight: 500" :value="1">
        Не важно
      </a-radio>
      <a-radio style="display: block; margin-top: 5px; color: red; font-weight: 500" :value="2">
        Express - за час!
      </a-radio>
      <a-radio style="display: block; margin-top: 5px; color: green; font-weight: 500" :value="3">
        Сегодня
      </a-radio>
      <a-radio style="display: block; margin-top: 5px; font-weight: 500" :value="4">
        До 2-х дней
      </a-radio>
      <a-radio style="display: block; margin-top: 5px; font-weight: 500" :value="5">
        До 5-ти дней
      </a-radio>
    </a-radio-group>
  </div>
  <div style="margin-top: 10px">
    <p style="font-weight: 800">Количество отзывов</p>
    <a-slider range :default-value="[0, 999]" :max="999" :min = "0"/>
    <div style="display: flex; margin-top: 20px">
      <a-input/>
      <div style="width: 80px"></div>
      <a-input/>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class DSearchFilter extends Vue{

}
</script>

<style scoped>

.filters_box {
  margin-top: 10px;
  max-width: 280px;
  min-width: 280px;
  height: 100%;
}

</style>