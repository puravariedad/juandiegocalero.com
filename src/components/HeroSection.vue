<script setup>
import heroImg from '../assets/img/home.gif'
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-50">
        <div class="lds-app">
          <h1 class="h3">Product Designer</h1>
          <h2 class="display mt-0 mb-0">Creative mind, technical core</h2>
          <p>
            Blending user needs with business goals to help brands make
            consistently successful products.
          </p>
          <div class="heroe-action row">
            <div class="btn-home">
              <a
                href="https://juandiegocalero.com/contact-me/"
                class="btn btn-l prim mr-1"
              >Contact me</a>
            </div>
            <div class="btn-home">
              <a href="#JDportfolio" class="btn btn-ghost btn-l mr-1">
                View portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-50 d-none-m">
        <img
          :src="heroImg"
          class="heroe-img"
          alt="A blob chubby dude running"
        >
      </div>
    </div>
  </div>
</template>
