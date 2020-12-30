export default ($axios, $store) => {
  return {
    /**
     * Get all bookshelves of Authenticated user and store them
     */
    async getMyBookshelves() {
      try {
        const { items } = await $axios.$get('/mylibrary/bookshelves')
        $store.commit('bookshelves', items)
      } catch (e) {
        console.error(e)
      }
    },

    /**
     * Search volumes (books) only in user's library (only in his/her bookshelves)
     */
    async searchMyVolumes(query) {
      try {
        const { items } = await $axios.$get('/volumes', {
          params: {
            q: query,
            libraryRestrict: 'my-library',
          },
        })
        return items
      } catch (e) {
        console.error(e)
      }
    },

    /**
     * Get volumes of the bookshelf of Authenticated user
     * @TODO pagination
     */
    async getBookshelfVolumes(shelf) {
      try {
        const data = await $axios.$get(
          `/mylibrary/bookshelves/${shelf}/volumes`,
          {
            params: {
              maxResults: 100,
            },
          }
        )
        return data
      } catch (e) {
        console.error(e)
      }
    },
  }
}