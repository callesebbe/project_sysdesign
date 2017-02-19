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
    grade: '',
    lastGrading: 0,
    timeSincelastGrading: 0,
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
    //Should be minutes
    var differenceInSec = Math.round(difference / 1000);
    this.timeSincelastGrading = differenceInSec;
  }
  }
})
