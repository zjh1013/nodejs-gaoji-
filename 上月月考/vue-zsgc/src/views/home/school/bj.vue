<template>
  <div>
    <div>
      <el-button type="primary" @click="centerDialogVisible = true,aa=true">✚添加班级</el-button>
      <el-dialog title="添加班级" :visible.sync="centerDialogVisible" width="30%" center>
        <div>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="班级名">
              <el-input v-model="form.bjm"></el-input>
            </el-form-item>
            <el-form-item label="课程名">
              <el-input v-model="form.kcm"></el-input>
            </el-form-item>
            <el-form-item label="教室号">
              <el-input v-model="form.jsh"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="centerDialogVisible = false">取消</el-button>
              <el-button type="primary" @click="onSubmit" v-show="aa">确定</el-button>
            </el-form-item>
          </el-form>
        </div>
        <el-button v-if="flag" @click="gai()">编辑成功</el-button>
      </el-dialog>
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="bjm" label="班级名" width="150"></el-table-column>
        <el-table-column prop="kcm" label="课程名" width="140"></el-table-column>
        <el-table-column prop="jsh" label="教室号" width="140"></el-table-column>
        <el-table-column fixed="right" label="操作" width="140">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  created() {
    this.getbjlist();
  },
  methods: {
    onSubmit() {
      //增加
      this.axios
        .post("/api/addbjlist", {
          bjm: this.form.bjm,
          kcm: this.form.kcm,
          jsh: this.form.jsh
        })
        .then(res => {
          if (res.data.code == 1) {
            this.getbjlist();
          }
        });
      this.flag = false;
      this.centerDialogVisible = false;
    },
    gai() {
      const data = {
        bjm: this.form.bjm,
        kcm: this.form.kcm,
        jsh: this.form.jsh,
        id: this.bianid
      };
      this.axios.post("/api/editbjlist", { data }).then(res => {
        if (res.data.code == 1) {
          this.getbjlist();
        }
        this.centerDialogVisible = false;
      });
    },
    edit(row) {
      //编辑
      this.centerDialogVisible = true;
      this.flag = true;
      this.aa = false;
      this.bianid = row.id;
    },
    handleClick(row) {
      //删除
      this.axios.post("/api/delbjlist", { id: row.id }).then(res => {
        if (res.data.code == 1) {
          this.getbjlist();
        }
      });
    },
    getbjlist() {
      //获取
      this.axios.get("/api/getbjlist").then(res => {
        this.tableData = res.data.result;
      });
    }
  },
  data() {
    return {
      tableData: [],
      centerDialogVisible: false,
      form: {
        bjm: "",
        kcm: "",
        jsh: ""
      },
      flag: false,
      aa: false,
      bianid: {}
    };
  }
};
</script>

<style>
</style>