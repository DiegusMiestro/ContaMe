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
      <q-input v-model="add.description" type="text" float-label="Descrição" />
      <q-input v-model="add.amount" type="number" float-label="Valor (R$)" />
      <q-datetime v-model="add.date" type="date" stack-label="Vencimento" ok-label="Confirmar" cancel-label="Cancelar" clear-label="Limpar" />
      <q-btn color="negative" @click="$refs.addPaymentModal.close()">Cancelar</q-btn>
      <q-btn color="positive" @click="paymentCreate(), $refs.addPaymentModal.close()">Salvar</q-btn>
    </q-modal>
  </div>
</template>
<script>
import payments from '../datas/payments'
import { Toast, QModal, QList, QItem, QItemSide, QItemMain, QItemTile, QBtn, QFixedPosition, QInput, QDatetime } from 'quasar'

export default {
  components: { Toast, QModal, QList, QItem, QItemSide, QItemMain, QItemTile, QBtn, QFixedPosition, QInput, QDatetime },
  data () {
    return {
      payments: payments.everything,
      add: {'description': null, 'amount': null, 'date': null}
    }
  },
  methods: {
    paymentCreate: function () {
      console.log(this.add)
      this.payments.unshift({
        'description': this.add.description,
        'amount': this.add.amount,
        'date': this.add.date
      })
      Toast.create.positive({
        html: 'Adicionado: "' + this.add.description + '"',
        timeout: 6000
      })
      this.add.description = null
      this.add.amount = null
      this.add.date = null
    },
    paymentDelete: function (index, pay) {
      this.payments.splice(index, 1)
      Toast.create.negative({
        html: 'Removido: "' + pay.description + '"',
        timeout: 6000
      })
    }
  }
}
</script>
<style scoped>
.btn-add{z-index: 2000;}
</style>
