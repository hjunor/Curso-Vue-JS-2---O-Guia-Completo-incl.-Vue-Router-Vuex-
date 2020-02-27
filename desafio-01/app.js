new Vue({
  el:'#app',
  data:{
      nome:'Heberth',
      idade:25
  },
  methods:{
      mult(){
          let result = this.idade * 3; 
          return  result
      },
      ali(){
          let num = Math.random()
          return num
      }
  }
}) 