<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <router-link class="navbar-brand" to="/">The Goodest <img class="ml-1" src="../assets/paw_logo_2.png" width="30" height="30" alt=""></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <!-- <li class="nav-item active">
          <router-link class="nav-link" to="/animals">Animals <span class="sr-only">(current)</span></router-link>
        </li> -->
        <li class="nav-item">
          <a class="nav-link" href="#" data-toggle="modal" data-target="#loginModal">Log in</a>
        </li>
      </ul>
    </div>
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body text-left">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Username/Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <button type="button" class="btn btn-primary">Log In</button>
            </form>
          </div>
          <!-- <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-primary">Log In</button>
          </div> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>
