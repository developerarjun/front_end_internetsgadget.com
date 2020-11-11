<template>
 <div class="login-box">
  <div class="login-logo">
    <a href="/"><b>Internet Gadget</b></a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>
        <div class="input-group mb-3">
          <input type="text" class="form-control" name="username" placeholder="username" v-model="username">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" name="password" placeholder="password" v-model="password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- /.col -->
          <div class="col-4">
            <button class="btn btn-primary btn-block" @click="login_in_dashboard">Log in</button>
          </div>
          <p v-show="loading">Please wait.......</p>
          <!-- /.col -->
        </div>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;

export default {
  data: function () {
    return {
      username: '',
      password: '',
      loading: false,
      isError: ''
    }
  },
  methods:{
    login_in_dashboard (){
        if(this.username.length == 0 || this.password == 0) return
        this.loading = true;
        let parms = {
          username  : this.username,
          password  : this.password
        }
        axios
          .post('http://localhost:3001/app/v1/securiy/login',parms)
          .then(response => {
            if(response.status == 200 && response.statusText == 'OK'){
              this.loading = false;
              this.$store.commit('setAuthUser', this.username);
              this.$router.push({name: 'Dashbord'});
            }
          })
        .catch(error => {
          console.log(error);
          this.loading = false;
          this.isError = 'Something gone error!! please try again'
          alert(this.isError);
        })
        .finally(() => this.loading = false)
    }
  },
  mounted() {
   document.body.classList.add('hold-transition', 'login-page');
},
  unmounted() {
     document.body.classList.remove('hold-transition', 'login-page');
  }
}
</script>