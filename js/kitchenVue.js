var app = new Vue({
  el: '#app',
  data: {
    grade: '',
    lastGrading: 0,
    timeSincelastGrading: 0
  },
  methods: {
    outputOrders: function() {
      var parentDiv = document.getElementById('orderDivs');
      var h = true;
      var u = 0;
      while(h && u < 8) {
        var childDiv = document.createElement('div');
        var orderList = document.createElement('ul');
        var li = document.createElement('li');
        li.innerHTML += 'Vegburgare';
        orderList.appendChild(li);
        var li = document.createElement('li');
        li.innerHTML += 'Kokain';
        orderList.appendChild(li);
        childDiv.innerHTML += 'Order #'+u;
        childDiv.className = 'order';

        childDiv.appendChild(orderList);
        parentDiv.appendChild(childDiv);
        ++u;
      }
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
      if(differenceInSec <60) {
        this.timeSincelastGrading = differenceInSec+" seconds ago";
      }else {
        this.timeSincelastGrading = Math.round(differenceInSec /60)+" minute(s) ago";
        }
      },

    load: function() {
      this.grade = localStorage.getItem("grade");
      this.lastGrading = localStorage.getItem("lastGrading");
      document.getElementById(this.grade).value = "X";
      this.updateGrading();
    }
  }
})
app.outputOrders();
app.load();
window.setInterval( app.updateGrading, 1000);
