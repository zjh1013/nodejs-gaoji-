<template>
  <div>
      login
      <p><input type="text" placeholder="请输入账号" /></p>
      <p><input type="text" placeholder="请输入密码" /></p>
      <button>登录</button><button @click="gotoRegistry">注册</button>
      
  </div>
</template>

<script>
export default {
  methods:{
    gotoRegistry(){
      this.$router.push({
        path:"/registry"
      })
    }
  }

}
</script>

<style>

</style>