new Vue({
	el: '#desafio',
	data: {
		// criando atributo classe1
		classe1:'destaque'

	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
			this.classe1 = this.classe1 == 'destaque'
			?'encolher' : 'destque'
			}, 1000)
		},
		iniciarProgresso() {

		}
	}
})
