Vue.component('todo-item', {
  template: '\
    <li>\
      <p style="font-weight:bold">OrderNR: #{{ id }}</p>  \
      {{ count }}x{{ title }} \
      <p style="color:red">{{ allerg[0] }}, {{allerg[1]}}, {{allerg[2]}}, {{allerg[3]}}</p> \
      <input type="button" v-on:click="$emit(\'remove\')" value="Remove">\
    </li>\
  ',
  props: ['title','count','allerg','id',]
})
var orderItems = [];

var temp = 0;
var app = new Vue({
  el: '#app',
  data: {
    show2 :false,
    show : true,
    count : 1,
    listcount: 0,
    name : '',
    WB : false,
    ischecked : false,
    grade: '',
    lastGrading: 0,
    timeSincelastGrading: 0,
    listOfTodos: [],
    todos: [],
    tablechoice: false,
    coun: "",
    tablenr: "",
    id: 1,

     },
  methods: {
    decrement: function () {
          this.todos[this.listcount -1 ].count -= 1;
      this.count -= 1
    },
    increment: function() {
          this.todos[this.listcount -1].count += 1;
      this.count += 1
    },
    placeOrder: function(typee) {

     var typ = {typee};
     typ.id = this.id,
     this.listcount += 1,
     this.WB = true,
     this.count = 1,
     this.show2 = true,
     typ.orderItems = [],
     typ.count = this.count,
     this.name = typee,
     this.uncheckallergi(),
     this.todos.push(typ)
   },
    /*placeOrder: function(typee) {
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

    },*/
    sendOrder: function() {

      if(this.listcount == 0) {
      }
      else {
      this.tablechoice = true
      this.show2 = false,
      this.count = 1,
      this.temp = 0,
      this.WB = false
    }

    },

    reviewOrder: function(index) {
      this.todos.splice(index, 1),
      this.show2 = false,
      this.uncheckallergi(),
      this.WB = false,
      this.listcount -= 1

  },

    addtablenr: function(coun) {
      this.tablenr = coun;
      this.id = parseInt(localStorage.getItem("orderID"));
      if (this.tablenr.length == 0){
      }
      else {
      this.id += 1;
      for (var i = 0; i < this.listcount; i++) {
        this.todos[i].tablenr = this.tablenr;
        this.todos[i].id = this.id;
        this.todos[i].claim = false;
        this.todos[i].class = 'order';
      }
      this.coun = "",
      this.tablechoice = false,
      this.listcount = 0,
      this.listOfTodos.push(this.todos);
      localStorage.setItem("orderList", JSON.stringify(this.listOfTodos));
      this.todos = []

    };

    },

    allergicheck: function () {
    var orderItems = [].filter.call(document.getElementsByName('order[]'),
    function(i) {
      return i.checked;
    }
  ).map(function(i) {
    return i.value;
    });

    this.todos[this.listcount-1].orderItems = orderItems;

  },
/*  allergicheck: function () {
    var orderItems = [].filter.call(document.getElementsByName('order[]'), function(i) {
      return i.checked;
    }).map(function(i) {
      return i.value;
    });
    return orderItems
  },*/
  uncheckallergi: function () {
    var checkboxes = new Array();
    checkboxes = document.getElementsByName('order[]');
    for (var i=0; i<checkboxes.length; i++)  {
      if (checkboxes[i].type == 'checkbox')   {
        checkboxes[i].checked = false;
      }
    }
  },
  goToPage: function(url) {
    localStorage.setItem( "grade", this.grade);
    localStorage.setItem( "lastGrading", this.lastGrading);
    localStorage.setItem("orderID",this.id);
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
    if(differenceInSec <60) {
      this.timeSincelastGrading = differenceInSec+" seconds ago";
    }else {
      this.timeSincelastGrading = Math.round(differenceInSec /60)+" minute(s) ago";
      }

  },

  load: function() {
    if(localStorage.getItem("grade") == null) {
      this.grade = 'gradingGreen';
    }else {
    this.grade = localStorage.getItem("grade")
    }
    if(localStorage.getItem("lastGrading") == null) {
      this.lastGrading = 0;
    }else {
    this.lastGrading = localStorage.getItem("lastGrading");
    }
    document.getElementById(this.grade).value = "X";

    this.updateGrading();
   }


  }
})

app.load();
window.setInterval( app.updateGrading, 1000);
