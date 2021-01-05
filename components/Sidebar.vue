<template>
  <div class="relative block pt-3 pb-4 bg-white overflow-y-auto">
    <div class="w-56 fixed flex flex-col justify-between">
      <nav
        class="p-2 pb-4 bg-white space-y-1 border-b border-secondary-light"
        aria-label="Sidebar"
      >
        <!-- PUBLIC bookshelves -->
        <span
          class="flex items-center px-1 py-2 text-sm font-light uppercase opacity-50"
          >public</span
        >
        <nuxt-link
          v-for="s in publicBookshelves"
          :key="s.id + s.title"
          class="text-secondary hover:bg-secondary-light hover:bg-opacity-50 flex items-center justify-between px-2 py-1 text-sm font-medium rounded-md transition-all duration-150"
          :to="{
            name: 'shelf-id',
            params: { id: s.id },
          }"
          :exact="true"
        >
          <span>{{ s.title }}</span>
          <span
            v-show="s.volumeCount"
            class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary"
          >
            {{ s.volumeCount }}
          </span>
        </nuxt-link>

        <!-- PRIVATE bookshelves -->
        <span
          class="flex items-center px-1 py-2 text-sm font-light uppercase opacity-50"
          >private</span
        >
        <nuxt-link
          v-for="s in privateBookshelves"
          :key="s.id + s.title"
          class="text-secondary hover:bg-secondary-light hover:bg-opacity-50 flex items-center justify-between px-2 py-1 text-sm font-medium rounded-md transition-all duration-150"
          :to="{
            name: 'shelf-id',
            params: { id: s.id },
          }"
          :exact="true"
        >
          <span>{{ s.title }}</span>
          <span
            v-show="s.volumeCount"
            class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary"
          >
            {{ s.volumeCount }}
          </span>
        </nuxt-link>
      </nav>
      <div class="pt-4">
        <nuxt-link
          class="text-secondary hover:text-black flex items-center justify-between p-1 text-xs font-medium rounded-md transition-all duration-150"
          :to="{
            name: 'terms-of-service',
          }"
          :exact="true"
        >
          <span>Terms of Service</span>
        </nuxt-link>
        <nuxt-link
          class="text-secondary hover:text-black flex items-center justify-between p-1 text-xs font-medium rounded-md transition-all duration-150"
          :to="{
            name: 'privacy-policy',
          }"
          :exact="true"
        >
          <span>Privacy Policy</span>
        </nuxt-link>
      </div>
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
.nuxt-link-active {
  @apply bg-primary-light;
}
</style>
