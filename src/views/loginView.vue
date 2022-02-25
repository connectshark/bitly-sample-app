<template>
  <section>
    <a :href="link">授權</a>
  </section>
</template>

<script setup>
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL
const link = `https://bitly.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`
</script>