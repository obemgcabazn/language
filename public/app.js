Vue.component( '<translation>', {
  template: '<div></div>'
});

var vm = new Vue({
  el: '#app',
  data: {
    searchWord: 'converge',
    your_json: {}
  },
  mounted: function () {
    var vm = this;

    jQuery.ajax({
      type: "POST",
      url: "base.json",
      dataType: 'json'
    }).done(function (response) {
      vm.your_json = response;
    })

  },
  computed: {
    searchResult: function() {
      var y = [];
      var x = this.your_json;
      for( name in x){
        if(x[name]["name"] == this.searchWord){
          y[0] = x[name]["translate"];
          y[1] = x[name]["context"];
        }
      }

      return y;
    }
  }
});