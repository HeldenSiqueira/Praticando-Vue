new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },

    //Propriedade computada
    computed: {
        resultado() {
            return this.valor == 37 ? 'Valo Igual' : 'Valor Diferente'
        }
    },
    //monitorando ações de determinada propriedade com Watch
    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
});