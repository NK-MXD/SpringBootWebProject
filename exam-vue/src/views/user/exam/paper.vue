<template>

  <div>

    <el-card v-for="item in paperList" style="margin-bottom: 10px; line-height: 30px;">

      <el-row :gutter="20">
        <el-col :span="12">
          考试时间：{{ item.createTime }}
        </el-col>

        <el-col :span="12">
          考试用时：{{ item.userTime }}分钟
        </el-col>

        <el-col :span="12">
          客观得分：{{ item.userScore }}
        </el-col>

        <el-col :span="12">
          主观得分：{{ item.userScore }}
        </el-col>

        <el-col :span="12">
          考试得分：{{ item.userScore }}
        </el-col>

        <el-col :span="12">
          是否合格：{{ item.userScore > item.qualifyScore ?'是':'否' }}
        </el-col>

        <el-col :span="12">
          考试状态：{{ item.state | paperStateFilter }}
        </el-col>
         <!-- 这里添加一个查看考试卷子的跳转 -->
    <!-- this.$router.push({ name: 'ShowExam', params: { id: this.paperId }}) -->
      <!-- <el-button type="info" @click="onCancel">返回</el-button> -->
      <!-- 如果没有批改卷子的话显示, 如果已经批改卷子的话就不显示 -->

        <el-button type="primary" size="mini" icon="el-icon-view" @click="handleExamDetail(item.id)">试卷详情</el-button>
        <el-button type="primary" size="mini" icon="el-icon-edit" @click="handleExamDetail(item.id)">进行批改</el-button>
      </el-row>
      
    </el-card>

  </div>

</template>

<script>

import { listPaper } from '@/api/paper/paper'

export default {

  name: 'UserPaperList',
  props: {
    examId: {
      type: String,
      default: ''
    },
    userId: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      value1: null,
      paperList: []
    }
  },

  watch: {

    // 检测查询变化
    examId: {
      handler() {
        this.fetchPaperList()
      },
      deep: true
    },

    // 检测查询变化
    userId: {
      handler() {
        this.fetchPaperList()
      },
      deep: true
    }
  },

  created() {
    this.fetchPaperList()
  },
  methods: {

    fetchPaperList() {
      listPaper(this.userId, this.examId).then(response => {
        this.paperList = response.data.records
      })
    },
    handleExamDetail(paperId) {
      this.paperId = paperId
      this.$router.push({ name: 'ShowExam', params: { id: this.paperId }})
    }
  }
}
</script>
