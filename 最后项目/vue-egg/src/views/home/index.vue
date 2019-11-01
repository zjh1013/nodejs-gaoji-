<template>
    <div>
      <div class="shang">
          <router-view></router-view>
      </div>
      <div class="xia">
        <router-link v-for="(item,index) in router" :key="index" :to="item.path" >{{item.name}}</router-link>
      </div>
    </div>
</template>

<script>
export default {
 
  data (){
    return {
      router : [
        {
          path:"/index/home",
          name:"首页"
        },{
          path:"/index/fenlei",
          name:"分类"
        },{
          path:"/index/shop",
          name:"购物"
        },{
          path:"/index/my",
          name:"我的"
        }
      ]
    }
  }

}
</script>

<style scoped>
.router-link-active{
  color: #fff;
}
  .shang{
    width: 100%;
    height: 623px;
    background: rgb(198, 206, 161);
    overflow: auto;
  }
  .xia{
    width: 100%;
    height: 44px;
    background: rgb(131, 173, 131);
    display: flex;
  }
  .xia a{
    flex: 1;
    align-items: center;
    justify-content: center;
    display: flex;
  }
</style>