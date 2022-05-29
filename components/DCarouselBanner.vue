<template>
  <div :style="cssProps">
    <a-carousel autoplay :autoplaySpeed="10000">
      <template v-for="item in this.content">
        <a :href="item.link"><img :src="item.imageLink" class="image" alt=""></a>
      </template>
    </a-carousel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import {IImageLinkPair} from "~/types/imageLinkPair";

@Component
export default class DCarouselBanner extends Vue {
  @Prop()
  content?: IImageLinkPair[]
  @Prop()
  height?: string;
  @Prop()
  width?: string;

  get cssProps() {
    return {
      "--height": this.height ?? "100%",
      "--width": this.width ?? "100%"
    }
  }

}
</script>

<style scoped>


.ant-carousel >>> .slick-slide {
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  overflow: hidden;
  line-height: var(--height);
  max-height: var(--height);
}

.image {
  max-height: var(--height);
  width: var(--width);
  margin-right: auto;
  margin-left: auto;
}


</style>