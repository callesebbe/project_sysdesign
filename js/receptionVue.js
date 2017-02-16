//Reception Vue object.
var v = new Vue({
  el: '#mainId',
  data: {
    grade: ''
  },
  methods: {
    goToPage: function(url) {
      window.location= url;
    },
    changeGrade: function(color) {
      document.getElementById('gradingGreen').value = "";
      document.getElementById('gradingYellow').value = "";
      document.getElementById('gradingOrange').value = "";
      document.getElementById('gradingRed').value = "";

      document.getElementById(color).value = "X";
      this.grade = color;
      //console.log(this.grade);
    }
  }
})
