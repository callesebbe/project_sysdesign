//Reception Vue object.
var reception = new Vue({
  el: '#mainId',
  data: {
    grade: '',
    timeSincelastGrading: 0 ,
    lastGrading: 0,
  },
  methods: {
    goToPage: function(url) {
      localStorage.setItem( "lastGrading", this.lastGrading);
      localStorage.setItem( "grade", this.grade);

      window.location= url;
    },

    loadReception: function() {
         this.grade = localStorage.getItem("grade");
         this.lastGrading = localStorage.getItem("lastGrading");

         document.getElementById(this.grade).value = "X";

         this.updateGrading();
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
      //Should be minutes
      var differenceInSec = Math.round(difference / 1000);
      if(differenceInSec <60) {
        this.timeSincelastGrading = differenceInSec+" seconds ago";
      }else {
        this.timeSincelastGrading = Math.round(differenceInSec /60)+" minute(s) ago";
        }
      }
  }
})

reception.loadReception();
window.setInterval( reception.updateGrading, 1000);
