(function (window) {
    var helloSpeaker = {}; // Création de l'objet helloSpeaker
  
    var speakWord = "Hello";
  
    helloSpeaker.speak = function (name) { // Attachement de la méthode speak à l'objet helloSpeaker
      console.log(speakWord + " " + name);
    };
  
    window.helloSpeaker = helloSpeaker; // Exposition de l'objet helloSpeaker à la portée globale
  
  })(window);