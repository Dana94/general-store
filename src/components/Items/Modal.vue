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
            <img :src="'dist/'+'apple.png'" alt class="img-fluid">
          </div>
          <div class="input-group">
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
              <button class="btn btn-outline-secondary" type="button">Button</button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
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
    // addFood() {
    //   this.$store.dispatch("addItem", this.item);
    //   this.$store.dispatch("takeItem", this.item);
    // }
  },
  created() {
    console.log("title ", this.title);
  },
  watch: {
    option() {
      console.log("updated ", this.option);
    }
  }
};
</script>

<style>
</style>
