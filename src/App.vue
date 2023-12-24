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
</style>
