<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex flex-col pt-3 pb-4 bg-white overflow-y-auto">
    <div class="flex-grow flex flex-col">
      <nav class="flex-1 px-2 bg-white space-y-1" aria-label="Sidebar">
        <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
        <nuxt-link
          class="bg-primary-light text-secondary flex items-center px-2 py-2 text-sm font-medium rounded-md"
          :to="{ name: 'app-discover' }"
        >
          <span>Favourites</span>
        </nuxt-link>
        <nuxt-link
          class="text-secondary hover:bg-secondary-light flex items-center px-2 py-2 text-sm font-medium rounded-md"
          :to="{ name: 'app-discover' }"
        >
          <span>Want To Read</span>
        </nuxt-link>
      </nav>
    </div>
  </div>
</template>
