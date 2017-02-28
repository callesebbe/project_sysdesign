Vue.component('order-div', {
  template: '\
    <div class="order">\
    {{name}} \
    x{{count}} \
    {{allerg[0]}} {{allerg[1]}} {{allerg[2]}} {{allerg[3]}} \
    </div>\
  ',
  props: ['name','count','allerg']
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
      
    orders: [
      
    ]
  },
  methods: {

    loadOrders: function(){
        
       
      // if(localStorage.getItem("isNewOrder")){ 
           

            var orderList = JSON.parse(localStorage.getItem("orderList")) 

            for(order in orderList){
                this.orders.push(orderList[order]);
            }
        localStorage.setItem("isNewOrder",false);
        
            
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


window.setInterval(app.loadOrders,1000);
app.load();
window.setInterval( app.updateGrading, 1000);