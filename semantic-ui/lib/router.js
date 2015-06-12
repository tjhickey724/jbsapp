Router.configure({
    layoutTemplate: 'masterLayout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'pageNotFound',
    yieldTemplates: {
        nav: {to: 'nav'},
    }
});

Router.map(function() {
    this.route('home', {
        path: '/',
    });

    this.route('addprofile',{
        path: '/addprofile',
    })

    this.route('profiles',{
        path: '/profiles',
    })

    this.route('private');
});

Router.plugin('ensureSignedIn', {
  only: ['private','editprofile']
});