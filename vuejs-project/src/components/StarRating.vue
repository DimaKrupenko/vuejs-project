<template>
    <div class="star-rating">
<span v-for="index in starLimit" :key="index" class="star"></span>
    </div>
</template>

<script>
    export default {
    name: 'StarRating',
    props: {
        rating: {
            type: Number,
            default: 0
        },
        starLimit: {
            type: Number,
            default: 5
        }
    }
        
    }
</script>

<style scoped>
.star-rating{
    display: inline-flex;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
}
.star {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 3px;
    flex-shrink: 0;
    /* &--colored {
        background: url('./assets/Star 4.svg') center no-repeat;
    }
    &--outlined {
        background: url('./assets/Star.svg') center no-repeat;
    } */
}
</style>