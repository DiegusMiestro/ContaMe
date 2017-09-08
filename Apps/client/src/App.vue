<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">

    <q-layout ref="layout" view="lHh LpR lFf" :right-breakpoint="1100">
      <!-- Header -->
      <q-toolbar slot="header" color="primary">
        <q-btn flat @click="$refs.layout.toggleLeft()">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          Sistema ContaMe
          <span slot="subtitle">Controle de contas pessoais</span>
        </q-toolbar-title>
      </q-toolbar>

      <!-- Navigation -->
      <q-tabs slot="navigation">
        <q-route-tab v-for="(nav, index) in navigate" :key="index" slot="title" :icon="nav.icon" :to="nav.link" replace hide="icon" :label="nav.label" />
      </q-tabs>

      <!-- Left Side Panel -->
      <div slot="left">
        <q-list no-border link inset-separator>
          <q-list-header>Essential Links</q-list-header>
          <q-side-link item v-for="(nav, index) in navigate" :key="index" :to="nav.link">
            <q-item-side :icon="nav.icon" />
            <q-item-main :label="nav.label" :sublabel="nav.sublabel" />
          </q-side-link>
        </q-list>
      </div>

      <router-view />

      <q-toolbar slot="footer">
        <q-toolbar-title>
          Layout Footer
        </q-toolbar-title>
      </q-toolbar>
    </q-layout>

  </div>
</template>

<script>
/*
* Root component
*/

import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QTabs,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader,
  QScrollArea
} from 'quasar'

import menus from './datas/menus'

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
    QScrollArea
  },
  data () {
    return {
      'navigate': menus.navigate
    }
  }
}
</script>

<style lang="stylus">

</style>
