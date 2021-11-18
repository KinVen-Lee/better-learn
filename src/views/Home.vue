<template>
  <div></div>
</template>

<script setup lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'

interface DataProps {
  key?: 'value'
}
const data: DataProps = reactive({})
</script>
<style lang="scss" scoped></style>
