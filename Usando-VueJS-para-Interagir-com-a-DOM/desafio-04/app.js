new Vue({
	el: '#desafio',
	data: {
		caixa:'encolher',
		perigo : true,
		classe3: '',
		classe4: '',
		cor5:'',
		estilo5:{
			width: '100px',
			height:'100px',
		},
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
			this.caixa =	this.caixa =='encolher'
			 ? 'destaque' : 'encolher'
			  console.log(this.classe4)
			}, 1000)
		
		
	},
		iniciarProgresso() {
		let valor = 0;
		 const contador = setInterval(() => {
			 valor+=5
			 this.width = `${valor}%`
			 console.log(valor)
			 if(valor==100) clearInterval( contador)
		 }, 500);
		},
		setPerigo(event){
			if(event.target.value == "true"){
				this.perigo = true
			}else if( event.target.value == "false"){
        this.perigo = false
			}
		}
	}
})
