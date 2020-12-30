<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button
            class="inline-flex items-center justify-center p-2 rounded-md hover:text-primary focus:outline-none"
            aria-expanded="false"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <Icon v-if="!mobileMenuOpen" name="menu" class="block h-6 w-6" />

            <!-- Icon when menu is open. -->
            <Icon v-else name="close" class="block h-6 w-6" />
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center space-x-2">
            <!-- <Icon name="bookcaser" class="block h-12 w-auto" /> -->
            <span class="block text-2xl font-light">bookcaser</span>
          </div>
          <div class="hidden sm:flex sm:ml-6 sm:space-x-8">
            <nuxt-link
              v-for="l in menuLinks"
              :key="l.title"
              :to="{ name: l.route }"
              :exact="l.exact"
              class="border-transparent text-secondary inline-flex items-center px-1 pt-1 hover:border-primary-light border-b-4 text-base"
            >
              {{ l.title }}
            </nuxt-link>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <Dropdown class="ml-3">
            <template #trigger>
              <span class="sr-only">Open user menu</span>
              <img
                class="h-10 w-10 rounded-full"
                :src="$store.state.auth.user.picture"
                :alt="$store.state.auth.user.name"
              />
            </template>
            <template #items>
              <a
                v-for="i in userDropdownItems"
                :key="i.label"
                href="#"
                class="block px-4 py-2 text-sm text-secondary hover:bg-secondary-light hover:bg-opacity-50 transition-all duration-150 transition-all duration-150"
                role="menuitem"
                @click.prevent="i.onClick"
              >
                {{ i.label }}
              </a>
            </template>
          </Dropdown>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="sm:hidden" :class="mobileMenuOpen ? 'block' : 'hidden'">
      <div class="pt-2 pb-4 space-y-1">
        <!-- Current: "bg-indigo-50 border-primary-light text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-secondary" -->
        <nuxt-link
          v-for="l in menuLinks"
          :key="l.title"
          :exact="l.exact"
          :to="{ name: l.route }"
          class="border-transparent text-secondary hover:bg-secondary-light hover:border-primary-light hover:text-secondary block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
        >
          {{ l.title }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
      menuLinks: [
        {
          title: 'Home',
          route: 'shelf',
          exact: false,
        },
        {
          title: 'Discover',
          route: 'discover',
          exact: true,
        },
      ],
      userDropdownItems: [
        {
          label: 'Sign Out',
          onClick: this.logout,
        },
      ],
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>

<style lang="css" scoped>
.nuxt-link-active {
  @apply border-primary;
}
</style>
