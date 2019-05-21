<template>
  <div class="col-6 col-md-4 case">
    <img src="../assets/food/apple.png" alt="Apple" class="img-fluid">
    <div class="cost">Cost</div>
    <div class="total">Total</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.case {
  background-color: #ffd2a6;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
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

img {
  max-height: 80%;
}
</style>

