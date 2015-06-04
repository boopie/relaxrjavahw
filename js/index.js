/* PSUEDOCODE

Listen for user click on "Read More"
After user click, text slides down and "Read Less" appears
Hide the "Read More" link

Listen for user click on "Read Less"
After user click, text slides UP and "Read More" appears
Hide the "Read Less" click

For the sidebar --
Listen for user click on "Learn More"
After user click, <span> in the <p> slides DOWN
Hide the "Learn More" link

*/

$("document").ready(function(){

console.log ("oh hi");



$(".readmore").click(function(event) {
	event.preventDefault();
	console.log("show more text");
	$("#show-this-on-click").slideDown();
	$(".readmore").hide();
	$(".readless").show();
});

$(".readless").click(function(event) {
	event.preventDefault();
	console.log("show less text");
	$(".hide").slideUp(function(){
		$(".readmore").show(function(){
			$(".readless").hide();
		});
	})
}
	);

$(".learnmore").click(function(event){
	event.preventDefault();
	console.log("learn more");
	$("span").slideDown(function(){
		$(".learnmore").hide();
	})

});

})