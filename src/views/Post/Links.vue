<template>
    <div class="wrapper">
        <appHeader></appHeader>
        <appMenu></appMenu>
        <appLinks></appLinks>
        <appFooter></appFooter>
    </div>
</template>
<script>
import Header from '../../components/Layout/Header'
import Menu from '../../components/Layout/Menu'
import Footer from '../../components/Layout/Footer'
import Links  from '../../components/Post/Link'
export default {
    components:{
        appHeader   : Header,
        appMenu     : Menu,
        appFooter   : Footer,
        appLinks    : Links 
    },
}
</script>