<template lang="html">
// comment for commital
<div class="game-wrapper">
  <hero-card v-for="(card, index) in heroCard" :key="index" :card="card"/>
</div>

</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
</style>
