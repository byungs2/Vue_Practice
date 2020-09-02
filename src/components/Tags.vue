<template>
  <div id="tags">
    <h1>TagName</h1>
    <input type="text" id="Tags" />
    <br />
    <button type="button" v-on:click="req()">InsertTag</button>
  </div>
</template>

<script>
const storage = window.sessionStorage;

let config = {
  headers: {
    "jwt-auth-token": storage.getItem("jwt-auth-token"),
    "Access-Control-Allow-Origin": "*",
    'Content-Type': 'application/json;charset=UTF-8',
    
  }
}
export default {
  name: "InputTags",
  methods: {
    req: function () {
      this.$axios({
        config,
        method: "post",
        url: "http://localhost:80/tags",
        params: {
          tagName: document.getElementById("Tags").value,
        },
      }).then(res=>{
        console.log(res.data);
        console.log(storage.getItem("jwt-auth-token"))});
    },
  },
};
</script>