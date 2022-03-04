<template>
	<div id="app">
		<h1>Super Quiz</h1>
		<transition name="flip" mode="out-in">
		<Question v-if="questionMode"
			:question="questions[currentQuestion]"
			@answered="showResult"  />
		<Result v-else
		:result="result" 
		@confirmed="nextQuestion" />
		</transition>
	</div>
</template>

<script>
//importando componentes
import questions from './util/questions'
import Question from './components/Question.vue'
import Result from './components/Result.vue'


export default {
	name: 'app',
	//registrando os componentes
	components: { Question, Result },
	data() {
		return {
			Result: false,
			questionMode: true,
			questions,
			currentQuestion: 0
		}
	},
	methods: {
		//mostrar resultado
		showResult(result) {
			this.result = result
			// tirar pergunta
			this.questionMode = false
		},
		nextQuestion() {
			//mostrar pergunta
			this.questionMode = true
			// calcular valor r valor randomico de 0 ate tamanho do array
			let r = Math.random() * this.questions.length
			//converter para parseInt
			this.currentQuestion = parseInt(r)
		}
	}

}
</script>

<style>
body {
	background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
	font-family: 'Oswald', sans-serif;
	color: #FFF;
	height: 100vh;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
}

#app h1 {
	font-weight: 200;
	font-size: 4rem;
}
/* animações */ 
@keyframes flip-out {
	from { transform: rotateY(0deg); }
	to { transform: rotateY(90deg); }
}

@keyframes flip-in {
	from { transform: rotateY(90deg); }
	to { transform: rotateY(0deg); }
}

.flip-enter-active {
	animation: flip-in 0.3s ease;
}

.flip-leave-active {
	animation: flip-out 0.3s ease;
}
</style>
