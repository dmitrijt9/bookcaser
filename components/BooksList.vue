<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <ul
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  >
    <BookListItem
      v-for="book in books"
      :key="JSON.stringify(book)"
      :book="book"
    />
  </ul>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
}
</script>
