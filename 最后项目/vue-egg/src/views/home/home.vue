<template>
  <div>
    <div class="kong">
      <Banner></Banner>
    </div>
    <div class="da">
      <div class="tabnav">
        <span
          :class="ind === index ? 'ac' : ''"
          v-for="(item,index) in tabnav"
          :key="index"
          @click="clickNav(item.typeid,index)"
        >{{item.typename}}</span>
      </div>
      <div class="tablist" v-for="(item,index) in tablist" :key="index">
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/banner.vue";
import axios from "axios";
export default {
  data() {
    return {
      tabnav: [],
      ind: 0,
      tablist:[]
    };
  },
  methods: {
    clickNav(id,index) {
      axios.get('/api/gettablist?type=' + id).then((res) => {
      this.tablist = res.data.result
    })
      this.ind = index;
    }
  },
  components: {
    Banner
  },
  created() {
    axios.get("/api/gettabnav").then(res => {
      this.tabnav = res.data.result;
    });
  }
};
</script>
<style scoped lang='scss'>
.kong {
  width: 100%;
  height: 400px;
}
.tabnav {
  width: 100%;
  display: flex;
  height: 44px;
  span {
    flex: 1;
    text-align: center;
    line-height: 44px;
  }
}
.tablist{
  width: 100%;
  height: 120px;
  border-bottom:1px solid #ccc; 
}
.ac {
  font-size: 19px;
  color: rgb(255, 0, 0);
}
</style>