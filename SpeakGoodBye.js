(function (window) {
     var byeSpeakers = {};
     byeSpeakers = ["John", "Jen", "Jason", "Jim"];
      var greeting = "Good bye ";
      byeSpeakers.speakGoodbye = function () {
      console.log(greeting + byeSpeakers);
      }
      window.byeSpeakers = byeSpeakers;

  })(window);
