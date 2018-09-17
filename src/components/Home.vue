<template>
	<div class="container">
		<div class="block">
			<h1 class="title is-3">Acesso Rápido</h1>
		</div>
		<div class="block flexbox">
			<div class="square">
				<font-awesome-icon class="icon-size" icon="list"></font-awesome-icon>
				<p class="content ">Solicitação de esterilização</p>
			</div>
			<div class="square">
				<font-awesome-icon class="icon-size" icon="tags"></font-awesome-icon>
				<p class="content ">Etiquetagem</p>
			</div>
			<div class="square">
				<font-awesome-icon class="icon-size" icon="history"></font-awesome-icon>
				<p class="content ">Histórico de produto</p>
			</div>
		</div>
	</div>
</template>
<script>
</script>
<style scoped="">
	.block{
		margin-top: 60px;
	}
	.title{
		text-align: center;
		color: #676767;
	}
	.flexbox{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.square{
		width: 250px;
		height: 200px;
		margin: 10px;
		padding: 35px 20px 20px 20px;
		background-color: #fff;
		color: #545454;
		text-align: center;
		cursor: pointer;

		border-radius: 2%;
		 box-shadow: 0 2px 5px rgba(0,0,0,0.12), 0 2px 3px rgba(0,0,0,0.24);
  		transition: all 0.3s cubic-bezier(.25,.8,.25,1);
	}

	.square:hover{
		box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
	}

	.square .icon-size{
		font-size: 3em;
		color: #717171;
	}
	.square p{
		padding: 20px 15px ;
	}
</style>