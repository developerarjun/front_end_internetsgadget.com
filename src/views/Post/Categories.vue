<template>
    <div class="wrapper">
        <appHeader></appHeader>
        <appMenu></appMenu>
        <appVCategories></appVCategories>
        <appFooter></appFooter>
    </div>
</template>
<script>
import Header from '../../components/Layout/Header'
import Menu from '../../components/Layout/Menu'
import Footer from '../../components/Layout/Footer'
import VCategories from '../../components/Post/Categories'
export default {
    components:{
        appHeader   : Header,
        appMenu     : Menu,
        appFooter   : Footer,
        appVCategories : VCategories
    },
}
</script>