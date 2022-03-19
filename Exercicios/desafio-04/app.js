new Vue({
	el: '#desafio',
	data: {
		// criando atributo
		classe1: 'destaque',
		perigo: true,
		classe3: '',
		classe4: '',
		cor5: '',
		estilo5: {
			width: '100px',
			height: '100px',
		},
		width: '0',


	},
	methods: {
		iniciarEfeito() {
			//setInterval(()) Intervalo
			setInterval(() => {
				//se this.classe1 for igual a destaque vai receber incolher se não recebe destaque
				this.classe1 = this.classe1 == 'destaque'
					? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				//parando o temporizador no 100
				if (valor == 100) clearInterval(temporizador)

			}, 300)
		},

		setPerigo(event) {
			if (event.target.value == "true") {
				this.perigo = true
			} else if (event.target.value == "false") {
				this.perigo = false
			}
		}
	}
})
