<template>
  <svg xmlns="http://www.w3.org/2000/svg" :fill="color" viewBox="0 0 24 16">
    <rect :fill="color" width="24" height="1.98" rx=".99"/>
    <rect :fill="color" width="24" height="1.98" y="6.771" rx=".99"/>
    <rect :fill="color" width="24" height="1.98" y="13.54" rx=".99"/>
  </svg>
</template>

<script>
export default {
  props: ['color']
}
</script>
