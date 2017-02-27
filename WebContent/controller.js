var app = angular.module('gridModule', [ 'ui.grid','ui.grid.pagination' ]);

app.controller("gridCtrl", [ '$scope','$http','$window', '$location','uiGridConstants', function($scope,$http,$window,$location, uiGridConstants) {
	
	

	var data1 = [ {
		"First Name" : "Minu",
		"Last Name" : "Reddy",
		"id" : 25,
		"gender" : "Female",
		"phno" : 4253011978,
		"email" : "minu@gmail.com"

	},
	{
		"First Name" : "dimpi",
		"Last Name" : "sravani",
		"id" : 27,
		"gender" : "Female",
		"phno" : 4253011977,
		"email" : "dimpi@gmail.com"

	},
	{
		"First Name" : "rufus",
		"Last Name" : "raja",
		"id" : 30,
		"gender" : "Male",
		"phno" : 4253011976,
		"email" : "rufus@gmail.com"

	},
	{
		"First Name" : "parthiban",
		"Last Name" : "chenniappan",
		"id" : 20,
		"gender" : "Male",
		"phno" : 4253011975,
		"email" : "parthi@gmail.com"

	},
	{
		"First Name" : "Vinod",
		"Last Name" : "Kumar",
		"id" : 30,
		"gender" : "Male",
		"phno" : 4253011974,
		"email" : "vinod@gmail.com"

	},
	{
		"First Name" : "Govardhan",
		"Last Name" : "Reddy",
		"id" : 34,
		"gender" : "Male",
		"phno" : 4253011959,
		"email" : "gova@gmail.com"

	}

	];

	var columnDefs1 = [ {
		name : 'First Name'
	}, {
		name : 'Last Name'
	}, {
		name : 'id'
	}, {
		name : 'gender'
	}, {
		name : 'phno'
	}, {
		name : 'email'
	}

	];
$scope.tabs = {selectedTab:-1};
	$scope.gridOpts = {
		enableFiltering: true,
		paginationPageSizes: [25, 50, 75],
		paginationPageSize: 5,
		data : data1,
		columnDefs : columnDefs1,
		onRegisterApi: function (gridApi) {
		$scope.grid1Api = gridApi;
		}	
		
	};
	
	$scope.tabChanged = function(tabIndex){
	     $scope.tabs.selectedTab = tabIndex;
	
	  }; 


}]);