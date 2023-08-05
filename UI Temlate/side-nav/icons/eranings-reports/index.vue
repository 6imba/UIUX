<template>
  <div :class="$style.icon">
    <svg :width="width" :height="height" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.85714 11.8889V10.3333M6 11.8889V8.77778M8.14286 11.8889V7.22222M9.57143 15H2.42857C2.04969 15 1.68633 14.8361 1.41842 14.5444C1.15051 14.2527 1 13.857 1 13.4444V2.55556C1 2.143 1.15051 1.74733 1.41842 1.45561C1.68633 1.16389 2.04969 1 2.42857 1H6.41857C6.608 1.00004 6.78965 1.08202 6.92357 1.22789L10.7907 5.43878C10.9247 5.58461 11 5.7824 11 5.98867V13.4444C11 13.857 10.8495 14.2527 10.5816 14.5444C10.3137 14.8361 9.95031 15 9.57143 15Z"
        :stroke="strokeColor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script type="text/ecmascript-6">
import generalIcon
export default {
  name: 'EarningsReportsIcon',
  props: {
    strokeColor: {
      type: String,
      default: '#576579'
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