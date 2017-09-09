<template>
  <div id="home">

    <ul class="breadcrumb">
      <li v-for='(bc, index) in breadcrumb' :key="index">
        <a :href="bc.link">
          <q-icon :name="bc.icon" />{{bc.title}}
        </a>
      </li>
    </ul>

    <h1>Pagamentos de {{months[month]['title']}} de {{year}}</h1>

    <table class="q-table loose striped-odd">
      <thead>
        <tr>
          <th class="text-center">Vencimento</th>
          <th class="text-center">Produto</th>
          <th class="text-center">Preço</th>
          <th class="text-center">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bill in payments">
          <td class="text-center">{{bill.date}}</td>
          <td class="text-center">{{bill.title}}</td>
          <td class="text-left">R$ {{bill.value}}</td>
          <td class="text-left"><q-btn color="negative" @click='rmPayment(bill)'><q-icon name="delete" /></q-btn></td>
        </tr>
        <tr>
          <td class="text-right" colspan="2">Total: </td>
          <td class="text-left" colspan="2">R$ {{costPayments}}</td>
        </tr>
      </tbody>
    </table>

    <q-fixed-position corner="top-right" :offset="[18, -30]" style="z-index: 2000;">
      <q-btn round color="secondary" @click="$refs.addPaymentModal.open()" icon="add" />
    </q-fixed-position>

    <q-modal ref="addPaymentModal" minimized>
      <h5>Nova Conta</h5>
      <q-input type="text" v-model="addpayment.title" stack-label="Identificação da Conta" />
      <q-input type="number" v-model="addpayment.value" stack-label="Valor da Conta" />
      <q-datetime v-model="addpayment.date" type="date" stack-label="Data de Pagamento da Conta" />
      <q-btn color="negative" @click="$refs.addPaymentModal.close()">Cancelar</q-btn>
      <q-btn color="positive" @click="addPayment()">Salvar</q-btn>
    </q-modal>

  </div>
</template>

<script>

import Months from '../datas/months'
import Payments from '../datas/payments'

import { QBtn, QIcon, QFixedPosition, QModal, QInput, QDatetime } from 'quasar'

let date = new Date()

export default {
  components: { QBtn, QIcon, QFixedPosition, QModal, QInput, QDatetime },
  data () {
    return {
      'breadcrumb': [
        {'title': '', 'icon': 'home', 'link': '/'}
      ],
      'day': date.getDate(),
      // 'month': date.getMonth() + 1,
      'month': 9,
      // 'year': date.getFullYear(),
      'year': 2017,
      'months': Months,
      'payments': Payments[date.getFullYear()]['9'],
      'addpayment': {'date': date, 'title': null, 'value': 0}
    }
  },
  methods: {
    addPayment: function () {
      this.payments.push(this.addpayment)
      this.$refs.addPaymentModal.close()
      this.addpayment = {'date': date, 'title': null, 'value': 0}
    },
    rmPayment: function (payment) {
      this.payments = this.payments.filter(function (el) {
        return el !== payment
      })
    }
  },
  computed: {
    costPayments: function () {
      return this.payments.reduce((cost, payment) => cost + payment.value, 0)
    }
  }
}
</script>

<style>
</style>
