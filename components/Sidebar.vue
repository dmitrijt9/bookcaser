<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex flex-col pt-3 pb-4 bg-white overflow-y-auto">
    <div class="flex-grow flex flex-col">
      <nav class="flex-1 px-2 bg-white space-y-1" aria-label="Sidebar">
        <!-- PUBLIC bookshelves -->
        <span
          class="flex items-center px-2 py-2 text-sm font-light uppercase opacity-50"
          >public</span
        >
        <nuxt-link
          v-for="s in publicBookshelves"
          :key="s.id + s.title"
          class="text-secondary hover:bg-secondary-light flex items-center px-2 py-2 text-sm font-medium rounded-md"
          :to="{
            name: 'app-shelf-id',
            params: { id: s.id },
          }"
        >
          <span>{{ s.title }}</span>
        </nuxt-link>

        <!-- PRIVATE bookshelves -->
        <span
          class="flex items-center px-2 py-2 text-sm font-light uppercase opacity-50"
          >private</span
        >
        <nuxt-link
          v-for="s in privateBookshelves"
          :key="s.id + s.title"
          class="text-secondary hover:bg-secondary-light flex items-center px-2 py-2 text-sm font-medium rounded-md"
          :to="{ name: 'app-discover' }"
        >
          <span>{{ s.title }}</span>
        </nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    privateBookshelves() {
      return this.$store.getters.bookshelvesPrivate
    },
    publicBookshelves() {
      return this.$store.getters.bookshelvesPublic
    },
  },
}
</script>

<style scoped>
.link-active {
  @apply bg-primary-light;
}
</style>
