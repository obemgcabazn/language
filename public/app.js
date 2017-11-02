;(function($){
    $(function() {
        var app = new Vue({
            el: '#app',
            data: {
                groceryList: [
                    {
                        id: 1,
                        title: 'Вымыть посуду'
                    },
                    {
                        id: 2,
                        title: 'Вынести мусор'
                    },
                    {
                        id: 3,
                        title: 'Подстричь газон'
                    }
                ],
                message: "Сообщение",
                words: ajaxGetXML()
            }
        });
    });

    function ajaxGetXML(){
        $.getJSON('base.json', { get_param: 'value' }, function(data) {

            var words = [];
            words.push(data["word"]);
            words.push(data["word1"]);
            console.log(words);
            return words;
        });
    }
})(jQuery);


Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo }}</li>'
});