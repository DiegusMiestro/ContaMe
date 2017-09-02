<template>
  <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">

    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">Title</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation -->
        <nav class="mdl-navigation">
          <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Início</router-link>
          <router-link class="mdl-navigation__link" to="/invoices" @click.native="hideMenu">Parcelas</router-link>
          <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Nova Conta</router-link>
        </nav>
      </div>
    </header>

    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Title</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Início</router-link>
        <router-link class="mdl-navigation__link" to="/invoices" @click.native="hideMenu">Parcelas</router-link>
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Nova Conta</router-link>
      </nav>
    </div>

    <main class="mdl-layout__content">
      <router-view></router-view>
    </main>
  </div>

</template>

<script>
require('material-design-lite')
export default {
  name: 'app',
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
</style>
