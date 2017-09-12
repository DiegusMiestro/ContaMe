<template>
  <div>
    <h1>Pagamentos</h1>
    <q-fixed-position corner="top-right" :offset="[12, -28]" class="btn-add">
      <q-btn round push color="secondary" @click="paymentCreate()" icon="add" />
    </q-fixed-position>
    <q-list sparse separator no-border>
      <q-item v-for="(pay, index) in payments" :key='index' >
        <q-item-main>
          <q-item-tile label>{{pay.description}}</q-item-tile>
          <q-item-tile sublabel>R$ {{pay.amount}}</q-item-tile>
          <q-item-tile sublabel>{{pay.date}}</q-item-tile>
        </q-item-main>
        <q-item-side right>
          <q-btn @click="paymentDelete(index)" round small color="red" icon="delete" />
        </q-item-side>
      </q-item>
    </q-list>
  </div>
</template>
<script>
import payments from '../datas/payments'
import { Alert, Dialog, QList, QItem, QItemSide, QItemMain, QItemTile, QBtn, QFixedPosition } from 'quasar'
export default {
  components: { Alert, Dialog, QList, QItem, QItemSide, QItemMain, QItemTile, QBtn, QFixedPosition },
  data () {
    return {
      payments: payments.everything,
      add: {'description': null, 'amount': null, 'date': null}
    }
  },
  methods: {
    paymentCreate: function () {
      Dialog.create({
        title: 'Adicionar Pagamento',
        message: 'Preencha abaixo as informações para novo pagamento.',
        form: {
          description: {
            type: 'text',
            label: 'Descrição',
            model: ''
          },
          amount: {
            type: 'number',
            label: 'Valor',
            model: ''
          },
          date: {
            type: 'text',
            label: 'Vencimento',
            model: ''
          }
        },
        buttons: [
          'Cancelar',
          {
            label: 'Salvar',
            handler: (data) => {
              this.payments.unshift({
                'amount': data.amount,
                'description': data.description,
                'date': data.date
              })
              Alert.create({color: 'positive', html: 'Pagamento Criado com sucesso!'})
            }
          }
        ]
      })
    },
    paymentDelete: function (index) {
      this.payments.splice(index, 1)
      Alert.create({color: 'info', html: 'Pagamento apagado com sucesso!'})
    }
  }
}
</script>
<style scoped>
.btn-add{z-index: 2000;}
</style>
