<template>
    <div class="form">
        <input type="text" class="input" v-model="category" placeholder="Payment description">
        <input type="number" class="input" v-model="value" placeholder="Payment amount">
        <input type="date" class="input" v-model="date" placeholder="Payment date">
        <button class="form_btn" type="submit" @click='add'>ADD +</button>
    </div>
</template>

<script>
export default {
    name: 'Form',
    props: ['onAdd'],
    data() {
        return {
            category: '',
            value: '',
            date: ''
        }
    },
    methods: {
        add() {
            this.onAdd({
                category: this.category,
                value: this.value,
                date: this.date
            })
        }
    }
}
</script>

<style lang="scss">
.form {
    width: 600px;
    height: 60vh;
    position: absolute;
    top: 20vh;
    left: calc(50% - 500px);
    background-color: white;
    border: 1px solid cadetblue;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    padding: 10px;

    &:last-child {
        align-self: flex-end;
    }

    .input {

        padding: 8px 10px;
        border: 2px solid #ccc2c2;
        border-radius: 9px;
        margin-bottom: 10px;
        color: cadetblue;

        // box-shadow: 0  2px rgba(0, 0, 0, 0.5);
        &:focus {
            outline: 2px solid cadetblue;
            border: 0;
            border-radius: 9px;
            color: cadetblue;
        }

        &::placeholder {
            color: #ccc2c2;
        }
    }

    .form_btn {
        background-color: cadetblue;
        border: 1px solid cadetblue;
        border-radius: 3px;
        color: white;
        padding: 7px;
        display: inline-block;
        cursor: pointer;
        transition: 0.3s;
        width: 130px;

        &:hover {
            background-color: transparent;
            color: cadetblue;
        }
    }
}
</style>

/* {id: 1, date: '12.09.2022', category: 'food', value: 1582},*/