<template>
  <div>
    <ul
      v-if="books.length > 0"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <BookListItem
        v-for="book in books"
        :key="JSON.stringify(book)"
        :book="book"
        :is-searching="isSearching"
        @addToShelf="openAddToShelfModal"
      />
    </ul>
    <div
      v-else
      class="flex flex-col items-center justify-center py-8 space-y-4"
    >
      <Icon name="cloudSnow" class="w-56 h-56 text-primary animate-pulse" />
      <span class="text-2xl font-medium">Nothing here 🙅</span>
    </div>
    <AddToShelfModal
      :open.sync="addToShelfModalOpen"
      @input="addVolumeToShelf"
    />
  </div>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      required: true,
    },
    isSearching: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      addToShelfModalOpen: false,
      volumeEditing: null,
    }
  },
  methods: {
    openAddToShelfModal(volumeId) {
      this.addToShelfModalOpen = true
      this.volumeEditing = volumeId
    },
    async addVolumeToShelf(shelf) {
      if (!this.volumeEditing) {
        return
      }

      this.$nuxt.$loading.start()

      // if shelf is an array of shelves ids
      if (typeof shelf === 'object') {
        shelf.forEach(async (s) => {
          await this.$api.addVolumeToBookshelf(this.volumeEditing, s)
        })
      } else {
        await this.$api.addVolumeToBookshelf(this.volumeEditing, shelf)
      }

      this.$nuxt.$loading.finish()

      this.volumeEditing = null
    },
  },
}
</script>
