<template>
<div class="pagination">
  <button v-on:click="$store.commit('prevPage')">prev</button>
  <button v-on:click="$store.commit('nextPage')">next</button>
</div>
</template>

<script>
import List from '@/components/List.vue'

export default {
  name: "Pagination",
  components: { List },
}
</script>

<style lang="scss">

</style>