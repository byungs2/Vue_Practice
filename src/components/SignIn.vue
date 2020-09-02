<template>
  <div class="signin">
    <h1>userName</h1>
    <input type="text" id="userName" />
    <br />
    <h1>userEmail</h1>
    <input type="text" id="userEmail" />
    <br />
    <h1>userPassword</h1>
    <input type="text" id="userPassword" />
    <br />
    <button type="button" id="signIn" v-on:click="req()">signIn</button>
  </div>
</template>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

<script>
export default {
  name: "JoinIn",
  methods: {
    req: function () {
      console.log("post");
      this.$axios({
          method: 'post',
          url : "http://127.0.0.1:80/users",
          data : {
          userName: document.getElementById("userName").value,
          userEmail: document.getElementById("userEmail").value,
          userPassword: document.getElementById("userPassword").value,
          }
        }
        )
        .then((res) => {
          console.log("post");
          console.log(res.data);
        })
        .catch(() => {
        });
    },
  },
};
</script>