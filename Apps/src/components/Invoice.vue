<template lang="html">

  <h1>Parcela: {{$route.params.month}} / {{$route.params.year}}</h1>

</template>

<script>
import data from '../data'
export default {
  data () {
    return {
      'months': data.months
    }
  }
}
</script>

<style lang="css">
</style>
