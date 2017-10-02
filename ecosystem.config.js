module.exports = {
    apps: [{
      name: 'recipes',
      script: 'npm start'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-34-212-110-50.us-west-2.compute.amazonaws.com',
        key: '~/.ssh/jimmy-purple-laptop.pem',
        ref: 'origin/master',
        repo: 'git@github.com:roberttod/tutorial-pt-2.git',
        path: '/home/ubuntu/server/recipes',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
}