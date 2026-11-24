<script setup>
import NavMenu from './NavMenu.vue'
import { mainMenu, socialMenu } from '../data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer id="footer" class="footer">
    <div class="container footer-top mb-1">
      <div class="row">
        <div class="col-30 footer-links">
          <a href="/" class="pl-0">Juandiego Calero</a>
        </div>
        <div class="col-70 text-right rmvlist footer-links">
          <NavMenu :items="mainMenu" />
        </div>
      </div>
    </div>
    <div class="container footer-bottom">
      <div class="row">
        <div class="col-50 rmvlist footer-links">
          <NavMenu :items="socialMenu" />
        </div>
        <div class="col-50 text-right footer-legal">
          All brand-related content belong to their legal entities | {{ year }}
        </div>
      </div>
    </div>
  </footer>
</template>
