var app = new Vue ({
    el: '#app',
    data: {
        message: 'Vue is working!',
        isGreen: false,
        isPink: false,
        isBlue: true,
        showMenu: false
    },
    methods: {
        toGreen: function (){
          this.isGreen = true;
          this.isPink = false;
          this.isBlue = false;
        },
        toBlue: function (){
            this.isBlue = true;
            this.isGreen = false;
            this.isPink = false;
          },
          toPink: function (){
            this.isPink = true;
            this.isGreen = false;
            this.isBlue = false;
          }
    }
})