<template>
  <!-- https://3dtransforms.desandro.com/cube -->
  <div>
    <div class="scene">
      <div class="cube">
        <div class="cube__face cube__face--front">front</div>
        <div class="cube__face cube__face--back">back</div>
        <div class="cube__face cube__face--right">right</div>
        <div class="cube__face cube__face--left">left</div>
        <div class="cube__face cube__face--top">top</div>
        <div class="cube__face cube__face--bottom">bottom</div>
      </div>
    </div>
    <!-- <div class="scene">
      <div class="cube">
        <div class="cube__face cube__face--front">front</div>
        <div class="cube__face cube__face--back">back</div>
        <div class="cube__face cube__face--right">right</div>
        <div class="cube__face cube__face--left">left</div>
        <div class="cube__face cube__face--bottom">bottom</div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.scene {
  width: 400px;
  height: 200px;
  perspective: 600px;

  perspective-origin: top;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
}

.cube__face {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 1px solid;
  background-color: #a0ff002e;
}

.cube__face--front {
  width: 400px;
  transform: rotateY(0deg);
}
.cube__face--right {
  transform: rotateY(90deg);
}
.cube__face--back {
  width: 400px;
  transform: rotateY(180deg);
}
.cube__face--left {
  transform: rotateY(-90deg);
}
.cube__face--top {
  width: 400px;
  transform: rotateX(90deg);
}
.cube__face--bottom {
  width: 400px;
  transform: rotateX(-90deg);
}

.cube__face--front {
  transform: rotateY(0deg) translateZ(100px);
}
.cube__face--right {
  transform: rotateY(90deg) translateZ(300px);
}
.cube__face--back {
  transform: rotateY(180deg) translateZ(100px);
}
.cube__face--left {
  transform: rotateY(-90deg) translateZ(100px);
}
.cube__face--top {
  transform: rotateX(90deg) translateZ(100px);
}
.cube__face--bottom {
  transform: rotateX(-90deg) translateZ(100px);
}

.cube {
  transform: translateZ(-100px);
}
</style>
