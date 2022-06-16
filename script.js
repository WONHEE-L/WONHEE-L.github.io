(function (window) {

      var names = ["Yaakov","John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]; 
      var name = ["Yaakov"];
          console.log("Hello " + name)

      var byeSpeakers = ["John", "Jen", "Jason"]      
        for (var i = 0; i < byeSpeakers.length; i++) {
            console.log("Good bye " + byeSpeakers[i])
        }
      var helloSpeakers = ["Paul", "Frank", "Larry", "Paula", "Laura"];
        for (var i = 0; i < helloSpeakers.length; i++) {
            console.log("Hello " + helloSpeakers[i]);
        }
      var byeSpeaker = ["Jim"];
         console.log("Good Bye " + byeSpeaker)

       //var firstLetter = names[i].charAt(1).toUpperCase();
       //if (firstLetter === 'J') {
        // console.log("Good Bye " + names[i]);
      // } else {
        // console.log("Hello " + names[i]);
     // }
   
      window.names = names;

   })(window);
       
