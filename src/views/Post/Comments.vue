<template>
    <div class="wrapper">
        <appHeader></appHeader>
        <appMenu></appMenu>
        <appVComments></appVComments>
        <appFooter></appFooter>
    </div>
</template>
<script>
import Header from '../../components/Layout/Header'
import Menu from '../../components/Layout/Menu'
import Footer from '../../components/Layout/Footer'
import VComments  from '../../components/Post/Comment'
export default {
    components:{
        appHeader   : Header,
        appMenu     : Menu,
        appFooter   : Footer,
        appVComments : VComments 
    },
}
</script>