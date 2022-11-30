<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <button v-on:click="showPopup">Добавить</button>
        <List />
        <Popup v-if="isPopupActive" v-on:close="hidePopup"/>
    </div>
</template>

<script>
import List from '@/components/List.vue';
import Popup from '@/components/popup.vue';

export default {
    name: "HomeView",
    components: { List, Popup },
    data() {
        return {
            isPopupActive: false,
        }
    },
    props: {
        list: Array,
        categories: Array
    },
    methods: {
        showPopup() {this.isPopupActive = true},
        hidePopup() {this.isPopupActive = false}
    }
}
</script>

<style>

</style>