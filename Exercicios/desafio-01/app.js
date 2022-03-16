//função construtura 
//criando instancia do vue
new Vue({
    //controlando elemento
    el: '#desafio',
    data: {
        //atributos
        nome: 'Ana',
        idade: 28,
        cidade: 'Gama-df',
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'

    },

    //criando funções
    methods: {
        idadeVezes3() {
            return this.idade * 3
        },
        random() {
            return Math.random()
        }
    }
})