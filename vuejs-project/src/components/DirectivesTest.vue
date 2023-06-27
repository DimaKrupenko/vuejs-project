<template>
    <div v-if="isVisible">
        <h1>Directives</h1>
    </div>
</template>

<script>
    export default {
    name: 'DirectivesTest',
    data() {
        return {
                isVisible: true,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>