<template>
  <div class="vws-list">
    <!-- User Interface controls -->
    <b-row>
      <b-col lg="6" class="my-1">
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
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filterIncludedFields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      :table-busy="isLoading"
      @filtered="onFiltered">
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
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      isLoading: true
    }
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    }
  },
  methods: {
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    getList () {
      // Active indicator
      this.isLoading = true

      getAllCandidates().then(response => {
        // Update items
        this.items = response.data

        // Set the initial number of items
        this.totalRows = this.items.length

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
