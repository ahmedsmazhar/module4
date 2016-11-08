

(function (window) {
	var byeSpeaker = {};
    var names =["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    var speakWord = "GoodBye";
    byeSpeaker.speak = function speak(names)
    {
	console.log (speakWord + " " + names);
}

 window.byeSpeaker = byeSpeaker;
  
})(window);


