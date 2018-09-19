<template>
	<div class="container">
		<div class="block">
			<h1 class="title is-1">{{custom}}</h1>
		</div>
		<div class="block">
			<div class="field">
				<div class="control">
					<input class="input is-primary" v-model="name" type="text" placeholder="name"></input>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<input class="input is-primary" v-model="tamanho" type="text" placeholder="tamanho"></input>
				</div>
			</div>
			<button class="button" v-on:click="ADD">add product</button>
		</div>
		<div class="block list">
			<ul>
				<li v-for="product in produtos">{{ product.name }} {{product.tamanho}}</li>
			</ul>
			<div>Quantidade de produtos: {{qty}}</div>
		</div>
	</div>
</template>
<script>
	import { mapState, mapGetters, mapMutations } from 'vuex'

	export default {
		name: 'Products',
		data() {
			return {
			 	name: '',
			 	tamanho: null
			}
		},
		computed: {
			...mapState({custom: 'title', produtos: 'products'}),
			...mapGetters({ qty: 'countProducts' })
		},
		methods: {
			...mapMutations([
				'addProduct'
			]),
			ADD: function() {
				this.addProduct({name: this.name, tamanho: this.tamanho})
				this.name = ''
				this.tamanho = ''
			}
		}
	}

</script>
<style scoped>
	h1{
		text-align: center;
		margin-top: 10%;
	}
	.list{
		background-color: #d0d0d0;
		padding: 15px;
	}
</style>