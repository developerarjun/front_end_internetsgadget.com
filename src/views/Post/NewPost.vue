<template>
    <div class="wrapper">
        <appHeader></appHeader>
        <appMenu></appMenu>
        <appVNewPost></appVNewPost>
        <appFooter></appFooter>
    </div>
</template>
<script>
import Header from '../../components/Layout/Header'
import Menu from '../../components/Layout/Menu'
import Footer from '../../components/Layout/Footer'
import VNewPost from '../../components/Post/NewPost'
export default {
    components:{
        appHeader   : Header,
        appMenu     : Menu,
        appFooter   : Footer,
        appVNewPost : VNewPost
    },
}
</script>