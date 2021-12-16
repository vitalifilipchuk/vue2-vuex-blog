<template>
    <button
    class="btn"
    >
    {{text}}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: {
            type: String,
            default: ''
        } 
    }
}
</script>

<style>
.btn {
    display: inline-flex;
    padding: 12px 16px;
    border-radius: 10px;
    background-color: #00a1e4;
    box-shadow: 0 7px 15px rgba(28,108,189,.35);
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}

.btn--block {
    width: 100%;
}

.logout-btn {
    background-color: darkred;
}

.login-btn {
    background-color: green;
}
</style>