<script setup>
import { ref } from 'vue'
import NavMenu from './NavMenu.vue'
import logo from '../assets/img/logo.svg'
import { mainMenu } from '../data/site'

const open = ref(false)
</script>

<template>
  <header id="headerMain" :class="['header', { openAction: open }]">
    <div class="container">
      <div class="row">
        <div class="col-30 pr">
          <a href="/" class="logo">
            <img :src="logo" alt="Logo site UX / UI">Juandiego Calero
          </a>
          <div id="burgAction" class="burgmenu" @click="open = !open">
            <span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div class="col-70 text-right nav mainMenu rmvlist">
          <NavMenu :items="mainMenu" list-class="menu_primary" />
        </div>
      </div>
    </div>
  </header>
</template>
