<template>
    <button v-bind:type="type" >
<slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MainButton',
    props: {
        type: String
    }
}
</script>
<style lang="scss" scoped>

</style>