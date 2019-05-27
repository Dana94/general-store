<template>
  <div class="row shelf">
    <!-- 1 back to food -->
    <item v-for="item in 1" :key="item.id" :item="item"></item>
  </div>
</template>

<script>
import Item from "./Items/Item.vue";

export default {
  components: {
    Item
  },
  computed: {
    food() {
      return this.$store.getters.stockShelf;
    }
  },
  created() {
    this.$store.dispatch("initShelf");
  }
};
</script>

<style scoped>
.shelf {
  padding: 2rem;
  padding-top: 0;
}
</style>
