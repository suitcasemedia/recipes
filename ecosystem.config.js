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
        repo: 'git@github.com:suitcasemedia/recipes.git',
<<<<<<< HEAD
        path: '/home/ubuntu/recipes',
=======
        path: '/home/ubuntu/',
>>>>>>> 0ae4a10a5f2dfc3b9744b0c5b890c4be7cef11ed
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
}