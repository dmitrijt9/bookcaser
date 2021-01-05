<template>
  <section class="flex flex-col space-y-4 pt-3 pb-4">
    <h1 class="text-xl font-semibold text-secondary">
      {{ currentShelf && currentShelf.title }}
    </h1>
    <BooksList :books="books" @change="fetchVolumes(bookshelfId)" />
  </section>
</template>

<script>
export default {
  layout: 'app',
  async asyncData({ params: { id }, $api, store }) {
    const { totalItems, items } = await $api.getBookshelfVolumes(id)
    store.commit('currentBookshelfId', id)
    return {
      books: items || [],
      totalItems: totalItems || 0,
      bookshelfId: parseInt(id),
    }
  },
  computed: {
    currentShelf() {
      return this.$store.getters.currentBookshelf
    },
  },
  methods: {
    async fetchVolumes(id) {
      this.$nuxt.$loading.start()
      const { totalItems, items } = await this.$api.getBookshelfVolumes(id)
      this.totalItems = totalItems || 0
      this.books = items || []

      // give Google Books API some time to process the thing above...
      setTimeout(async () => {
        await this.$api.getMyBookshelves()
      }, 1000)
      this.$nuxt.$loading.finish()
    },
  },
}
</script>
