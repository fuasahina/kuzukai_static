Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '藤井のりひこ' },
            { id: 1, text: '鶴屋' },
            { id: 2, text: 'タッツミー' }
        ]
    }
})