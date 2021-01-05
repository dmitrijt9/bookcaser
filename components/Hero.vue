<template>
  <section class="relative">
    <img
      class="w-full h-full lg:absolute object-cover opacity-25"
      src="/images/book-shelf.jpg"
      alt="Book Shelf background"
    />
    <div class="relative mx-auto max-w-7xl">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8 pt-16 md:pt-24">
        <div
          class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
        >
          <div>
            <h1
              class="mt-4 text-4xl tracking-tight font-extrabold text-secondary sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
            >
              <span class="md:block">Manage your</span>
              <span class="text-primary md:block">bookshelves</span>
            </h1>
            <p
              class="mt-3 text-base text-secondary font-light sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              Manage your Google Books shelves with Bookcaser. Discover new
              literature and keep track of what you're reading.
            </p>
          </div>
        </div>
        <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
          <div
            class="bg-transparent sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden"
          >
            <div class="px-4 py-8 sm:px-10">
              <div class="space-y-4">
                <p class="text-base text-secondary">Sign in with</p>

                <div>
                  <Button @click="$auth.loginWith('google')">
                    <!-- TODO Google Button -->
                    <span>Google</span>
                  </Button>
                </div>
              </div>
            </div>
            <div
              class="px-4 py-6 bg-gray-50 border-t-2 border-secondary sm:px-10"
            >
              <p class="text-xs leading-5 text-secondary">
                By signing up, you agree to our
                <a href="#" class="font-medium text-black hover:underline"
                  >Terms of Service</a
                >
                and
                <a href="#" class="font-medium text-black hover:underline"
                  >Privacy Policy</a
                >.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
