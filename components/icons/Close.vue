<template>
  <svg xmlns="http://www.w3.org/2000/svg" :fill="color" viewBox="0 0 19 19">
    <rect :fill="color" width="22.469" height="1.926" x=".875" y="16.786" rx=".963" transform="rotate(-45 .875 16.786)"/>
    <rect :fill="color" width="22.469" height="1.926" x="2.236" y=".852" rx=".963" transform="rotate(45 2.236 .852)"/>
  </svg>
</template>

<script>
export default {
  props: ['color']
}
</script>
