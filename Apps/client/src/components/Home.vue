<template>
  <div id="home">

    <h1>Aprendendo Quasar Framework</h1>

    <q-icon name="icon-chrome" />

    <!-- Material Icon -->
    <q-icon name="thumb_up"  class="big-icon" />

    <div class="row justify-around">
      <a href="primeira/" class="col">Primeira Coluna!</a>
      <a href="segunda/" class="col">Segunda Coluna!!</a>
      <a href="terceira/" class="col">Terceira Coluna!!!</a>
      <a href="quarta/" class="col">Quarta Coluna!!!!</a>
      <a href="quinta/" class="col">Quinta Coluna!!!!!</a>
    </div>

  </div>
</template>

<script>
// import data from '../data'
import { QIcon } from 'quasar'
export default {
  components: {
    QIcon
  },
  data () {
    return {
      // 'months': data.months,
      // 'payments': data.payments
    }
  }
}
</script>

<style>
</style>
