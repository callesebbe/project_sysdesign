// Info Vue .
var v = new Vue({
  el: '#infoContainer',
  data: {
    managername: 'Per Persson',
    managerphone: '012345678',
  },
  methods: {
    goToPage: function(url) {
      this.managername = document.getElementById('managerName').value;
      this.managerphone = document.getElementById('managerPhone').value;
      window.location= url;
    }
  }
})
