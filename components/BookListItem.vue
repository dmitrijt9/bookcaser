<template>
  <li
    class="relative col-span-1 flex flex-col text-center bg-white rounded-md shadow divide-y divide-secondary-light"
  >
    <div class="flex-1 flex flex-col px-2 py-3 relative">
      <img
        class="w-24 h-32 flex-shrink-0 mx-auto bg-secondary-light rounded-md object-cover"
        :src="
          volumeInfo.imageLinks
            ? volumeInfo.imageLinks.thumbnail
            : 'http://books.google.com/books/content?id=Pk23CwAAAEAJ&printsec=frontcover&img=1&zoom=1&uvs=3&source=gbs_api'
        "
        :alt="volumeInfo.title"
      />
      <h3 class="mt-4 text-secondary text-sm font-medium">
        {{ volumeInfo.title }}
      </h3>
      <dl class="mt-2 flex-grow flex flex-col justify-between">
        <dt class="sr-only">Title</dt>
        <dd class="text-secondary text-sm divide-x opacity-75">
          <span
            v-for="authorName in volumeInfo.authors"
            :key="authorName"
            class="p-1"
            >{{ authorName }}</span
          >
        </dd>
        <dt class="sr-only">Category</dt>
        <dd class="mt-3 flex flex-wrap justify-center">
          <span
            v-for="c in volumeInfo.categories"
            :key="c"
            class="px-2 py-1 m-0.5 text-primary text-xs font-medium bg-primary-light rounded-full"
            >{{ c }}</span
          >
        </dd>
      </dl>
      <BookListItemDropdown :open="dropdownOpen">
        <a
          v-for="i in bookDropdownItems"
          :key="i.label"
          href="#"
          class="block px-3 py-2 text-sm text-secondary hover:bg-secondary-light hover:bg-opacity-50 transition-all duration-150"
          role="menuitem"
          @click.prevent="i.onClick"
        >
          {{ i.label }}
        </a>
      </BookListItemDropdown>
    </div>
    <div class="relative">
      <div class="-mt-px flex divide-x divide-secondary-light">
        <div class="w-0 flex-1 flex">
          <a
            :href="volumeInfo.canonicalVolumeLink"
            target="_blank"
            class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-2 text-sm text-secondary border border-transparent rounded-bl-lg hover:text-primary transition-colors duration-150"
          >
            <!-- Heroicon name: eye -->
            <Icon name="eye" class="w-5 h-5" />
          </a>
        </div>
        <div class="-ml-px w-0 flex-1 flex">
          <a
            href="#"
            class="relative w-0 flex-1 inline-flex items-center justify-center py-2 text-sm text-secondary border border-transparent rounded-br-lg hover:text-primary transition-colors duration-150"
            @click.prevent="dropdownOpen = !dropdownOpen"
          >
            <!-- Heroicon name: dot-horizontal -->
            <Icon name="dots" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dropdownOpen: false,
      bookDropdownItems: [
        {
          label: 'Remove',
          onClick: this.removeFromShelf,
        },
        {
          label: 'Remove',
          onClick: this.removeFromShelf,
        },
        {
          label: 'Remove',
          onClick: this.removeFromShelf,
        },
      ],
    }
  },
  computed: {
    volumeInfo() {
      return this.book.volumeInfo
    },
    searchInfo() {
      return this.book.searchInfo
    },
    userInfo() {
      return this.book.userInfo
    },
    saleInfo() {
      return this.book.saleInfo
    },
  },
  methods: {
    removeFromShelf() {
      console.info('remove volume from shelf')
    },
  },
}
</script>
