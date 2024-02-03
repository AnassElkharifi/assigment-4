(function (window) {
    var byeSpeaker = {}; // Création de l'objet byeSpeaker
  
    var speakWord = "Good Bye";
  
    byeSpeaker.speak = function (name) { // Attachement de la méthode speak à l'objet byeSpeaker
      console.log(speakWord + " " + name);
    };
  
    window.byeSpeaker = byeSpeaker; // Exposition de l'objet byeSpeaker à la portée globale
  
  })(window);