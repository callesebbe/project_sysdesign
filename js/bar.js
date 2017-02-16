Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})

var temp = 0;
var app = new Vue({
  el: '#app',
  data: {
    show2 :false,
    show : true,
    count : 1,
    name : '',
    WB : true,
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
      this.todos.push(this.count + "x " + this.name)
    }
      temp += 1;
      this.count = 1,
      this.show2 = true,
      this.name = typee
    },
    sendOrder: function() {
      this.show2 = false,
      this.count = 1,
      this.temp = 0
    },
    reviewOrder: function() {
      if (temp > 0){
      this.todos.push(this.count + "x " + this.name),
      temp = 0,
      this.show2 = false
    }
    }
  }
})
