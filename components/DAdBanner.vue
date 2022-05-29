<template>
  <div :style="cssProps">
  <div class="banner_base">
    <a :href="linkProp">
      <img :src="imgProp" alt="" class="image_base">
    </a>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";

@Component
export default class DAdBanner extends Vue {
  @Prop()
  img?: string;
  @Prop()
  link?: string;
  @Prop()
  light?: boolean;
  
  get cssProps(){
    return {
      "--hover-opacity": this.light == undefined ? 0.5 : 0.95
    }
  }

  get imgProp(): string {
    return this.img ?? '';
  }

  get linkProp(): string {
    return this.link ?? '';
  }
}
</script>

<style scoped>

.banner_base {
  background: black;
  border-radius: 20px;
  opacity: 1;
}

.image_base {
  border-radius: 20px;
  width: 100%;
}

.image_base:hover {
  opacity: var(--hover-opacity);
}

</style>