<template>
    <button v-bind:type="type" class="btn">
<slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MainButton',
    props: {
        type: String
    },
    
}
</script>
<style  scoped>
.btn{
display: inline-block;
font-size: 18px;
background-color: orange;
color: white;
cursor: pointer;
min-width: 220px;
border: 1px solid transparent;
padding: 8px 15px;
}
</style>