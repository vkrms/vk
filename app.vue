<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <NuxtPage />
  </div>
</template>

<script setup>
  import * as VKID from '@vkid/sdk'

  const app = '52236307'
  const redirectUrl = 'https://vk-thing.vercel.app/xchange'

  VKID.Config.init({
    app,
    redirectUrl,
  });
</script>
