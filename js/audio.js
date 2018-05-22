document.getElementById("mybtn").onclick = function() {
    var myaudio = document.getElementById("myaudio");
      if(myaudio.paused == true) {
        document.getElementById("myaudio").play();
        this.style.backgroundColor = "#f8f8f8"; //Цвет кнопки .
        this.style.color = "#f33"; //Цвет текста
      }

      else if (myaudio.paused == false) {
        document.getElementById("myaudio").pause();
        this.style.backgroundColor = "#b3b34e";
        this.style.color = "#f7f7f7";
      }
    }