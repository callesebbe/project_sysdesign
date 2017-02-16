//Reception Vue object.
var v = new Vue({
  el: '#mainId',
  data: {
    managername: 'Per Persson',
    managerphone: '012345678',
    grade: ''
  },
  methods: {
    goToPage: function(url) {
      this.managername = document.getElementById('managerName').value;
      this.managerphone = document.getElementById('managerPhone').value;
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
