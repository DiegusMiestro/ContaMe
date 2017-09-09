<template>
  <div id="home">

    <ul class="breadcrumb">
      <li v-for='(bc, index) in breadcrumb' :key="index">
        <a :href="bc.link">
          <q-icon :name="bc.icon" />{{bc.title}}
        </a>
      </li>
    </ul>

    <h1>Arquivo ou Diretório Não Encontrado</h1>

  </div>
</template>

<script>
import {QIcon} from 'quasar'

export default {
  components: {QIcon},
  data () {
    return {
      'breadcrumb': [
        {'title': '', 'icon': 'home', 'link': '/'},
        {'title': 'Página Não Encontrada', 'icon': '', 'link': 'error404'}
      ]
    }
  }
}
</script>

<style>
</style>
