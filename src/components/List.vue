<template>
    <div class="list">
        <div v-for="item of list" v-bind:key="item.id" class="list__item">
            <div>{{ item.date}}</div>
            <div>{{ item.category}}</div>
            <div>{{ item.count}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'List',
        computed: {
            list() {
                return this.$store.getters.getPaymentsList
            }
        }
    }
</script>

<style lang="scss">
    .list {
        width: 1000px;
        margin: 0 auto;
        border-radius: 10px;
        background-color: #ddd;

        &__item {
            height: 60px;
            border-bottom: 1px solid #444;
            display: flex;
            padding: 10px 25px;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>