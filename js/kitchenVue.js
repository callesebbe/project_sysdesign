Vue.component('order-div', {
  template: '\
  <div  :class="order[0].class" @click="orderOperation(order)"> \
  <p v-for="(o,index) in order" v-if="index<1">#{{o.idt}} Tablenr:{{o.tablenr}}</p>\
    <li v-for="o in order">{{o.count}}x{{o.typee}}  \
    <ul> \
    <li style="list-style-type:none" v-for="a in o.orderItems">- {{a}}</li> \
    </ul>\
    </li> \
    <input style="" type="button" v-on:click="remove(order)" value="Remove">\
    </div>\
  ',
 methods: {
   orderOperation: function(order) {

     if(order[0].claim == false) {
      order[0].claim = true;
      order[0].class = 'orderClaimed';
      localStorage.setItem("ordersInKitchen", JSON.stringify(app.ordersInKitchen));

    }else {
      //i = app.ordersInKitchen.indexOf(order);
      //app.ordersInKitchen.splice(i,1);
      order[0].claim = false;
      order[0].class = 'order';
      localStorage.setItem("ordersInKitchen", JSON.stringify(app.ordersInKitchen));
    }

  },
  remove: function(o) {
    //var event = arguments[0] || window.event;
    event.cancelBubble = true;
    i = app.ordersInKitchen.indexOf(o);
    app.ordersInKitchen.splice(i,1);
    localStorage.setItem("ordersInKitchen", JSON.stringify(app.ordersInKitchen));
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

//window.setInterval(app.saveOrders,1000);
window.setInterval(app.loadOrders,1000);
app.load();
window.setInterval( app.updateGrading, 1000);
