<template>
  <div class="">
    <router-link to="/">go home</router-link>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { useLinkStore } from '../stores/link'
import api from '../utils/api'

export default {
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useLinkStore()
    
    api.auth(route.query.code)
      .catch(err => console.error(err))
      .then(res => {
        const token = res.split('&')[0].slice(13)
        store.token = token
        router.replace('/')
      })
  }
}

</script>