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
        
        
        
        if(localStorage.getItem("managername") !== null){
            this.managername = localStorage.getItem("managername");
        }
        if(localStorage.getItem("managerphone") != null){
         this.managerphone = localStorage.getItem("managerphone");
        }
        if(localStorage.getItem("notes") != null){
         this.notes = localStorage.getItem("notes");
        }
         if(localStorage.getItem("notes") == null){
         localStorage.setItem( "lastGrading", 0);
            
        }
        
        
        
    }
  }
})


v.loadInfo();