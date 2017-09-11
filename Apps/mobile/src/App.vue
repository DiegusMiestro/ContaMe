<template>
  <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}" >
    <q-toolbar slot="header" class="">
      <q-btn flat @click="$refs.layout.toggleLeft()" >
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        ContaMe App
        <div slot="subtitle">Sistema de Gestão Financeira Doméstica</div>
      </q-toolbar-title>
    </q-toolbar>

    <div slot="left">
      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-side-link item v-for="(link, index) in navigate" :key="index" :to="link.url">
          <q-item-side :icon="link.icon" />
          <q-item-main :label="link.label" :sublabel="link.sublabel" />
        </q-side-link>

      </q-list>
    </div>

    <!--
    Replace following <div> with
    <router-view /> component
    if using subRoutes
  -->
  <router-view />
</q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QSideLink,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QSideLink,
    QItem,
    QItemSide,
    QItemMain
  },
  data () {
    return {
      navigate: [
        {'label': 'Pagamentos', 'sublabel': 'Últimos Pagamentos', 'url': '/payments/', 'icon': 'collections_bookmarks'},
        {'label': 'Mensal', 'sublabel': 'Pagamentos do mês', 'url': '/Month/', 'icon': 'date_ranger'},
        {'label': 'Parcelas', 'sublabel': 'Pagamentos Parcelados', 'url': '/Monthly/', 'icon': 'credit_card'}
      ]
    }
  },
  computed: {

  },
  methods: {

  },
  mounted () {

  },
  beforeDestroy () {

  }
}
</script>

<style lang="stylus">

</style>
