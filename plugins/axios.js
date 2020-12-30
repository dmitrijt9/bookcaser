export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      console.log('Authorization expired, please sign in.')
      redirect('/')
    }
  })
}
