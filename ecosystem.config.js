module.exports = {
    apps: [{
      
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-34-212-110-50.us-west-2.compute.amazonaws.com',
        key: '~/.ssh/jimmy-purple-laptop.pem',
        ref: 'origin/master',
        repo: 'git@github.com:suitcasemedia/recipes.git',
        path: '/home/ubuntu/recipes',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
}