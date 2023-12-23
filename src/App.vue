<template>
    <Header></Header>
    <MenuBar></MenuBar>
</template>
  
<script>
    import Header from './components/Header.vue';
    import MenuBar from './components/MenuBar.vue';

    export default {
        name: 'App',
        components: {
        Header,
        MenuBar
        }
    }
</script>
  
<style>
    *{
        box-sizing: border-box;
        padding: 0;
        margin:0;
    }
    body{
        color: navy;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    
</style>
  