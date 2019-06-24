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
        <div class="modal-body row">
          <div class="col-12">
            <!-- TODO: item.imgSrc for image name-->
            <img :src="'src/assets/food/'+ item.imgSrc" alt class="img-fluid">
          </div>
          <template v-if="!notAvailable">
            <div class="input-group col-6">
              <select
                class="custom-select"
                id="inputGroupSelect"
                aria-label="Example select with button addon"
                v-model="option"
              >
                <option selected>Select amount</option>
                <option v-for="num in item.inStock" :key="num.id" :value="num">{{num}}</option>
              </select>
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  @click="addItem"
                  v-if="option !== 'Select amount'"
                >Add</button>
              </div>
            </div>
            <div
              class="col-6"
              v-if="option !== 'Select amount'"
            >{{ item.price * option | convertTotal }}</div>
          </template>
          <div class="col-12" v-else>This product is currently out of stock.</div>
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
      this.option = "Select amount";
    }
  },
  computed: {
    notAvailable() {
      return this.$store.getters.checkStock(this.item.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-body {
  & > div:nth-child(1) {
    margin-bottom: 2rem;
  }
}
</style>
