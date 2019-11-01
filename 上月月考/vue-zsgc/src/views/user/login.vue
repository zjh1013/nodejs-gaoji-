<template>
  <div>
    <input type="text" v-model="username" />
    <input type="text" v-model="password" />
    <button @click="btn">提交</button>
  </div>
</template>
<script>
import { login } from "../../api/api";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    btn() {
      console.log(11);
      login({
        username: this.username,
        password: this.password
      }).then(res => {
        console.log(res);
        window.sessionStorage.setItem("token", res.data.token);
        if (res.data.code == 1) {
          this.$router.push({ path: "/index/xs" });
        }
      });
    }
  }
};
</script>

<style>
</style>