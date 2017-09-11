<template>
  <div>
    <h1>Pagamentos</h1>
    <q-data-table :data="payments" :config="config" :columns="columns" @selection="selection">
      <template slot="col-message" scope="cell">
        <span class="light-paragraph">{{cell.data}}</span>
      </template>

      <template slot="col-source" scope="cell">
        <div v-if="cell.data === 'Audit'" class="my-label text-white bg-primary">
          Audit
          <q-tooltip>Some data</q-tooltip>
        </div>
        <div v-else class="my-label text-white bg-negative">{{cell.data}}</div>
      </template>

      <template slot="selection" scope="props">
        <q-btn flat color="primary" @click="changeMessage(props)">
          <q-icon name="edit" />
        </q-btn>
        <q-btn flat color="primary" @click="deleteRow(props)">
          <q-icon name="delete" />
        </q-btn>
      </template>
    </q-data-table>
  </div>
</template>

<script>
import payments from '../datas/payments'
import {
  QDataTable,
  QField,
  QInput,
  QCheckbox,
  QSelect,
  QSlider,
  QBtn,
  QIcon,
  QTooltip,
  QCollapsible
} from 'quasar'
export default {
  components: {
    QDataTable,
    QField,
    QInput,
    QCheckbox,
    QSelect,
    QSlider,
    QBtn,
    QIcon,
    QTooltip,
    QCollapsible
  },
  data () {
    return {
      payments: payments.everything,
      // selection: true,
      config: {
        columnPicker: true,
        rowHeight: '64px',
        responsive: true,
        messages: {
          noData: '<i>Não Encontrado</i> Não Há registros de Pagamentos.',
          noDataAfterFiltering: '<i>Não Encontrado</i>Por favor redefina sua busca.'
        },
        selection: 'multiple',
        // (optional) Override default labels. Useful for I18n.
        labels: {
          columns: 'Colunas',
          allCols: 'Todas as Colunas',
          rows: 'Linhas',
          selected: {
            singular: 'Pagamento Selecionado.',
            plural: 'Pagamentos Selecionados.'
          },
          clear: 'Limpar',
          search: 'Procurar',
          all: 'Tudo'
        }
      },
      columns: [
        {
          label: 'Data do Pagamento',
          field: 'date',
          width: '32px',
          filter: true,
          sort: true,
          type: 'date',
          format (value, row) {
            return new Date(value).toLocaleString()
          }
        },
        {
          label: 'Descrição',
          field: 'description',
          width: '100px',
          filter: true,
          type: 'string'
        },
        {
          label: 'Valor(R$)',
          field: 'amount',
          width: '32px',
          filter: true,
          type: 'number',
          format (value, row) {
            return 'R$ ' + value
          }
        }
      ]
    }
  },
  methods: {
    changeMessage (props) {
      props.rows.forEach(row => {
        row.data.message = 'Gogu'
      })
    },
    deleteRow (props) {
      props.rows.forEach(row => {
        this.table.splice(row.index, 1)
      })
    },
    refresh (done) {
      this.timeout = setTimeout(() => {
        done()
      }, 5000)
    },
    selection (number, rows) {
      console.log(`selected ${number}: ${rows}`)
    },
    rowClick (row) {
      console.log('clicked on a row', row)
    }
  }
}
</script>

<style>
</style>
