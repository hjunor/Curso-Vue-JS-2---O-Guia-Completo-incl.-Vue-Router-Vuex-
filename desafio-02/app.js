new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alertA(){
          alert('seu valor é ' + this.valor)
        },
        alterar(e){
            this.valor = e.target.value
        }
    }
})