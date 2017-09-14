<template>
  <div>
    <h1>Pagamentos</h1>
    <q-fixed-position corner="top-right" :offset="[12, -28]" class="btn-add">
      <q-btn round push color="secondary" @click="$refs.addPaymentModal.open()" icon="add" />
    </q-fixed-position>
    <q-list sparse separator no-border>
      <q-item v-for="(pay, index) in payments" :key='index' >
        <q-item-main>
          <q-item-tile label>{{pay.description}}</q-item-tile>
          <q-item-tile sublabel>R$ {{pay.amount}}</q-item-tile>
          <q-item-tile sublabel>{{pay.date}}</q-item-tile>
        </q-item-main>
        <q-item-side right>
          <q-btn @click="paymentDelete(index, pay)" round small color="red" icon="delete" />
        </q-item-side>
      </q-item>
    </q-list>
    <q-modal maximized ref="addPaymentModal">
      <h4>Adicionar Pagamento</h4>
      <div class="row">
        <q-radio class="col-4 offset-1" v-model="add.signal" val="+" label="Recebendo" color="positive" />
        <q-radio class="col-4 offset-2" v-model="add.signal" val="-" label="Pagando" color="negative" />
      </div>
      <div class="row">
        <q-input class="col-10 offset-1" v-model="add.description" type="text" float-label="Descrição do pagamento" />
      </div>
      <div class="row">
        <q-input class="col-10 offset-1" v-model="add.amount" type="number" float-label="Valor do pagamento (R$)" />
      </div>
      <br />
      <div class="row">
        <q-datetime
          class="col-10 offset-1"
          v-model="add.date"
          type="date"
          stack-label="Vencimento do pagamento"
          ok-label="Confirmar"
          cancel-label="Cancelar"
          clear-label=""
          :month-names="months"
          :day-names="weekdays"
          format="DD/MM/YYYY"
        />
      </div>
      <br />
      <div class="row">
        <q-btn class="col-4 offset-1" color="negative" @click="$refs.addPaymentModal.close()">Cancelar</q-btn>
        <q-btn class="col-4 offset-2" color="positive" @click="paymentCreate(), $refs.addPaymentModal.close()">Salvar</q-btn>
      </div>
    </q-modal>
  </div>
</template>
<script>
import payments from '../datas/payments'
import periods from '../datas/periods'
import { Toast, QModal, QList, QItem, QItemSide, QItemMain, QItemTile, QBtn, QFixedPosition, QInput, QDatetime, QRadio } from 'quasar'

export default {
  components: { Toast, QModal, QList, QItem, QItemSide, QItemMain, QItemTile, QBtn, QFixedPosition, QInput, QDatetime, QRadio },
  data () {
    return {
      payments: payments.everything,
      months: periods.months.simplelist,
      weekdays: periods.weekdays.simplelist,
      add: {'description': null, 'amount': null, 'date': null, 'signal': null}
    }
  },
  methods: {
    paymentCreate: function () {
      this.payments.unshift({
        'description': this.add.description,
        'amount': Number(this.add.signal + this.add.amount),
        'date': new Date(this.add.date)
      })
      Toast.create.positive({
        html: 'Adicionado: "' + this.add.description + '"',
        timeout: 3000
      })
      this.add.description = null
      this.add.amount = null
      this.add.date = null
      this.add.signal = null
    },
    paymentDelete: function (index, pay) {
      this.payments.splice(index, 1)
      Toast.create.negative({
        html: 'Removido: "' + pay.description + '"',
        timeout: 3000
      })
    }
  }
}
</script>
<style scoped>
.btn-add{z-index: 2000;}
</style>
