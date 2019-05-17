<template>
  <div class="col-6 col-md-4 case">
    <div class="cost">Cost</div>
    <div class="total">Total</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.case {
  background-color: #d69657;
  height: 200px;
  position: relative;
}

.cost {
  background-color: yellow;
  height: 30px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
}
.total {
  background-color: yellow;
  height: 30px;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 20px;
}
</style>

