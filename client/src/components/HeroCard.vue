<template lang="html">
 <h1> {{heroCard.name}}</h1>
 <h3>{{heroCard.type}}</h3>
</template>

<script>

import { eventBus } from '../main.js'
import GameService from '@/services/GameService.js'

export default {
  name: 'hero-card',
  props: ['heroCard']
}
</script>

<style lang="css" scoped>
</style>
