angular.module('starter.controllers', [])

        .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //$scope.$on('$ionicView.enter', function(e) {
            //});

            // Form data for the login modal
            $scope.loginData = {};

            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('templates/login.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal = modal;
            });

            // Triggered in the login modal to close it
            $scope.closeLogin = function () {
                $scope.modal.hide();
            };

            // Open the login modal
            $scope.login = function () {
                $scope.modal.show();
            };

            // Perform the login action when the user submits the login form
            $scope.doLogin = function () {
                console.log('Doing login', $scope.loginData);

                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system
                $timeout(function () {
                    $scope.closeLogin();
                }, 1000);
            };
        })

        .controller('PlaylistsCtrl', function ($scope) {
            $scope.playlists = [
                {title: 'Reggae', id: 1},
                {title: 'Chill', id: 2},
                {title: 'Dubstep', id: 3},
                {title: 'Indie', id: 4},
                {title: 'Rap', id: 5},
                {title: 'Cowbell', id: 6}
            ];
        })

        .controller('MainCtrl', function ($scope, $stateParams) {
        })


        .controller('HomeCtrl', function ($scope, $ionicSlideBoxDelegate, $state) {
            $scope.isContinue = true;
            $scope.myActiveSlide = 0;

            //Count Slide Numbers 
            $scope.endSlide = 0;

            $scope.slideHasChanged = function (index) {
                console.log("Slide Index is" + index);

                //Set the EndSlide 0 if slide is not the last slide
                if (index < 3) {
                    $scope.endSlide = 0;
                }
                if(index == 3) {
                    $scope.endSlide = 1;
                }
            };

            $scope.nextButtonClick = function () {

                $ionicSlideBoxDelegate.next();

                if ($ionicSlideBoxDelegate.currentIndex() === 3 && $scope.endSlide === 0) {
                    $scope.endSlide++;
                }
                else if ($ionicSlideBoxDelegate.currentIndex() === 3 && $scope.endSlide === 1) {
                    $state.go('login');
                } else {
                    $scope.endSlide = 0;
                }
            };
        })


        .controller('UserSignIn', function ($scope, $state, $ionicModal, $timeout) {


            $scope.signIn = function () {
                $state.go('app.main');
            }

            // Form data for the login modal
            $scope.loginData = {};
            $scope.signUpData = {};
            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('templates/signup.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal = modal;
            });

            // Triggered in the login modal to close it
            $scope.closeLogin = function () {
                $scope.modal.hide();
            };

            // Open the login modal
            $scope.login = function () {
                $scope.modal.show();
            };

            // Perform the login action when the user submits the login form
            $scope.doLogin = function () {
                console.log('Doing login', $scope.loginData);

                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system
                $timeout(function () {
                    $scope.closeLogin();
                }, 1000);
            };
        })


        .controller('SearchCtrl', function ($scope, $stateParams) {
        })

        .controller('CategoriesCtrl', function ($scope, $state) {
            $scope.showCategoryDetail = function (id) {
                $state.go('app.categorydetail');
            }

        })

        .controller('CategoryDetailCtrl', function ($scope, $stateParams) {
        })

        .controller('GallaryCtrl', function ($scope, $stateParams) {

            $scope.items = [
                {
                    src: 'img/gallary.png',
                    sub: 'This is a <b>subtitle</b>'
                },
                {
                    src: 'img/gallary.png',
                    sub: '' /* Not showed */
                },
                {
                    src: 'img/gallary.png',
                },
                {
                    src: 'img/gallary.png',
                }, {
                    src: 'img/gallary.png',
                    sub: 'This is a <b>subtitle</b>'
                },
                {
                    src: 'img/gallary.png',
                    sub: '' /* Not showed */
                },
                {
                    src: 'img/gallary.png',
                },
                {
                    src: 'img/gallary.png',
                }, {
                    src: 'img/gallary.png',
                    sub: 'This is a <b>subtitle</b>'
                },
                {
                    src: 'img/gallary.png',
                    sub: '' /* Not showed */
                },
                {
                    src: 'img/gallary.png',
                },
                {
                    src: 'img/gallary.png',
                }, {
                    src: 'img/gallary.png',
                    sub: 'This is a <b>subtitle</b>'
                },
                {
                    src: 'img/gallary.png',
                    sub: '' /* Not showed */
                },
                {
                    src: 'img/gallary.png',
                },
                {
                    src: 'img/gallary.png',
                }, {
                    src: 'img/gallary.png',
                    sub: 'This is a <b>subtitle</b>'
                },
                {
                    src: 'img/gallary.png',
                    sub: '' /* Not showed */
                },
                {
                    src: 'img/gallary.png',
                },
                {
                    src: 'img/gallary.png',
                }, {
                    src: 'img/gallary.png',
                    sub: 'This is a <b>subtitle</b>'
                },
                {
                    src: 'img/gallary.png',
                    sub: '' /* Not showed */
                },
                {
                    src: 'img/gallary.png',
                },
                {
                    src: 'img/gallary.png',
                }, {
                    src: 'img/gallary.png',
                    sub: 'This is a <b>subtitle</b>'
                },
                {
                    src: 'img/gallary.png',
                    sub: '' /* Not showed */
                },
                {
                    src: 'img/gallary.png',
                },
                {
                    src: 'img/gallary.png',
                }, {
                    src: 'img/gallary.png',
                    sub: 'This is a <b>subtitle</b>'
                },
                {
                    src: 'img/gallary.png',
                    sub: '' /* Not showed */
                },
                {
                    src: 'img/gallary.png',
                },
                {
                    src: 'img/gallary.png',
                }, {
                    src: 'img/gallary.png',
                    sub: 'This is a <b>subtitle</b>'
                },
                {
                    src: 'img/gallary.png',
                    sub: '' /* Not showed */
                },
                {
                    src: 'img/gallary.png',
                },
                {
                    src: 'img/gallary.png',
                }, {
                    src: 'img/gallary.png',
                    sub: 'This is a <b>subtitle</b>'
                },
                {
                    src: 'img/gallary.png',
                    sub: '' /* Not showed */
                },
                {
                    src: 'img/gallary.png',
                },
                {
                    src: 'img/gallary.png',
                }, {
                    src: 'img/gallary.png',
                    sub: 'This is a <b>subtitle</b>'
                },
                {
                    src: 'img/gallary.png',
                    sub: '' /* Not showed */
                },
                {
                    src: 'img/gallary.png',
                },
                {
                    src: 'img/gallary.png',
                }
            ]
        })


        .controller('addReviewCtrl', function ($scope, $stateParams) {
        })


        .controller('placeReviewCtrl', function ($scope, $stateParams) {
            $scope.human = true;
            $scope.showHumanReview = function () {
                $scope.human = true;
            };

            $scope.showPetReview = function () {
                $scope.human = false;
            };
        })


        .controller('mapCtrl', function ($scope, $stateParams) {
        })

        .controller('donateOptionsCtrl', function ($scope, $stateParams) {
        })

        .controller('donateCtrl', function ($scope, $stateParams) {
        })

        .controller('donateSliderCtrl', function ($scope, $stateParams) {
        })

        .controller('featuredCtrl', function ($scope, $stateParams) {
        })

 .controller('placeInfoCtrl', function ($scope, $stateParams) {
        })
        ;


