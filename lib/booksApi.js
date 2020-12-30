export default ($axios, $store) => {
  return {
    async getMyBookshelves() {
      try {
        const { items } = await $axios.$get('/mylibrary/bookshelves')
        $store.commit('bookshelves', items)
      } catch (e) {
        console.error(e)
      }
    },
  }
}
