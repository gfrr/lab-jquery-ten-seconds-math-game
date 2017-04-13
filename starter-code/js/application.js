// Use this file to write the interactions between your game and the user

//Initialize ion library


$(document).ready(function(){
  $('#limit').bootstrapSlider({
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
var limit = 5;
var operations = [];
var tenGame;
showGame(operations);

});

function showGame(op, limit, game){
  $("#start").click(function(){
    getOperations(op);
    if (op.length > 0){
      $("#game").toggle();
      $("#game-options").toggle();
      limit = ($("#limit").bootstrapSlider()[0].value);
      tenGame = new TenSecondsMathGame(op, limit);
    }

});
}


function getOperations(op){
  if($("#add").is(":checked")) op.push("add");
  if($("#sub").is(":checked")) op.push("substract");
  if($("#multi").is(":checked")) op.push("multiply");
  if($("#divide").is(":checked")) op.push("divide");
  console.log(op);
}
