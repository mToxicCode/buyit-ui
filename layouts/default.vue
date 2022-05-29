<template>
  <div>
    <DHeader/>
    <Nuxt style="margin-top: 80px;"/>
    <DFooter style="margin-top: 0px"/>
  </div>
</template>


<script>
import Vue from "vue";
import cartStorageFetching from "@/middleware/cart-storage-fetching";

export default Vue.extend({
  middleware: ['authentication', 'cart-storage-fetching']
})
</script>