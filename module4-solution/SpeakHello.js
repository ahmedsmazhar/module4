

(function  (window) {
    var helloSpeaker = {};
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    var SpeakWord = "Hello";
    helloSpeaker.speak= function speak(names) 
   {
	console.log(SpeakWord + " " + names);
}
 window.helloSpeaker = helloSpeaker;

})(window);



