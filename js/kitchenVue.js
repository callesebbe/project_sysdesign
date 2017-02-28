Vue.component('order-div', {
  template: '\
    <div class="order">\
    <li v-for="o in order">o.typee</order> \
    </div>\
  ',
  props: ['order']
})
var app = new Vue({
  el: '#app',
  data: {
    name: '',
    count: 0,
    orderitems: [],
    grade: '',
    lastGrading: 0,
    timeSincelastGrading: 0,
      
    ordersInKitchen: [
      
    ]
  },
  methods: {

    loadOrders: function(){
           
        
        
        this.ordersInKitchen = JSON.parse(localStorage.getItem("ordersInKitchen"));
          
        var orderList = JSON.parse(localStorage.getItem("orderList")); 
        
        
        if(orderList !== null){
             this.ordersInKitchen.push(orderList);
        }
        
        localStorage.setItem("ordersInKitchen", JSON.stringify(this.ordersInKitchen));
        localStorage.removeItem("orderList");
            
        
     //  }
    } , 
      
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


window.setInterval(app.loadOrders,10000);
app.load();
window.setInterval( app.updateGrading, 1000);
