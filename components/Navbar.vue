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
              class="border-transparent text-secondary inline-flex items-center px-1 pt-1 hover:border-primary-light border-b-2 text-base"
            >
              {{ l.title }}
            </nuxt-link>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div>
              <button
                class="bg-white rounded-full flex text-sm focus:outline-none"
                id="user-menu"
                aria-haspopup="true"
                @click="profileDropdownOpen = !profileDropdownOpen"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  :src="$store.state.auth.user.picture"
                  alt=""
                />
              </button>
            </div>

            <!-- Profile dropdown panel, show/hide based on dropdown state. -->
            <transition
              enter-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              enter-active-class="transition ease-out duration-200"
              leave-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
              leave-active-class="transition ease-in duration-75"
            >
              <div
                v-if="profileDropdownOpen"
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-secondary hover:bg-secondary-light"
                  role="menuitem"
                  >Your Profile</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-secondary hover:bg-secondary-light"
                  role="menuitem"
                  >Settings</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-secondary hover:bg-secondary-light"
                  role="menuitem"
                  @click.prevent="logout"
                  >Sign out</a
                >
              </div>
            </transition>
          </div>
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
      profileDropdownOpen: false,
      mobileMenuOpen: false,
      menuLinks: [
        {
          title: 'Home',
          route: 'app',
          exact: true,
        },
        {
          title: 'Discover',
          route: 'app-discover',
          exact: true,
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
