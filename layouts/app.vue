<template>
  <div>
    <Navbar />
    <div class="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
      <div class="max-w-6xl mx-auto">
        <div class="flex">
          <Sidebar class="hidden lg:flex w-1/5 mr-8" />
          <Nuxt class="w-full lg:w-4/5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // fetch bookshelves on each app page
  async fetch() {
    await this.$api.getMyBookshelves()
  },
}
</script>
