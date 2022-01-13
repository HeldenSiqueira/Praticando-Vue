//Então inicialmente eu vou criar A função viu a função construtora para criar uma instância do viu pode ser que o objeto que tem um conjunto
new Vue({
    //atributo apontando pro seletor do HTML selecionando o elemento
    el: '#desafio',
    data: {
        nome: 'Helden',
        idade: 23,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        idadeVezes3(){
            return this.idade * 3
        },
        random(){
            return Math.random()
        }

    }

    


})