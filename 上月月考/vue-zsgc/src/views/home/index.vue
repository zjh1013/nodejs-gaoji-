<template>
  <div class="da">
    <div class="left">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>班级管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="gotoBj">班级管理</el-menu-item>
              <el-menu-item index="1-2" @click="gotoJs">教室管理</el-menu-item>
              <el-menu-item index="1-3" @click="gotoXs">学生管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      router: [
        {
          path: "/index/xs",
          name: "学生管理"
        },
        {
          path: "/index/js",
          name: "教室管理"
        },
        {
          path: "/index/bj",
          name: "班级管理"
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    gotoBj() {
      this.$router.push({ path: "/index/bj" });
    },
    gotoJs() {
      this.$router.push({ path: "/index/js" });
    },
    gotoXs() {
      this.$router.push({ path: "/index/xs" });
    }
  }
};
</script>

<style scoped lang='scss'>
.da {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    flex: 3;
    // background: forestgreen;
    border-right: 2px solid #ccc;
  }
  .right {
    flex: 7;
    // background: gold;
  }
}
</style>