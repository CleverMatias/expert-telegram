import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		title: 'Produtos',
		products: [
			{ name: 'cateter', tamanho: 15},
			{ name: 'manopla', tamanho: 25},
			{ name: 'bisturi', tamanho: 10},
			{ name: 'alicate', tamanho: 11},
		]
	},
	getters: {
		countProducts: state => {
			return state.products.length
		}
	},
	mutations:{
		addProduct(state, payload){
			state.products.push(payload)
		}
	},
	actions: {

	}
})