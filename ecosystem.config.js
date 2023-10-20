module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ],
  deploy : {
    // "production" is the environment name
    production : {
      user: 'web',
      host: ['0.0.0.0'],
      'post-deploy' : 'yarn && yarn build && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
}
