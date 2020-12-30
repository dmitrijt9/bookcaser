export const state = () => {
  return {
    bookshelves: [],
  }
}

export const mutations = {
  bookshelves(state, shelves) {
    state.bookshelves = shelves
  },
}

export const getters = {
  bookshelves(state) {
    return [...state.bookshelves].sort((first, second) => first.id - second.id)
  },
  bookshelvesPrivate(state) {
    return [...state.bookshelves]
      .filter((s) => s.access === 'PRIVATE')
      .sort((first, second) => first.id - second.id)
  },
  bookshelvesPublic(state) {
    return [...state.bookshelves]
      .filter((s) => s.access === 'PUBLIC')
      .sort((first, second) => first.id - second.id)
  },
}
