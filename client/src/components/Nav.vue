<template>
  <nav class="navbar navbar-expand-xl navbar-light d-flex">
    <router-link class="navbar-brand" to="/">The Goodest <img class="ml-1" src="../assets/paw_logo_2.png" width="30" height="30" alt=""></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- <button type="button"
      v-on:click="toggleMenu"
      class="hamburger hamburger--slider"
      :class="{'is-active': isActive}"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button> -->
    <div class="side-menu"
      :class="{'is-open': isMenuOpen}"
    >
      <ul>
        <li>
          <a class="nav-link" href="#" v-if="userIsLoggedIn" v-on:click="logoutUser">
            Log out
          </a>
          <a class="nav-link" href="#" data-toggle="modal" data-target="#loginModal" v-else>
            Log in
          </a>
        </li>
        <li>
          <router-link class="nav-link" to="/search">Search</router-link>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" v-if="userIsLoggedIn" v-on:click="logoutUser">
            Log out
          </a>
          <a class="nav-link" href="#" data-toggle="modal" data-target="#loginModal" v-else>
            Log in
          </a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/search">Search</router-link>
        </li>
      </ul>
    </div>
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body text-left">
            <div class="text-center" v-if="isLoading">
              <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
            <div class="text-center" v-else-if="userIsLoggedIn && !isLoading">
              <p>Login successful!</p>
            </div>
            <form v-else>
              <div class="form-group">
                <label for="usernameInput">Username/Email</label>
                <input type="email" class="form-control" :class="isLoading ? 'valid' : 'error'" id="usernameInput" aria-describedby="emailHelp" placeholder="Enter email" v-model="user.email">
              </div>
              <div class="form-group">
                <label for="passwordInput">Password</label>
                <input type="password" class="form-control" id="passwordInput" placeholder="Password" v-model="user.password">
              </div>              
              <button type="button" class="btn btn-primary" v-on:click="loginUser">Log In <font-awesome-icon icon="paw" /></button>
              <p class="my-2">Don't have an account? Click <a href="#" data-toggle="modal" data-target="#createAccountModal" data-dismiss="modal">here</a> to create an account.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="createAccountModal" tabindex="-1" role="dialog" aria-labelledby="createAccountModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body text-left">

            <div class="text-center" v-if="isLoading">
              <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>

            <div class="text-center" v-else-if="addedNewUser && !isLoading">
              <p>Account created!</p>
              <p class="my-2 text-center">Click <a href="#" data-toggle="modal" data-target="#loginModal" data-dismiss="modal">here</a> to go back to login.</p>
            </div>

            <form v-else>
              <div class="form-group">
                <label for="createUsernameInput">Email</label>
                <input type="email" class="form-control" id="createUsernameInput" aria-describedby="emailHelp" placeholder="Enter email" v-model="user.email">
              </div>
              <div class="form-group">
                <label for="createPasswordInput">Password</label>
                <input type="password" class="form-control" id="createPasswordInput" placeholder="Password" v-model="user.password">
                <p>Please choose a more secure password.</p>
              </div>
              <div class="form-group">
                <label for="lastNameInput">Full Name</label>
                <input type="email" class="form-control" id="lastNameInput" aria-describedby="emailHelp" placeholder="Enter Full Name" v-model="user.fullName">
              </div>
              <p></p>
              <button type="button" class="btn btn-primary" v-on:click="addUser">Create Account <font-awesome-icon icon="paw"/></button>
              <p class="py-2">Click <a href="#" data-toggle="modal" data-target="#loginModal" data-dismiss="modal">here</a> to go back to login.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Nav',
  data() {
    return {
      isLoading: false,
      isActive: false,
      isMenuOpen: false,
      addedNewUser: false,
      userIsLoggedIn: false,
      userToken: null,
      user: {
        email: '',
        password: '',
        fullName: ''
      }
    }
  },
  methods: {
    addUser() {
      this.isLoading = true;
      return axios.post(process.env.VUE_APP_USERS_ROUTE, this.user).then(response => {
        if (response.status === 201) {
          this.addedNewUser = true;
          this.isLoading = false;
        }
      }).catch(err => {
        console.log('user cannot be created');
        this.isLoading = false;
      });
    },
    loginUser() {
      this.isLoading = true;
      return axios.post(process.env.VUE_APP_LOGIN_ROUTE, {email: this.user.email, password: this.user.password}).then(response => {
        if (response.status === 200) {
          this.userIsLoggedIn = true;
          this.isLoading = false;
          this.userToken = response.data.token;
        }
      }).catch(err => {
        this.isLoading = false;
        console.log('cannot login because of ', err);
      });
    },
    logoutUser() {
      const headers = {
        Authorization: `Bearer ${this.userToken}`
      }
      console.log(this.userToken);
      this.isLoading = true;
      return axios.post(process.env.VUE_APP_LOGOUT_ROUTE, { headers }).then(response => {
        this.userIsLoggedIn = false;
        this.isLoading = false;
      }).catch(err => {
        this.isLoading = false;
        console.log('cannot logout because of ', err);
      })
    },
    toggleMenu() {
      this.isActive = !this.isActive;
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<style scoped>
  /* .navbar {
    left: 0;
    justify-content: space-between;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 20;
  } */
  .hamburger {
    z-index: 100;
  }
  .hamburger-inner, .hamburger-inner:after, .hamburger-inner:before,
  .hamburger.is-active .hamburger-inner, .hamburger.is-active .hamburger-inner:after, .hamburger.is-active .hamburger-inner:before {
    background-color: #FF2C37;
  }
  .navbar-toggler {
    padding: .25rem;
  }
  .navbar-toggler-icon {
    height: 1em;
    width: 1em;
  }
  .side-menu {
    background-color: white;
    height: calc(100vh);
    right: 0;
    position: absolute;
    top: 0;
    transition: 0.3s ease;
    width: 0;
  }
  .side-menu.is-open {
    width: 350px;
    z-index: 99;
  }
  .btn {
    background-color: #FF2C37;
    border-color: #FF2C37;
  }
  .modal a {
    color: #FF2C37;
  }
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid #FF2C37;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #FF2C37 transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media only screen and (min-width: 1200px) {
    .hamburger {
      display: none;
    }
  }
</style>
