<template>
    <div class="contador">
        <span>{{ contador }}</span>
        <button @click="adicionar">+</button>
         <button @click="subtrair">-</button>

</template>

<script>
export default {
  data() {
    return{
        contador: 0
    }
  },
  methods: {
      adicionar() {
          this.contador++
      },
      subtrair() {
          this.contador--
      }
  }
}
</script>

<style>
    .contador span {
        border-bottom: 1px;
    }
</style>
