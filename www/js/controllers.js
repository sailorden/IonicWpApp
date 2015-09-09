angular.module('starter.controllers', ['ngOpenFB'])

        .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $ionicHistory) {


            $scope.myGoBack = function () {
                $ionicHistory.goBack();
            };

            $scope.signUpData = {};
            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('templates/profile.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal = modal;
            });


            $ionicModal.fromTemplateUrl('templates/location.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal1 = modal;
            });

            // Triggered in the login modal to close it
            $scope.closeLogin = function () {
                $scope.modal.hide();
            };

            // Open the login modal
            $scope.profile = function () {
                $scope.modal.show();
            };

            $scope.location = function () {
                $scope.modal1.show();
            };

            $scope.closeLocation = function () {
                $scope.modal1.hide();
            }

            $scope.SignUp = function () {
                console.log('Doing login', $scope.loginData);

                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system
                $timeout(function () {
                    $scope.closeLogin();
                    $state.go('app.main');
                }, 1000);
            };

        })



        .controller('MainCtrl', function ($scope, $ionicModal, $state, $ionicHistory) {

            $ionicModal.fromTemplateUrl('templates/location.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal = modal;
            });

            $scope.location = function () {
                console.log("ok");
                $scope.modal.show();
            };

            $scope.closeLocation = function () {
                $scope.modal.hide();
            }

            $ionicModal.fromTemplateUrl('templates/search.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal1 = modal;
            });



            $scope.searchbtn = function () {
                $scope.modal1.show();
            }

            $scope.closeSearch = function () {
                $scope.modal1.hide();
            }

            $scope.showCategoryDetail = function (id) {
                $state.go('app.categorydetail');
            }
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
                if (index == 3) {
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


        .controller('UserSignIn', function ($scope, $state, $ionicModal, $timeout, ngFB) {


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
            $scope.SignUp = function () {
                console.log('Doing login', $scope.loginData);

                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system
                $timeout(function () {
                    $scope.closeLogin();
                    $state.go('app.main');
                }, 1000);
            };

            $scope.fbLogin = function () {
                ngFB.login({scope: 'email'}).then(
                        function (response) {
                            if (response.status === 'connected') {
                                console.log('Facebook login succeeded');
                                console.log(response);
                                $scope.closeLogin();
                            } else {
                                alert('Facebook login failed');
                            }
                        });
            };




            //Share Fb

            $scope.share = function (event) {
                ngFB.api({
                    method: 'POST',
                    path: '/me/feed',
                    params: {
                        message: "I'll be attending: '" + $scope.session.title + "' by " +
                                $scope.session.speaker
                    }
                }).then(
                        function () {
                            alert('The session was shared on Facebook');
                        },
                        function () {
                            alert('An error occurred while sharing this session on Facebook');
                        });
            };



            $scope.profile = function () {
                ngFB.api({
                    path: '/me',
                    params: {fields: 'id,name'}
                }).then(
                        function (user) {
                            $scope.user = user;
                        },
                        function (error) {
                            alert('Facebook error: ' + error.error_description);
                        });
            }
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

        .controller('contactCtrl', function ($scope, $stateParams) {
        })
        ;


