<template lang="html">

  <div id="home">
    <h1>Tela Inicial do Sistema ContaMe</h1>
    <nav>
      <router-link :to="{path: '/2017/' + month.id}" v-for="month in months" v-bind:month.id=month.title class="">
        {{month.title}}
      </router-link>
    </nav>

    <h5>Contas do mês de {{months[month-1]['title']}} de {{year}}</h5>
    <table class="mdl-data-table mdl-js-data-table">
      <thead>
        <tr>
          <th>Pagamento</th>
          <th class="mdl-data-table__cell--non-numeric">Descrição</th>
          <th>Valor (R$)</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{day}} / {{month}} / {{year}}</td>
          <td class="mdl-data-table__cell--non-numeric">
            <input class="" type="text" v-model="payment_add.description" />
          </td>
          <td>
            <input class="" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="payment-new--value" v-model="payment_add.value" />
          </td>
          <td>
            <button v-on:click='addPayment' class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
              Adicionar
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="3">Valor ao Final do Mês:</td>
          <td>R$&nbsp;{{payment}}</td>
        </tr>
        <tr v-for="pay in this.payments">
          <td>{{pay.day}} / {{pay.month}} / {{pay.year}}</td>
          <td class="mdl-data-table__cell--non-numeric">{{pay.description}}</td>
          <td>{{pay.value}}</td>
          <td>
            <button v-on:click='rmPayment(pay)' class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
              Remover
            </button>
          </td>
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
      'payments': [
        {'year': 2017, 'month': 8, 'day': 10, 'description': 'Salário', 'value': 1000.00},
        {'year': 2017, 'month': 8, 'day': 12, 'description': 'Sorvete Sorvita', 'value': -18.5}
      ].reverse(),
      'year': new Date().getFullYear(),
      'month': new Date().getMonth(),
      'day': new Date().getDate(),
      'payment_add': {
        'description': null,
        'value': null
      }
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
      this.payments.unshift({
        'year': Number(this.year),
        'month': Number(this.month),
        'day': Number(this.day),
        'description': this.payment_add.description,
        'value': Number(this.payment_add.value)
      })
      this.payment_add.description = null
      this.payment_add.value = null
    },
    rmPayment: function (pay) {
      let index = this.payments.findIndex(x => x === pay)
      this.payments.splice(index, 1)
    }
  }
}
</script>

<style lang="css">
</style>
