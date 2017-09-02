<template lang="html">

  <div id="home">
    <h1>Tela Inicial do Sistema ContaMe</h1>
    <nav>
      <router-link :to="{path: '/invoice/2017/' + month.id}" v-for="month in this.months" v-bind:month.id=month.title class="">
        {{month.title}}
      </router-link>
    </nav>

    {{this.payment_new}}

    <div class="mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card--expand">
        <h4>Adicionar Novo Pagamento:</h4>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" id="payment-new--description" v-model="this.payment_new.description">
          <label class="mdl-textfield__label" for="payment-new--description">Descrição</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="payment-new--value" v-model="this.payment_new.value">
          <label class="mdl-textfield__label" for="payment-new--value">R$ Valor</label>
        </div>
        <div class="mdl-layout-spacer"></div>
        <button v-on:click='addPayment' class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          Adicionar
        </button>
      </div>
    </div>

    <h5>Contas do mês de Agosto</h5>
    <table class="mdl-data-table mdl-js-data-table">
      <thead>
        <tr>
          <th>Ano / Mês</th>
          <th class="mdl-data-table__cell--non-numeric">Descrição</th>
          <th>Valor (R$)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pay in this.payments">
          <th>{{pay.year}} / {{pay.month}}</th>
          <th class="mdl-data-table__cell--non-numeric">{{pay.description}}</th>
          <th>{{pay.value}}</th>
        </tr>
        <tr>
          <th colspan="2">Total:</th>
          <th>{{payment}}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import data from '../data'
export default {
  data () {
    return {
      'months': data.months,
      'payments': data.payments,
      'payment_new': {'year': 2017, 'month': 8, 'description': 'Nothing', 'value': 0.0}
    }
  },
  computed: {
    payment: function () {
      let pay = 0.0
      for (var i = 0; i < this.payments.length; i++) {
        pay += this.payments[i].value
      }
      return pay
    }
  },
  methods: {
    addPayment: function () {
      this.payments.push(this.payment_new)
      // this.payment_new.description = ''
      // this.payment_new.value = 0.0
    }
  }
}
</script>

<style lang="css">
</style>
