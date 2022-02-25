<template>
  <h2>welcome </h2>
  <Load/>
  <Suspense>
    <template #fallback>
      <Load/>
    </template>
    <GroupSection
      v-for="group in linkGroup"
      :key="group.guid"
      :guid="group.guid"
    />
  </Suspense>
</template>

<script setup>
import { ref } from 'vue'
import api from '../utils/api'
import GroupSection from '../components/groupSection.vue'
import Load from '../components/load.vue'

const linkGroup = ref([])
api.getBSDs()
api.getGroups()
  .then(groupObj => {
    linkGroup.value = groupObj.groups
  })
api.getOrganizations()
</script>