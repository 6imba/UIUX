<template>
  <div :class="$style.icon">
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 5.42857H16.5M4.83333 9.35714H5.66667M9 9.35714H9.83333M4 12.5H14C14.663 12.5 15.2989 12.2517 15.7678 11.8096C16.2366 11.3676 16.5 10.768 16.5 10.1429V3.85714C16.5 3.23199 16.2366 2.63244 15.7678 2.19039C15.2989 1.74834 14.663 1.5 14 1.5H4C3.33696 1.5 2.70107 1.74834 2.23223 2.19039C1.76339 2.63244 1.5 3.23199 1.5 3.85714V10.1429C1.5 10.768 1.76339 11.3676 2.23223 11.8096C2.70107 12.2517 3.33696 12.5 4 12.5Z"
        :stroke="strokeColor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'PaymentsIcon',
  props: {
    strokeColor: {
      type: String,
      default: '#667488'
    }
  }
}
</script>

<style lang="scss" module>
.icon {
  color: transparent;
  float: left;
}
</style>