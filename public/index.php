<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <p>{{ message }}</p>
    <ol>
      <todo-item v-for="item in groceryList" v-bind:todo="item"></todo-item>
    </ol>
  </div>

  <script src="https://unpkg.com/vue@2.1.4/dist/vue.js"></script>
  <script>
    Vue.component('todo-item', {
      props: ['todo'],
      template: '<li>{{ todo }}</li>'
    })

    var app = new Vue({
          el: '#app',
          data: {
            groceryList: [ 'Овощи', 'Сыр', 'Кепчук' ],
            message: "Сообщение"
          }
        })
  </script>

</body>
</html>