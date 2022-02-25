<template>
  <main>
  </main>
</template>

<script>
import api from '../utils/api'

export default {
  setup () {
    api.getBSDs()
    api.getGroups()
      .then(res => {
        const GROUP_ID = res.groups[0].guid
        api.getGroupLinks(GROUP_ID)
      })
    api.getOrganizations()
  }
}
</script>