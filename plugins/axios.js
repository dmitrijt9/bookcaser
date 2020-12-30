export default function ({ $axios, app, error: nuxtError }) {
  $axios.onRequest((config) => {
    // config.headers.common['access-token'] = store.state.user.headers.access_token
    //   config.headers.common['token-type'] = store.state.user.headers.token_type
    //   config.headers.common['client'] = store.state.user.headers.client
    //   config.headers.common['expiry'] = store.state.user.headers.expiry
    //   config.headers.common['uid'] = store.state.user.headers.uid
    // console.log(app.$auth.strategy.token.get())
    // $axios.setToken(app.$auth.strategy.token.get(), 'Bearer')
    console.log('Making request to ' + config.url, config.params)
    // if (app.$auth.strategy.token.status().valid()) {
    //   console.log(config)
    // }
    // redirect('/')
  })

  $axios.onError((error) => {
    // const code = parseInt(error.response && error.response.status)
    nuxtError({
      statusCode: error.response && error.response.status,
      message: error.message,
    })
    console.error(error)
    return Promise.resolve(false)
  })
}
