<template>
  <div class="hero-section-container allCenter">
    <div>
      <div class="hero-title">
        <h1 class="section-title hero-title-text">
          We help companies create more
        </h1>
      </div>
      <div class="hero-title">
        <h1 class="section-title hero-title-text">valuable interactions</h1>
      </div>
    </div>
    <div class="section-subtitle">
      <p class="section-subtitle-text subtitle-text">
        We are a design & development studio focused on creating valuable <br />
        interactions through digital innovation. Our aim is to provide users
        with
        <br />
        a lasting impression that will work towards <br />building strong
        relationships.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import gsap from 'gsap'

@Component
export default class HeroSection extends Vue {
  titleAnimation() {
    const tl = gsap.timeline()
    tl.to('.hero-title-text', 1, {
      y: '0',
      delay: 0.5,
      stagger: 0.1,
      ease: 'expo.out',
    })
    tl.to('.subtitle-text', 1, {
      y: '0',
      delay: -0.8,
      ease: 'expo.out',
    })
  }

  mounted() {
    this.titleAnimation()
  }
}
</script>

<style scoped lang="scss">
.hero-section-container {
  padding: 0 2rem; 
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
}

.hero-title {
  overflow: hidden;
}
.hero-title-text,
.subtitle-text {
  transform: translateY(110%);
}

.section-subtitle {
  overflow: hidden;
}
</style>
