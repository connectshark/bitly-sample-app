<template>
  <div class="">
    <router-link to="/">go home</router-link>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import api from '../utils/api'

export default {
  setup () {
    const route = useRoute()
    const router = useRouter()
    
    api.auth(route.query.code)
      .catch(err => console.error(err))
      .then(res => {
        const form = res.split('&').map(item => {
        })
        console.log(form)
      })
    return {

    }
  }
}

</script>