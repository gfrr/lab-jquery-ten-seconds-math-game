// Use this file to write the interactions between your game and the user

//Initialize ion library


$(document).ready(function(){
  $('#ex1').slider({
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
showGame();
});

function showGame(){
  $("#start").click(function(){
    $("#game").toggle();
    $("#game-options").toggle();
  });
}
