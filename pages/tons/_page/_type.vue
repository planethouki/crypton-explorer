<template lang="pug">
  section
    .d-flex.d-md-none.align-items-end.justify-content-between
      b-pagination-nav(
        :link-gen="linkGen"
        :number-of-pages="Math.ceil(this.totalSupply / this.perPage)"
        :value="page"
        limit=10
        prev-text="prev"
        next-text="next"
        use-router
        hide-goto-end-buttons)
      b-nav(tabs)
        template(v-for="tab in tabs")
          b-nav-item(
            v-if="type !== tab.id"
            :to="{ name: 'tons-page-type', params: { type: tab.id, page } }"
            active)
            font-awesome-icon(:icon="['fas', tab.icon]")
    .d-none.d-md-flex.align-items-end.justify-content-between
      b-pagination-nav(
        :link-gen="linkGen"
        :number-of-pages="Math.ceil(this.totalSupply / this.perPage)"
        :value="page"
        limit="10"
        use-router)
      b-nav(tabs)
        template(v-for="tab in tabs")
          b-nav-item(
            :to="{ name: 'tons-page-type', params: { type: tab.id, page } }"
            :active="type === tab.id")
            font-awesome-icon(:icon="['fas', tab.icon]")
    section
      template(v-for="tab in tabs")
        component(:is="`Entity${tab.text}`" v-if="type === tab.id" :currentTons="currentTons" :asyncTonsCache="asyncTonsCache")
</template>

<script>
import EntityList from '@/components/EntityList.vue'
import EntityCard from '@/components/EntityCard.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    EntityList,
    EntityCard
  },
  computed: {
    ...mapGetters(['tabs', 'totalSupply', 'perPage']),
    ...mapGetters('tons', ['currentTons', 'asyncTonsCache'])
  },
  asyncData({ params, store }) {
    const type = params.type || store.getters.type || 'card'
    store.dispatch('doUpdateType', type)
    return {
      page: params.page,
      type
    }
  },
  methods: {
    linkGen(pageNum) {
      return {
        name: 'tons-page-type',
        params: {
          page: pageNum,
          type: this.type
        }
      }
    }
  }
}
</script>
