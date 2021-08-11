<template>
  <div class="work-container">
    <!-- Title Section -->
    <div class="work-title-container">
      <h1 class="section-title work-title">Our Work</h1>
    </div>

    <!-- dummy images -->
    <div class="work-images-container">
      <div class="work-images">
        <img
          src="~/static/img-1.jpeg"
          class="dummy-image image-1"
          alt="dummy image"
        />
        <img
          src="~/static/img-2.jpeg"
          class="dummy-image image-2"
          alt="dummy image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import gsap from 'gsap'

@Component
export default class OurWork extends Vue {
  scrollAnimation() {
    gsap.to('.work-container', 0, {
      scrollTrigger: {
        trigger: document.querySelector('.work-container'),
        start: 'top 50%',
        onEnter: () => {
          document.body.classList.remove('light')
          document.body.classList.add('dark')
        },
        onLeaveBack: () => {
          document.body.classList.remove('dark')
          document.body.classList.add('light')
        },
      },
    })
  }

  titleAnimation() {
    gsap.to('.work-title', 0.5, {
      scrollTrigger: {
        trigger: '.work-title',
        start: 'top 80%',
        ease: 'expo.out',
      },
      y: '0',
    })
  }

  imageAnimation() {
    gsap.from('.dummy-image', 1.5, {
      scrollTrigger: {
        trigger: '.dummy-image',
        start: 'top bottom',
        ease: 'expo.out',
      },
      y: '100vh',
      stagger: 0.3,
      scale: 1.3,
    })
  }

  mounted() {
    this.scrollAnimation()
    this.titleAnimation()
    this.imageAnimation()
  }
}
</script>

<style scoped lang="scss">
.work-container {
  padding: 0 5rem;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}

.work-title-container {
  padding-top: 2.5rem;
  overflow: hidden;
}

.work-title {
  transform: translateY(110%);
}

.work-images-container {
  .work-images {
    position: relative;
    display: flex;

    .dummy-image {
      position: absolute;
    }

    .image-1 {
      width: 550px;
      right: 0;
    }
    .image-2 {
      width: 350px;
      right: 600px;
      top: 100px;
    }
  }
}
</style>
