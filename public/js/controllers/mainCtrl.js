angular.module('mainCtrl', []).controller('mainCtrl', function($scope) {
	
	$scope.icons = ['fa-camera-retro','fa-beer','fa-laptop','fa-tree','fa-rocket','fa-wordpress','fa-map','fa-hand-spock-o','fa-steam-square','fa-rebel','fa-music'];

	$('.menu').on('click', 'button', function(){
		$('.menu-content').toggleClass('menuShow');
	});
	
	$('.menu').on('click', 'a', function(){
		$('.menu-content').toggleClass('menuShow');
	});

});