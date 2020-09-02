<template>
  <div class="login">
    <h1>userEmail</h1>
    <input type="text" id="userEmail" />
    <br />
    <h1>userPassword</h1>
    <input type="text" id="userPassword" />
    <br />
    <button type="button" id="sending" v-on:click="req()">LogIn</button>
  </div>
</template>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

<script>
let config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
}
const storage = window.sessionStorage;
export default {
  name: "SiteLogIn",
  methods: {
    req: function () {
      this.$axios
        .get("http://localhost:80/users/login", {
          params: {
            userEmail: document.getElementById("userEmail").value,
            userPassword: document.getElementById("userPassword").value,
          },
          config,
        })
        .then((res) => {
          storage.setItem("jwt-auth-token", res.headers["jwt-auth-token"]);
          console.log(res.data);
          console.log(storage.getItem("jwt-auth-token"))
        })
        .catch(function (error) {});
    },
  },
};
</script>