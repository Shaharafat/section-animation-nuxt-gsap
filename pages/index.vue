<template>
  <!-- <Tutorial /> -->
  <div>
    <hero-section />
    <our-work />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  head() {
    return {
      bodyAttrs: {
        class: 'light',
      },
    }
  }
}
</script>
