<template>
  <div class="search_base default_container">
    <d-search-filter/>
    <div style="min-width: 100px; width: 100%;  margin-top: 10px; margin-bottom: 50px">
      <div>
        <a-select default-value="Популярные" style="width: 250px; margin-left: 20px">
          <a-select-option :key="1">
            Популярные
          </a-select-option>
          <a-select-option :key="2">
            Самые дорогие
          </a-select-option>         
          <a-select-option :key="3">
            Самые дешевые
          </a-select-option>          
          <a-select-option :key="4">
            Высокий рейтинг
          </a-select-option>
        </a-select>
      </div>
      <d-cards-list :props="this.mock"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class SearchPage extends Vue {
}
</script>

<style scoped>

.search_base {
  display: flex;
}

</style>