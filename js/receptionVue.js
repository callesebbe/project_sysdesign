//Reception Vue object.
var reception = new Vue({
  el: '#mainId',
  data: {
    grade: ''
  },
  methods: {
    goToPage: function(url) {
      localStorage.setItem( "grade", this.grade);     
      window.location= url;
    },
      
    loadReception: function() {
         this.grade = localStorage.getItem("grade"); 
         document.getElementById(this.grade).value = "X";
    },
      
    changeGrade: function(color) {
      document.getElementById('gradingGreen').value = "";
      document.getElementById('gradingYellow').value = "";
      document.getElementById('gradingOrange').value = "";
      document.getElementById('gradingRed').value = "";

      document.getElementById(color).value = "X";
      this.grade = color;
    }
  }
})

reception.loadReception();