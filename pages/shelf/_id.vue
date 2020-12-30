<template>
  <section class="flex flex-col space-y-4 pt-3 pb-4">
    <h1 class="text-xl font-semibold text-secondary">
      {{ currentShelf && currentShelf.title }}
    </h1>
    <BooksList :books="books" />
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
      bookshelveId: parseInt(id),
    }
  },
  computed: {
    currentShelf() {
      return this.$store.getters.currentBookshelf
    },
  },
}
</script>
