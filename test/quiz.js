// IIFE 
(function() {

	// function constructor
	function Question (ques, ops, ans) {
		this.question = ques,
		this.options = ops,
		this.answer = ans;
	}

	Question.prototype.displayQuestion = function() {		
		console.log(this.question);
		for(let i = 0; i < this.options.length; i++) {
			console.log(i + '. ' + this.options[i]);
		}
	}

	// an example of passing fn to another fn: fns are first class objects
	Question.prototype.isCorrect = function(chosen, callback) { // keepScore is callback
		if(chosen === this.answer) {
			var sc = callback(true);
			console.log('You\'re right! ' + 'score: ' + sc);
		} else {
			var sc = callback(false);
			console.log('sorry... try again :) ' + 'score: ' + sc);
		}
	}

	// an example of closures: fn returning fn
	function score() {
		var sc = 0;
		return function(correct){
			if(correct) sc++;
			return sc;
		}
	}
	var keepScore = score();

	const q1 = new Question('Who is Modi?', ['PM', 'Liar'], 1);
	const q2 = new Question('Best?', ['Sachin','MSD','Kohli'], 1);
	const q3 = new Question('Ice cream?', ['Vanilla','Chocolate','Pista'], 0);

	const arr = [q1, q2, q3];

	var nextQues = function() {
		var select = Math.floor(Math.random() * arr.length);
		arr[select].displayQuestion();

		var chosen = window.prompt('Choose correct one:')
		
		if(chosen !== null) {
			arr[select].isCorrect(parseInt(chosen), keepScore); //an example of passing fn to another fn: fns are first class objects
			nextQues();
		}
	}
	nextQues();
})();
