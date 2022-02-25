<template>
  <section>
    <a :href="link" class=" mx-auto bg-slate-800 rounded-lg text-xl text-white px-4 py-2 transition-opacity hover:opacity-80">
      <span class="w-4 h-4 inline-block align-middle"><bitly/></span>
      <span class=" inline-block align-middle mx-2">授權</span>
    </a>
  </section>
</template>

<script setup>
import bitly from '../components/bitly.vue'
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL
const link = `https://bitly.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`
</script>