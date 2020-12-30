<template>
  <div>{{ id }}</div>
</template>

<script>
export default {
  layout: 'app',
  asyncData({ params }) {
    const id = params.id
    return { id }
  },
}
</script>
