Vue.component('my-component', {
    template: '<div>Пользовательский компонент!</div>'
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
      console.log(response);
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

var str = '{ \
  "events": [ \
    {"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}, \
    {"title":"День рождения","date":"2015-04-18T12:00:00.000Z"} \
  ]\
}';

var event = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
});



console.log( event.events[1].date.getDate() ); // ошибка!
















