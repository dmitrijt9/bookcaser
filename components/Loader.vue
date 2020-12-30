<template>
  <div
    v-if="loading"
    class="fixed bottom-0 right-0 m-8 rounded-md px-3 py-2 text-white text-sm bg-primary flex items-center space-x-3"
  >
    <Icon class="animate-spin w-6 h-6" name="circleLoad" />
    <span>Loading</span>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    progress: 0,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
