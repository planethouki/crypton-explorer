<template>
  <div>
    <a
      :href="`https://opensea.io/accounts/${account}`"
      target="_blank"
      rel="noreferrer noopener"
      >{{ account }}&#x279A;</a
    >
  </div>
</template>

<script>
export default {
  name: 'AccountLinkFacade',
  props: {
    account: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>
