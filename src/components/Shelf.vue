<template>
  <div class="row shelf">
    <item v-for="item in food" :key="item.id" :item="item"></item>
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
