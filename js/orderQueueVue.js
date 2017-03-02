Vue.component('order-div', {
  template: '\
  <button  :class="order[0].class" > \
  <p v-for="(o,index) in order" v-if="index<1">#{{o.idt}} Tablenr:{{o.tablenr}}</p>\
    <li v-for="o in order">{{o.count}}x{{o.typee}}  \
    <ul> \
    <li style="list-style-type:none" v-for="a in o.orderItems">- {{a}}</li> \
    </ul>\
    </li> \
    <input v-if="order[0].claim != true" id="orderRemoveButton" type="button" v-on:click="remove(order)" value="Remove">\
    </button>\
  ',
 methods: {
remove: function(o) {
  //var event = arguments[0] || window.event;
  //event.cancelBubble = true;
  i = app.ordersInKitchen.indexOf(o);
  app.ordersInKitchen.splice(i,1);
  localStorage.setItem("ordersInKitchen", JSON.stringify(app.ordersInKitchen));
}},
  props: ['order']
 })

var app = new Vue({
  el: '#app',
  data: {
    name: '',
    count: 0,
    orderitems: [],
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
      window.location= url;
    },

  }
})


//window.setInterval(app.saveOrders,1000);
window.setInterval(app.loadOrders,1000);
window.setInterval( app.updateGrading, 1000);
