Vue.component('order-div', {
  template: '\
  <button :class="this.class" @click="orderOperation()"> \
  <p v-for="(o,index) in order" v-if="index<1">#{{o.id}} Tablenr:{{o.tablenr}}</p>\
    <li v-for="o in order">{{o.count}}x{{o.typee}}  \
    <ul> \
    <li style="list-style-type:none" v-for="a in o.orderItems">- {{a}}</li> \
    </ul>\
    </li> \
    </button> \
  ',
 methods: {
   orderOperation: function() {
     if(this.claim == false) {
      this.claim = true;
      this.class = 'orderClaimed';

    }else {
      this.claim = false;
      this.class = 'order';

    }

  }
  },
  data: function () {
    return {
      claim: false,
      class: 'order'
    }
  },
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
    ordersInKitchen: []
  },
  methods: {

    loadOrders: function(){
      if (JSON.parse(localStorage.getItem("ordersInKitchen")) == null) {
      localStorage.setItem("ordersInKitchen", JSON.stringify(this.ordersInKitchen));
    }
      this.ordersInKitchen = JSON.parse(localStorage.getItem("ordersInKitchen"));
      var orderList = JSON.parse(localStorage.getItem("orderList"));
      if(orderList !== null){
        for(order in orderList) {
        this.ordersInKitchen.push(orderList[order]);
        }
      }
      localStorage.setItem("ordersInKitchen", JSON.stringify(this.ordersInKitchen));
      localStorage.removeItem("orderList");
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
