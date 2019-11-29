<template>
  <div class="vws-list">
    <!-- User Interface controls -->
    <b-row class="mb-3">
      <b-col lg="6"></b-col>
      <b-col md="12" lg="6">
        <b-form-group
          label="Filter"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="filterInput"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Type to Search"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      show-empty
      small
      stacked="md"
      :items="items"
      :fields="fields"
      :filter="filter"
      :table-busy="isLoading">
    </b-table>
  </div>
</template>

<script>
import { getAllCandidates } from '@/services/candidate'

export default {
  name: 'vws-list',
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: 'Full name'
        },
        {
          key: 'email',
          label: 'Email'
        },
        {
          key: 'phone',
          label: 'Phone'
        },
        {
          key: 'code',
          label: 'Code'
        }
      ],
      items: [],
      filter: null,
      isLoading: true
    }
  },
  methods: {
    getList () {
      // Active indicator
      this.isLoading = true

      getAllCandidates().then(response => {
        // Update items
        this.items = response.data

        // Deactive indicator
        this.isLoading = false
      }).catch(error => {
        this.$bvToast.toast(error.response.data.message, {
          title: 'Error',
          variant: 'danger'
        })
      })
    }
  },
  mounted () {
    // Get list
    this.getList()
  }
}
</script>

<style lang="scss" scoped>

.vws-list {
  margin: 0 auto;
  max-width: 45rem;
}
</style>
