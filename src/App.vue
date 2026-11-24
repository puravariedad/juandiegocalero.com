<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectCard from './components/ProjectCard.vue'
import ContentPage from './components/ContentPage.vue'
import ProjectPage from './components/ProjectPage.vue'
import SiteFooter from './components/SiteFooter.vue'
import { projects } from './data/site'

// No router: every URL loads index.html and the path picks the view.
const slug = location.pathname.replace(/^\/|\/$/g, '')
const isHome = slug === ''
const isProject = projects.some((project) => project.slug === slug)
</script>

<template>
  <SiteHeader />
  <main id="main">
    <ProjectPage v-if="isProject" :slug="slug" />
    <ContentPage v-else-if="!isHome" :slug="slug" />
    <HeroSection v-if="isHome" />
    <div v-if="isHome" class="portfolio-main" id="JDportfolio">
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
