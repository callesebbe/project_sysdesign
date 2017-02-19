Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})
var orderItems = [];

var temp = 0;
var app = new Vue({
  el: '#app',
  data: {
    show2 :false,
    show : true,
    count : 1,
    name : '',
    WB : false,
    ischecked : false,
    todos: [
    ]
  },
  methods: {
    decrement: function () {
      this.count -= 1
    },
    increment: function() {
      this.count += 1
    },
    placeOrder: function(typee) {
      if (temp > 0){
      this.todos.push(this.count + "x " + this.name + ": " + this.allergicheck())
    }
      this.WB = true,
      temp += 1;
      this.count = 1,
      this.show2 = true,
      this.uncheckallergi(),
      orderItems = [],
      this.name = typee
    },
    sendOrder: function() {
      this.show2 = false,
      this.count = 1,
      this.temp = 0,
      this.WB = false,
      this.todos = []
    },
    reviewOrder: function() {
      if (temp > 0){
      this.todos.push(this.count + "x " + this.name + ": " + this.allergicheck()),
      temp = 0,
      this.show2 = false,
      this.uncheckallergi(),
      orderItems = [],
      this.WB = false
    }
  },
  allergicheck: function () {
    var orderItems = [].filter.call(document.getElementsByName('order[]'), function(i) {
      return i.checked;
    }).map(function(i) {
      return i.value;
    });
    return orderItems
  },
  uncheckallergi: function () {
    this.ischecked = false
  }
  }
})
