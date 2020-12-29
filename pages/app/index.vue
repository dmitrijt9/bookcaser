<template>
  <section class="flex flex-col space-y-4 pt-3 pb-4">
    <h1 class="text-xl font-semibold text-secondary">Favourites</h1>
    <BooksList :books="books" />
  </section>
</template>

<script>
export default {
  layout: 'app',
  // books dump
  data() {
    return {
      books: [
        {
          title: 'The Hobbit',
          author: 'Tolkien',
        },
      ],
    }
  },
}
</script>
