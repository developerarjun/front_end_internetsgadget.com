<template>
    <div class="wrapper">
        <appHeader></appHeader>
        <appMenu></appMenu>
        <appDashbord></appDashbord>
        <appFooter></appFooter>
    </div>
</template>
<script>
import Header from '../../components/Layout/Header'
import Menu from '../../components/Layout/Menu'
import Footer from '../../components/Layout/Footer'
import Dashbord from '../../components/Home/Dashbord'

export default {
    components:{
        appHeader   : Header,
        appMenu     : Menu,
        appFooter   : Footer,
        appDashbord : Dashbord
    },
    mounted () {
        if(!this.$store.getters.isLoggedIn) {
           alert('please login first');
           this.$router.push({name: 'Home'});
        } // go to '/login';
        }
}
</script>