// Info Vue .
var v = new Vue({
  el: '#infoContainer',
  data: {
    managername: "",
    managerphone: "",
    notes: "", 
  },
  methods: {
    goToPage: function(url) {
      localStorage.setItem( "managername", this.managername); 
      localStorage.setItem( "managerphone", this.managerphone); 
      localStorage.setItem( "notes", this.notes); 
        
      window.location= url;
    },
      
    loadInfo: function() {
         this.managername = localStorage.getItem("managername");
         this.managerphone = localStorage.getItem("managerphone");
         this.notes = localStorage.getItem("notes");
    }
  }
})

v.loadInfo();