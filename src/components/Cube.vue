<template>
  <!-- The html and styles were taken from https://davidwalsh.name/css-cube as a starter -->
  <div>
    <div class="wrap">
      <div class="cube">
        <div class="front">
          front
          <div class="tag">Tag</div>
        </div>
        <div class="back">back</div>
        <div class="top">top</div>
        <div class="bottom">bottom</div>
        <div class="left">left</div>
        <div class="right">right</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  perspective: 800px;
  perspective-origin: 50% 100px;
}

.cube {
  position: relative;
  width: 200px;
  transform-style: preserve-3d;
  /* centers */
  /* margin: 0 auto; */
}

.cube > div {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 1px solid;
}

.back {
  transform: translateZ(-100px) rotateY(180deg);

   /*  */
  width: 42rem !important;
}
.right {
  transform: rotateY(-270deg) translateX(100px) translateZ(472px);
  transform-origin: center right;
}
.left {
  transform: rotateY(270deg) translateX(-100px);
  transform-origin: center left;
}
.top {
  transform: rotateX(-90deg) translateY(-100px);
  transform-origin: top center;

  /*  */
  width: 42rem !important;

}
.bottom {
  transform: rotateX(90deg) translateY(100px);
  transform-origin: bottom center;

  /*  */
  width: 42rem !important;

}
.front {
  transform: translateZ(100px);
  /*  */
  width: 42rem !important;
}

.tag {
  position: absolute;
  height: 20px;
  width: 50px;
  background-color: wheat;
}
</style>
