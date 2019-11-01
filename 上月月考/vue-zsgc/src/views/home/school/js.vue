<template>
  <div>
    <div>
      <el-button type="primary" @click="centerDialogVisible = true">✚添加教室</el-button>
      <el-dialog title="添加教室" :visible.sync="centerDialogVisible" width="30%" center>
        <div>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="教师号">
              <el-input v-model="form.jsh"></el-input>
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
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="jsh" label="教室号" width="150"></el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="40"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.getjslist();
    this.fenye();
  },

  methods: {
    handleSizeChange(val) {
      val;
    },
    handleCurrentChange(val) {
      val;
      const fen = val;
      this.fenye(fen);
    },
    fenye(fen = 0) {
      this.axios.post("/api/fenjslist", { fen }).then(res => {
        this.tableData = res.data.result;
      });
    },
    getjslist() {
      this.axios.get("/api/getjslist").then(res => {
        this.tableData = res.data.result;
      });
    },
    onSubmit() {
      console.log("submit!");
      this.centerDialogVisible = false;
      this.axios
        .post("/api/addjslist", {
          jsh: this.form.jsh
        })
        .then(res => {
          if (res.data.code == 1) {
            this.getjslist();
          }
        });
    },
    deleteRow(index, rows) {
      const id = rows[index].id;
      this.axios.post("/api/deljslist", { id }).then(res => {
        if (res.data.code == 1) {
          this.getjslist();
        }
      });
    }
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [],
      form: {
        jsh: ""
      },
      centerDialogVisible: false
    };
  }
};
</script>
<style>
</style>