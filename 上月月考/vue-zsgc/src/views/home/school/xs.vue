<template>
  <div>
    <div>
      <el-button type="primary" @click="centerDialogVisible = true">✚添加学生</el-button>
      <el-dialog title="添加学生" :visible.sync="centerDialogVisible" width="30%" center>
        <div>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名">
              <el-input v-model="form.xm"></el-input>
            </el-form-item>
            <el-form-item label="学号">
              <el-input v-model="form.xh"></el-input>
            </el-form-item>
            <el-form-item label="班级">
              <el-input v-model="form.bj"></el-input>
            </el-form-item>
            <el-form-item label="教室">
              <el-input v-model="form.js"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form.mm"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button @click="centerDialogVisible = false">取消</el-button>
              <el-button type="primary" @click="onSubmit">确定</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-form>
        <el-form-item>
          <el-input v-model="form.sea"></el-input>
          <el-button @click="sea" type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%" max-height="550">
        <el-table-column fixed prop="xm" label="姓名" width="150"></el-table-column>
        <el-table-column prop="xh" label="学号" width="120"></el-table-column>
        <el-table-column prop="bj" label="班级" width="120"></el-table-column>
        <el-table-column prop="js" label="教室" width="120"></el-table-column>
        <el-table-column prop="mm" label="密码" width="110"></el-table-column>
        <el-table-column fixed="right" label="操作" width="70">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { getxslist, delxslist } from "@/api/api";
export default {
  created() {
    this.getlist();
  },
  methods: {
    deleteRow(index, rows) {
      const id = rows[index].id;
      delxslist({ id }).then(res => {
        if (res.data.code == 1) {
          this.getlist();
        }
      });
    },
    getlist() {
      getxslist().then(res => {
        console.log(res);
        this.tableData = res.data.result;
      });
    },
    onSubmit() {
      this.centerDialogVisible = false;
      this.axios
        .post("/api/addxslist", {
          xm: this.form.xm,
          xh: this.form.xh,
          bj: this.form.bj,
          js: this.form.js,
          mm: this.form.mm
        })
        .then(res => {
          if (res.data.code == 1) {
            this.getlist();
          }
        });
    },
    sea() {
      const sea = this.form.sea;
      this.axios.post("/api/seaxslist", { sea }).then(res => {
        this.tableData = res.data.result;
      });
    }
  },
  data() {
    return {
      tableData: [],
      form: {
        xm: "",
        xh: "",
        bj: "",
        js: "",
        mm: "",
        sea: ""
      },
      centerDialogVisible: false
    };
  }
};
</script>
<style>
</style>