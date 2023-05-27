// START - USED SERVICES
/*
 *	courseService.delete
 *		PARAMS: 
 *		
 *
 *	courseService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * courseService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('courseListController', ['$scope', 'courseService',
    function ($scope, courseService ) {
		
    	$scope.list = courseService.query();
    	
}]);