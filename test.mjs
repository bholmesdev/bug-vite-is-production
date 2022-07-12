import * as vite from 'vite'

;(async () => {
  await vite.build({
    root: 'src',
  })
  const server = await vite.createServer({
    root: 'src',
    mode: 'development',
    plugins: [{
      name: 'is-production-flipped-on-plugin',
      enforce: 'pre',
      configResolved(resolvedConfig) {
        // should log "true",
        // even explicitly setting "mode" just above!
        console.log(resolvedConfig.isProduction)
        console.log(resolvedConfig.mode)
      }
    }]
  })
})()