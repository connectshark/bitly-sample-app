<template>
  <section class="text-left w-11/12 mx-auto">
    <h3>Group ID: {{props.guid}}</h3>
    <ul class="">
      <li class="mb-1 bg-zinc-900 p-2 rounded-xl" v-for="link in links" :key="link.id">
        <h4 class=" text-sm">{{link.title}}</h4>
        <p class=" text-xs hover:underline cursor-pointer">{{link.link}}<i class='bx bx-detail'></i></p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import api from '../utils/api'
const props = defineProps({
  guid: String
})

const { links } = await api.getGroupLinks(props.guid)
</script>