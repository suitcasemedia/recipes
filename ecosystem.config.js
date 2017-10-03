module.exports = {
    apps: [{
            "name": "recipes",
            "script": "npm",
            "args" : "start"
           
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-34-212-110-50.us-west-2.compute.amazonaws.com',
        key: '~/.ssh/jimmy-purple-laptop.pem',
        ref: 'origin/master',
        repo: 'git@github.com:suitcasemedia/recipes.git',
        path: '/home/ubuntu/recipes',
        'post-deploy': 'npm installAll && pm2 startOrRestart ecosystem.config.js'
      }
    }
}