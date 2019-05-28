<template>
  <div
    class="modal fade"
    :id="modalId"
    tabindex="-1"
    role="dialog"
    :aria-labelledby="item.food+'Label'"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="item.food+'Label'">{{item.food}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="col-12">
            <!-- TODO: item.imgSrc for 'apple.png'-->
            <img :src="'src/assets/food/'+'bananas.png'" alt class="img-fluid">
          </div>
          <div class="input-group" v-if="!notAvailable">
            <select
              class="custom-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              v-model="option"
            >
              <option selected>Select amount</option>
              <option v-for="num in item.inStock" :key="num.id" :value="num">{{num}}</option>
            </select>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="addItem">Add</button>
            </div>
          </div>
          <div v-else>This product is currently out of stock.</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "modalId"],
  data() {
    return {
      option: "Select amount" // default
    };
  },
  methods: {
    addItem() {
      this.$store.dispatch("addItem", {
        item: this.item,
        amount: this.option
      });
      this.$store.dispatch("takeItem", {
        id: this.item.id,
        amount: this.option
      });
    }
  },
  computed: {
    notAvailable() {
      return this.$store.getters.checkStock(this.item.id);
    }
  }
};
</script>

<style>
</style>
