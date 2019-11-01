<template>
  <div>
    registry
    <p>
      <input type="text" placeholder="请输入账号" v-model="username" />
    </p>
    <p>
      <input type="text" placeholder="请输入密码" v-model="mima" />
    </p>
    <button @click="regIsTry()">注册</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      mima: ""
    };
  },
  methods: {
    regIsTry() {
      if (this.username == "") {
        alert("不能为空");
      } else {
        axios
          .post("/api/user/registry", {
            username: this.username,
            mima: this.mima
          })
          .then(res => {
            console.log(res);
          });
        (this.username = ""), (this.mima = "");
      }
    }
  }
};
</script>
<style>
</style>