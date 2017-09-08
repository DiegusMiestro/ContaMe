<template>
  <div id="home">

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

    <q-fixed-position corner="top-right" :offset="[18, 18]">
      <q-btn round color="primary" @click="$refs.addPaymentModal.open()" icon="add" />
    </q-fixed-position>

    <q-modal ref="addPaymentModal" minimized>
      <h4>Adicionar Novo Pagamento</h4>

      <q-btn color="primary" @click="$refs.addPaymentModal.close()">Close</q-btn>
    </q-modal>

  </div>
</template>

<script>

import Months from '../datas/months'
import Payments from '../datas/payments'

import { QBtn, QIcon, QFixedPosition, QModal } from 'quasar'

let date = new Date()

export default {
  components: { QBtn, QIcon, QFixedPosition, QModal },
  data () {
    return {
      'day': date.getDate(),
      'month': date.getMonth() + 1,
      'year': date.getFullYear(),
      'months': Months,
      'payments': Payments[date.getFullYear()]['9']
    }
  },
  methods: {
    openAddPaymentModal: function () {
      this.$refs.addPaymentModal.open()
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
