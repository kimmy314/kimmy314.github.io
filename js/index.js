console.log("hello, world!");
function init() {
  $('.clickcard').click(function(event) {
	  $(this).toggleClass('flipped');
  })
};