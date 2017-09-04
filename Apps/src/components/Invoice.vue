<template lang="html">

  <h1>Pagamentos de {{months[month-1]['title']}} / {{year}}</h1>

</template>

<script>
import data from '../data'
export default {
  data () {
    return {
      'months': data.months,
      'year': this.$route.params.year,
      'month': this.$route.params.month
    }
  }
}
</script>

<style lang="css">
</style>
