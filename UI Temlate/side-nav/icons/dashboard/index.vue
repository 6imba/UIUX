<template>
  <div :class="$style.icon">
    <svg :width="width" :height="height" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 8L2.55556 6.44444M2.55556 6.44444L8 1L13.4444 6.44444M2.55556 6.44444V14.2222C2.55556 14.4285 2.6375 14.6263 2.78336 14.7722C2.92922 14.9181 3.12705 15 3.33333 15H5.66667M13.4444 6.44444L15 8M13.4444 6.44444V14.2222C13.4444 14.4285 13.3625 14.6263 13.2166 14.7722C13.0708 14.9181 12.8729 15 12.6667 15H10.3333M5.66667 15C5.87295 15 6.07078 14.9181 6.21664 14.7722C6.3625 14.6263 6.44444 14.4285 6.44444 14.2222V11.1111C6.44444 10.9048 6.52639 10.707 6.67225 10.5611C6.81811 10.4153 7.01594 10.3333 7.22222 10.3333H8.77778C8.98406 10.3333 9.18189 10.4153 9.32775 10.5611C9.47361 10.707 9.55556 10.9048 9.55556 11.1111V14.2222C9.55556 14.4285 9.6375 14.6263 9.78336 14.7722C9.92922 14.9181 10.1271 15 10.3333 15M5.66667 15H10.3333"
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
  name: 'DashboardIcon',
  props: {
    strokeColor: {
      type: String,
      default: '#1A73E8'
    },
    width: {
      type: String,
      default: '16'
    },
    height: {
      type: String,
      default: '16'
    },
  }
}
</script>

<style lang="scss" module>
.icon {
  color: transparent;
  float: left;
}
</style>