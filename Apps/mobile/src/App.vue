<template>
  <q-layout ref="layout" view="hHh Lpr fff" :left-class="{'bg-grey-2': true}" >
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

import menus from './datas/menus'

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
      navigate: menus.navigate
    }
  },
  computed: {

  },
  methods: {}
}
</script>

<style lang="stylus">

</style>
