let ghpages = 'gh-pages';

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/braveheartwilliam/MasteringSvelteFramework2023.git', // Update to point to your repository
        user: {
            name: 'William Wallace', // update to use your name
            email: 'braveheartwilliam@protonmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)