// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faList, faTags, faHistory } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faList, faTags, faHistory)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Detect click outside of an element
Vue.directive('click-out', {
  bind: function (element, binding, node) {
    // verifica se o parametro da diretiva é diferente de um objeto do tipo function.
    if (typeof binding.value !== 'function') {
      var component = node.context.name
      var text = '[Vue-click-out:] a expressão informada deve ser uma função'
      if (component) {
        text += ' Component: ' + component
      }
      console.warn(text)
    }

    // cria o evento e atribui ao elemento
    var bubble = binding.modifiers.bubble
    var handler = function (evt) {
      if (bubble || (!element.contains(evt.target) && element !== evt.target)) {
        binding.value(evt)
      }
    }
    element._vueClickOutside_ = handler
    // adiciona o evento que trata os cliques fora do component
    document.addEventListener('click', handler)
  },

  unbind: function (element) {
    // remove o evento que trata cliques fora do componente
    document.removeEventListener('click', element._vueClickOutside_)
    element._vueClickOutside_ = null
  }
})

// importing bulma
import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
