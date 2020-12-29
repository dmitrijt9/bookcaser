<template>
  <button
    type="button"
    class="w-full inline-flex justify-center py-2 px-4 border border-secondary-light rounded-md shadow-sm bg-white text-sm font-medium text-secondary hover:bg-secondary-light transition-all duration-150"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
