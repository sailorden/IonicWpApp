// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ion-gallery'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    //cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider

                    .state('app', {
                        url: '/app',
                        abstract: true,
                        templateUrl: 'templates/menu.html',
                        controller: 'AppCtrl'
                    })



                    //Landing Page
                    .state('home', {
                        url: '/home',
                        templateUrl: 'templates/home.html',
                        controller: 'HomeCtrl'

                    })


                    .state('login', {
                        url: '/user-login',
                        templateUrl: 'templates/login.html',
                        controller: 'UserSignIn'

                    })



                    .state('app.search', {
                        url: '/search',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/search.html',
                                controller: 'SearchCtrl'
                            }
                        }
                    })

                    .state('app.categories', {
                        url: '/categories',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/categories.html',
                                controller: 'CategoriesCtrl'
                            }
                        }
                    })
                    .state('app.categorydetail', {
                        url: '/category-detail/:categoryId',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/category_datail.html',
                                controller: 'CategoryDetailCtrl'
                            }
                        }
                    })

                    .state('app.main', {
                        url: '/homepage',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/mainpage.html',
                                controller: 'MainCtrl'
                            }
                        }
                    })

                    .state('app.gallary', {
                        url: '/gallary',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/gallary.html',
                                controller: 'GallaryCtrl'
                            }
                        }
                    })


                    .state('app.addreview', {
                        url: '/add-review',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/add_review.html',
                                controller: 'addReviewCtrl'
                            }
                        }
                    })


                    .state('app.placereview', {
                        url: '/place-review',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/place_review.html',
                                controller: 'placeReviewCtrl'
                            }
                        }
                    })


                    .state('app.map', {
                        url: '/google-map',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/map.html',
                                controller: 'mapCtrl'
                            }
                        }
                    })

                    .state('app.donateoptions', {
                        url: '/donate-options',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/donate-options.html',
                                controller: 'donateOptionsCtrl'
                            }
                        }
                    })


                    .state('app.donate', {
                        url: '/donate',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/donate.html',
                                controller: 'donateCtrl'
                            }
                        }
                    })

                    .state('app.donateslider', {
                        url: '/donate-slider',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/donate_slider.html',
                                controller: 'donateSliderCtrl'
                            }
                        }
                    })


                    .state('app.featured', {
                        url: '/featured',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/featured.html',
                                controller: 'featuredCtrl'
                            }
                        }
                    })
                    
                     .state('app.placeinfo', {
                        url: '/place-information',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/place_info.html',
                                controller: 'placeInfoCtrl'
                            }
                        }
                    })
                    
                       .state('app.contact', {
                        url: '/contact',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/contact.html',
                                controller: 'contactCtrl'
                            }
                        }
                    })


                    ;



            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('home');
        });
