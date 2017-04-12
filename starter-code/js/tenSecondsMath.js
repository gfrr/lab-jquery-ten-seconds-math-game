


var TenSecondsMathGame = function(option, limit) {
  this.option = option[Math.floor(Math.random() * option.length)];
  this.limit = limit;
  this.x = 0;
  this.y = 0;
  this.question = "";
  this.intervalId = 0;
  this.time = 0;


};



TenSecondsMathGame.prototype._startTimer = function () {
    var context = this;
    return setInterval(function(){
      console.log(context.time);
      context.time--;
      if(context.time < 0){
        console.log("game over");
        clearInterval(context.intervalId);
      }
    }, 1000);

};

TenSecondsMathGame.prototype.randomNumber = function() {
  // The result should never be negative
  // The difference between the generated operators can't be less than 3 (except for the division)
  // The generated numbers should never be equal (except for the division)
  this.x = Math.floor(Math.random() * this.limit) + 1;
  this.y = Math.floor(Math.random() * this.limit) + 1;
  if(this.x < this.y) return this.randomNumber();
  if(this.x == this.y) return this.randomNumber();
  if(this.option != "division" && this.x - this.y < 4) return this.randomNumber();

};

TenSecondsMathGame.prototype.add = function() {
  return this.x + this.y;
};

TenSecondsMathGame.prototype.subtract = function() {
  return this.x - this.y;
};

TenSecondsMathGame.prototype.multiply = function() {
  return this.x * this.y;
};

TenSecondsMathGame.prototype.divide = function() {
  return this.x / this.y;
};




// Returns an object with {question, answer}
TenSecondsMathGame.prototype.generateQuestion = function() {
  // Generate the Math question.
  // Generate the solution.
  // Print the Math question in the console.

  this.randomNumber();
  var question = "";
  var answer = 0;
  switch(this.option){
      case("add"):
      question = this.x +" + "+ this.y + "?";
      answer = this.add();
      break;

      case("subtract"):
      question = this.x +" - "+ this.y + "?";
      answer = this.subtract();
      break;

      case("multiply"):
      question = this.x +" * "+ this.y + "?";
      answer = this.multiply();
      break;

      case("divide"):
      question = this.x +" / "+ this.y + "?";
      answer = this.divide();
      break;

      default:
      break;
  }


  console.log(question);
  this.question = {"question": question, "answer": answer};
};

// Checks a user answer
TenSecondsMathGame.prototype.checkAnswer = function (answer){
  if(answer == this.question.answer) {
    this.time += 10;
    clearInterval(this.intervalId);
    this.intervalId = this._startTimer();

    this.generateQuestion();
    return "correct!";

  }
  return "wrong, game over";
};



var testGame = new TenSecondsMathGame(["add","multiply"], 10);
console.log(testGame);

testGame.generateQuestion();
