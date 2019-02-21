var app = new Vue ({
    el: '#app',
    data: {
      imgurl: 'assets/images/', 
      nextHero: 0,
      message: "hahahahahah",
      showServices: false,
      showHero: true,
      showContact: false,
      items: [
        {  heroNameTop: 'panther_text',  heroNameFront: 'panther', heroNameBack: 'panther_back' },
        {  heroNameTop: 'wonder_text',  heroNameFront: 'wonderWoman', heroNameBack: 'wonder_back' },
        {  heroNameTop: 'harley_text',  heroNameFront: 'harley', heroNameBack: 'harley_back' },
        {  heroNameTop: 'iron_text',  heroNameFront: 'ironman', heroNameBack: 'ironman_back' },
      ]
    },
    
    methods: {
        loadServices: function() {
          this.showServices = true;
          this.showHero = false;
          this.showContact = false;
        },
        loadHero: function() {
          this.showHero = true;
          this.showServices = false;
          this.showContact = false;   
        },
        loadContact: function() {
          this.showContact = true;
          this.showHero = false;
          this.showServices = false;   
        },
        loadClasses: function() {
          let $refTopName = this.$refs.heroName;
          let $refback = this.$refs.back_ref;
          let $ref =  this.$refs.front_ref;

          $refTopName.classList.add("slideDown");
          $ref.classList.add("slideRight");
          $refback.classList.add("scale");

          setTimeout(function() {
            $ref.classList.remove("slideRight");
            $refback.classList.remove("scale");
          }, 2000);

        },
        nextHeroFunc: function () {
          let $ref =  this.$refs.front_ref;
          let $refback = this.$refs.back_ref;
          let $refBtn = this.$refs.nextBtn;
          let $refTopName =  this.$refs.heroName;

          $refBtn.disabled = true;
          $refTopName.classList.add("slideDown");
          $ref.classList.add("slideRight");
          $refback.classList.add("scale");

          setTimeout(function() {
            $refBtn.disabled = false;
            $refTopName.classList.remove("slideDown");
            $ref.classList.remove("slideRight");
            $refback.classList.remove("scale");
          }, 2000);
         
          if (this.nextHero == this.items.length - 1){
            this.nextHero = 0;
          }else {
            this.nextHero += 1;
          }
      },
      highlightLinks: function() {
        var navContainer = document.getElementById("navigation");
        var links = navContainer.getElementsByClassName("navLinks");
        for( var i = 0; i < links.length; i++) {
          links[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) { 
              current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
          });
        }
      }
    },
    watch: {
      'nextHero': function(newVal, oldVal) { 
        console.log('value changed from ' + oldVal + ' to ' + newVal);   
      }
    }
})

/**
 * Trigger all the function on load
 */
//app.loadClasses();
  app.highlightLinks();