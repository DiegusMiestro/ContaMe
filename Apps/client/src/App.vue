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

      <ul class="breadcrumb">
        <li><a><q-icon name="home" /></a></li>
        <li><a><q-icon name="mail" /> Quasar</a></li>
        <li><a><q-icon name="cloud" /> Breadcrumb</a></li>
      </ul>

      

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
  QTabs,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader
} from 'quasar'

import menus from './datas/menus'

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader
  },
  data () {
    return {
      'navigate': menus.navigate,
      'tabs': menus.tabs
    }
  }
}
</script>

<style lang="stylus">

</style>
