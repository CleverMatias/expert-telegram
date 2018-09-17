<template>
<!-- eslint-disable-next-line vue/max-attributes-per-line -->
<div class="header">
  <div class="container">
    <div class="block" v-click-out='teste'>
     <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <router-link to="/"><h1 class="title is-4 logo">Matias Web Dev</h1></router-link>
        </a>
        <a role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          v-bind:class="{ 'is-active': isActive }"
          v-on:click.prevent="isActive = !isActive"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
        <div class="navbar-start">
          <!-- Cadastros -->
          <div class="navbar-item has-dropdown"
            v-on:click.prevent="toggle('showCadastro')"
            v-bind:class="{ 'is-active': showCadastro }"
          >
            <a href="" class="navbar-link">Cadastros</a>
            <transition name="menu-popover">
            <div class="navbar-dropdown" v-if="showProdutos = true">
              <router-link to="/products"><a href="" class="navbar-item">Produtos</a></router-link>
              <a href="" class="navbar-item">Solicitação de Esterilização</a>
              <hr class="navbar-divider">
              <a href="" class="navbar-item">Clientes</a>
              <a href="" class="navbar-item">Colaboradores</a>
              <a href="" class="navbar-item">Grupo de materiais</a>
              <a href="" class="navbar-item">Limites de uso</a>
              <a href="" class="navbar-item">Métodos de esterilização</a>
              <a href="" class="navbar-item">nomes de produtos</a>
              <a href="" class="navbar-item">Ocorrências</a>
              <a href="" class="navbar-item">Regiões</a>
            </div>
            </transition>
          </div>
          <!-- Procedimento -->
          <div class="navbar-item has-dropdown"
            v-on:click.prevent="toggle('showProcedimentos')"
            v-bind:class="{ 'is-active': showProcedimentos }"
          >
            <a href="" class="navbar-link">Procedimentos</a>
            <div class="navbar-dropdown">
              <a href="" class="navbar-item">Etiquetagem</a>
            </div>
          </div>
          <!-- Relatórios -->
          <div class="navbar-item has-dropdown"
            v-on:click.prevent="toggle('showRelatorios')"
            v-bind:class="{ 'is-active': showRelatorios }"
          >
            <a href="" class="navbar-link">Relatórios</a>
            <div class="navbar-dropdown">
              <a href="" class="navbar-item">Clientes</a>
              <a href="" class="navbar-item">Esterilizações</a>
              <a href="" class="navbar-item">Produtos</a>
            </div>
          </div>
        </div>
      </div>
     </nav>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      showCadastro: false,
      showProcedimentos: false,
      showRelatorios: false,
    };
  },
  methods: {
    teste() {
      this.showCadastro = false,
      this.showProcedimentos = false,
      this.showRelatorios = false
    },
    toggle(x) {
      switch (x) {
        case 'showCadastro':
        this.showRelatorios = false
        this.showProcedimentos = false
        this.showCadastro = !this.showCadastro
        break
        case 'showProcedimentos':
        this.showRelatorios = false
        this.showProcedimentos = !this.showProcedimentos
        this.showCadastro = false
        break
        case 'showRelatorios':
        this.showRelatorios = !this.showRelatorios
        this.showProcedimentos = false
        this.showCadastro = false
        break
      }
    }
  }
}
</script>
<style>
.logo{
  color: #fff;
  padding-right: 5vw;
}
.navbar-burger{
  color: #fff !important;
}
.header{
  width: 100%;
  background: #393939;
}
.menu-popover-enter,
.menu-popover-leave-to {
  opacity: 0;
  transform: rotateY(50deg);
}
.menu-popover-enter-to,
.menu-popover-leave {
  opacity: 1;
  transform: rotateY(0deg);
}
.menu-popover-enter-active,
.menu-popover-leave-active {
  transition: opacity, transform 200ms ease-out;
}
</style>