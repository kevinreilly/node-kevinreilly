angular.module('appRoutes', []).config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // home view
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html'
        })
        
        // portfolio view
        .state('portfolio', {
           url: '/portfolio',
           templateUrl: 'views/portfolio.html',
           controller: 'portfolioCtrl'
        })
        // photography view
        .state('photography', {
            url: '/photography',
            templateUrl: 'views/photography.html',
            controller: 'photographyCtrl'
        });        
});