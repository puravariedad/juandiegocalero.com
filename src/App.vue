<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectCard from './components/ProjectCard.vue'
import SiteFooter from './components/SiteFooter.vue'
import { projects } from './data/site'
</script>

<template>
  <SiteHeader />
  <main id="main">
    <HeroSection />
    <div class="portfolio-main" id="JDportfolio">
      <div class="container">
        <div class="row row-works">
          <div v-for="project in projects" :key="project.href" class="col-50">
            <ProjectCard v-bind="project" />
          </div>
        </div>
      </div>
    </div>
  </main>
  <SiteFooter />
</template>
