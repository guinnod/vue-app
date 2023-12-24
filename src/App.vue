<template>
    <Header></Header>
    <div class="flex">
        <MenuBar></MenuBar>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import MenuBar from "./components/MenuBar.vue";

export default {
    name: "App",
    components: {
        Header,
        MenuBar,
    },
};
</script>

<style>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body {
    color: navy;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.flex {
    display: flex;
}
.checkbox input {
    height: 0;
    width: 0;
}
.checkbox {
    display: block;
    position: relative;
}
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 2px solid #c9c9c9;
    cursor: pointer;
}
.checkbox:hover input ~ .checkmark {
    background-color: transparent;
}
.checkbox input:checked ~ .checkmark {
    background-color: #ef6e4d;
    border-color: #ef6e4d;
}
.checkbox .checkmark:after {
    width: 100%;
    height: 100%;
    color: white;
    justify-content: center;
    align-items: center;
}
.checkbox input:checked ~ .checkmark:after {
    display: block;
}

.checkmark:after {
    content: "✓";
    display: flex;
    position: absolute;
    top: -3px;
    left: 2px;
}
</style>
