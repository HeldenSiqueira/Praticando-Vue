new Vue({
    //elemento
    el: '#desafio',
    //atributos
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Estou alertando agora')
        },
        alterarValor(event){
            this.valor = event.target.value
        }
    }
})