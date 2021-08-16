<template>
  <div id="viewport">
    <div id="scroll-container">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

@Component
export default class extends Vue {
  smoothScroll() {
    const container = document.querySelector(
      '#scroll-container'
    ) as HTMLDivElement

    let height!: number

    // This will set the body height
    const setHeight = (): void => {
      height = container.clientHeight
      document.body.style.height = `${height}px`
      console.log(height)
    }

    // set height on init
    ScrollTrigger.addEventListener('refreshInit', setHeight)

    gsap.to(container, {
      y: () => -(height - document.documentElement.clientHeight),
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    })
  }

  mounted() {
    this.smoothScroll()
  }
}
</script>

<style scoped>
#viewport {
  overflow: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

#scroll-container {
  position: absolute;
  overflow: hidden;
  width: 100%;
}
</style>
