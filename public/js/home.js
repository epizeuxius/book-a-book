var myApp= angular
			.module("homeModule", ["ngRoute"])
			.config(function($routeProvider) {
					$routeProvider
						.when("/profile",{
							templateurl: "InnerTemplates/myBooks.html",
							controller:"profilePageController"
						})
						.when("/lentBook",{
							templateurl: "InnerTemplates/lentBooks.html",
							controller:"lentBookPageController"
						})
						.when("/borrowedBook",{
							templateurl: "InnerTemplates/borrowedBooks.html",
							controller:"borrowedBookPageController"
						})
						.when("/request",{
							templateurl: "InnerTemplates/request.html",
							controller:"requestPageController"
						})
			})
			.controller("profilePageController",function($scope){

			})
			.controller("lentBookPageController",function($scope){

			})
			.controller("borrowedBookPageController",function($scope){

			})
			.controller("requestPageController",function($scope){

			})
			.controller("homePageController", function($scope){
				$scope.searchBy="title";
				$scope.userName="harshil";
				$scope.rating=3;

				$scope.changeView=function(view){
					$location.path(view);
				}
				
				$scope.dueBooks=[
				{name:"Gandhi",days:45},
				{name:"Gandhi",days:45},
				{name:"Gandhi",days:45},
				{name:"harry potter and the deathly hallows",days:75},
				{name:"harry potter and the deathly hallows",days:75}];

				Books=[
 				{title:"harry potter",Author:"J. K. Rowling",src:"F:\Harshil\Acadamics\6th sem\Software engineering\Project\images\pp.jpg"},
 				{title:"harry potter",Author:"J. K. Rowling",src:"F:\Harshil\Acadamics\6th sem\Software engineering\Project\images\pp.jpg"},
 				{title:"harry potter",Author:"J. K. Rowling",src:"F:\Harshil\Acadamics\6th sem\Software engineering\Project\images\pp.jpg"},
 				{title:"harry potter",Author:"J. K. Rowling",src:"F:\Harshil\Acadamics\6th sem\Software engineering\Project\images\pp.jpg"},
 				{title:"harry potter",Author:"J. K. Rowling",src:"F:\Harshil\Acadamics\6th sem\Software engineering\Project\images\pp.jpg"},
 				{title:"harry potter",Author:"J. K. Rowling",src:"F:\Harshil\Acadamics\6th sem\Software engineering\Project\images\pp.jpg"},
 				{title:"harry potter",Author:"J. K. Rowling",src:"F:\Harshil\Acadamics\6th sem\Software engineering\Project\images\pp.jpg"},
 				{title:"harry potter",Author:"J. K. Rowling",src:"F:\Harshil\Acadamics\6th sem\Software engineering\Project\images\pp.jpg"}];
 				
 				$scope.userBooks=Books;
			});
			

			