<template>
  <div class="home">
    <h1 v-on:click="onClick">Homeview</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <button v-on:click="showPopup">Добавить</button> -->
    <ul class="add_link">
      <li v-for="addPayments of addList" :keys="(addPayments.category, addPayments.count)">
        <router-link :to="`/add/payment/${addPayments.category}?value=${addPayments.count}`">
          <!-- <router-link :to="`/add/payment/${addPayments.category}?value=${addPayments.count}`"> -->
          {{ addPayments.title }}
        </router-link>
      </li>
    </ul>
    <List />
    <Popup v-if="isPopupActive" v-on:close="hidePopup" />
    <Pagination v-model="this.$store.currentPage"></Pagination>
  </div>
</template>

<script>
import AddButton from '@/components/AddButton.vue';
import List from '@/components/List.vue';
import Popup from '@/components/popup.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: "HomeView",
  components: { List, Popup, AddButton, Pagination },
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
    showPopup() { this.isPopupActive = true },
    hidePopup() { this.isPopupActive = false },
    onClick() {
      this.$router.push('/payment/')
    }
  },
  computed: {
    addList() {
      return this.$store.getters.getAddList
    },
  }
}
</script>

<style lang="scss">
.home {
  width: 1000px;
  margin: 0 auto;
}


.add_link {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 0;

  li {
    width: 250px;
    border: 1px solid black;
    padding: 2px 5px;
    background-color: rgb(228, 223, 223);
  }

  a {
    text-decoration: none;
    color: black;

  }
}
</style>