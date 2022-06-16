
   (function (window) {
    var helloSpeakers = {};
     helloSpeakers = ["Yaakov", "Paul", "Frank", "Larry", "Paula", "Laura"];
     var greeting = "Hello ";
      helloSpeakers.speakHello = function () {
      console.log(greeting + helloSpeakers);
    }
      window.helloSpeakers = helloSpeakers;

  })(window);
  
