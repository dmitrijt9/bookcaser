export default function ({ $axios, redirect, app }) {
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401 || code === 403) {
      app.$auth.logout()
    }

    if (code === 404) {
      console.log('Resources not found :(')
    }

    return Promise.resolve(false)
  })
}
