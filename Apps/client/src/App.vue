<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">

    <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100">
      <!-- Header -->
      <q-toolbar slot="header">
        <q-btn flat @click="$refs.layout.toggleLeft()">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          Sistema ContaMe
          <span slot="subtitle">Controle de contas pessoais</span>
        </q-toolbar-title>
        <q-btn flat @click="$refs.layout.toggleRight()">
          <q-icon name="menu" />
        </q-btn>
      </q-toolbar>

      <!-- Navigation -->
      <q-tabs slot="navigation">
        <q-route-tab slot="title" icon="view_quilt" to="/test-layout/about" replace hide="icon" label="About" />
        <q-route-tab slot="title" icon="view_day" to="/test-layout/toolbar" replace hide="icon" label="Toolbar" />
        <q-route-tab slot="title" icon="view_day" to="/test-layout/tabs" replace label="Tabs" />
        <q-route-tab slot="title" icon="input" to="/test-layout/drawer" replace label="Drawer" />
      </q-tabs>

      <!-- Left Side Panel -->
      <div slot="left">
        <q-list no-border link inset-separator>
          <q-list-header>Essential Links</q-list-header>
          <q-side-link item to="/docs" v-for="nav in navigate">
            <q-item-side icon="school" />
            <q-item-main label="Docs" sublabel="quasar-framework.org" />
          </q-side-link>
        </q-list>
      </div>
      <!-- Right Side Panel -->
      <div slot="right">
        Right Side of Layout
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
