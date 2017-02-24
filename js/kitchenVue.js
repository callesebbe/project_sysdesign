var app = new Vue({
  el: '#app',
  data: {
    grade: '',
    lastGrading: 0,
    timeSincelastGrading: 0
  },
  methods: {
    goToPage: function(url) {
      localStorage.setItem( "grade", this.grade);
      localStorage.setItem( "lastGrading", this.lastGrading);

      window.location= url;
    },
    goToPage: function(url) {
      localStorage.setItem( "grade", this.grade);
      localStorage.setItem( "lastGrading", this.lastGrading);

      window.location= url;
    },
    changeGrade: function(color) {

      document.getElementById('gradingGreen').value = "";
      document.getElementById('gradingYellow').value = "";
      document.getElementById('gradingOrange').value = "";
      document.getElementById('gradingRed').value = "";

      document.getElementById(color).value = "X";
      this.grade = color;
      this.timeSincelastGrading = 0;
      this.lastGrading = new Date().getTime();
    },

    updateGrading: function(){
      var now = new Date().getTime();
      var difference = now - this.lastGrading;
      var differenceInSec = Math.round(difference / 1000);
      this.timeSincelastGrading = differenceInSec;
    },

    load: function() {
      this.grade = localStorage.getItem("grade");
      this.lastGrading = localStorage.getItem("lastGrading");
      document.getElementById(this.grade).value = "X";
      this.updateGrading();
    }
  }
})

app.load();
window.setInterval( app.updateGrading, 1000);
