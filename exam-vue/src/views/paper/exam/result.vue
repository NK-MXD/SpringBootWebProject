<template>
  <div class="app-container">

    <h2 class="text-center">{{ paperData.title }}</h2>
    <p class="text-center" style="color: #666">{{ paperData.createTime }}</p>

    <el-row :gutter="24" style="margin-top: 50px">

      <el-col :span="8" class="text-center">
        考生姓名：{{ paperData.userId_dictText }}
      </el-col>

      <el-col :span="8" class="text-center">
        考试用时：{{ paperData.userTime }}分钟
      </el-col>

      <el-col :span="8" class="text-center">
        考试得分：{{ paperData.userScore }}
      </el-col>

    </el-row>

    <el-card style="margin-top: 20px">

      <div v-for="item in paperData.quList" :key="item.id" class="qu-content">

        <p>{{ item.sort + 1 }}.{{ item.content }}（得分：{{ item.actualScore }}）</p>
        <p v-if="item.image!=null && item.image!=''">
          <el-image :src="item.image" style="max-width:100%;" />
        </p>

        <div v-if="item.quType === 1 || item.quType===3">
          <el-radio-group v-model="radioValues[item.id]">
            <el-radio v-for="an in item.answerList" :label="an.id">
              {{ an.abc }}.{{ an.content }}
              <div v-if="an.image!=null && an.image!=''" style="clear: both">
                <el-image :src="an.image" style="max-width:100%;" />
              </div>
            </el-radio>
          </el-radio-group>

          <el-row :gutter="24">

            <el-col :span="12" style="color: #24da70">
              正确答案：{{ radioRights[item.id] }}
            </el-col>

            <el-col v-if="!item.answered" :span="12" style="text-align: right; color: #ff0000;">
              答题结果：未答
            </el-col>

            <el-col v-if="item.answered && !item.isRight" :span="12" style="text-align: right; color: #ff0000;">
              答题结果：{{ myRadio[item.id] }}
            </el-col>

            <el-col v-if="item.answered && item.isRight" :span="12" style="text-align: right; color: #24da70;">
              答题结果：{{ myRadio[item.id] }}
            </el-col>

            <el-col v-if="item.answered && item.isRight" style="text-align: right; color: #24da70;">
              得分： 
              <el-input-number v-model="item.actualScore" :min="0" :max="item.score" @change="saveScore(item)"></el-input-number>
            </el-col>

            <el-col v-if="!item.answered || (item.answered && !item.isRight)" style="text-align: right; color: #ff0000;">
              得分： 
              <el-input-number v-model="item.actualScore" :min="0" :max="item.score" @change="saveScore(item)"></el-input-number>
            </el-col>

          </el-row>

        </div>

        <div v-if="item.quType === 4">

          <el-row :gutter="24">

            <el-col :span="12">
              我的回答：{{ item.answer }}
            </el-col>
            
            <p>
            </p>
            <el-col style="color: #24da70">
              参考答案：
            </el-col>

            <el-col style="text-align: right; color: #24da70;">
              得分： 
              <el-input-number v-model="item.actualScore" :min="0" :max="item.score"></el-input-number>
            </el-col>

          </el-row>

        </div>

        <div v-if="item.quType === 2">
          <el-checkbox-group v-model="multiValues[item.id]">
            <el-checkbox v-for="an in item.answerList" :key="an.id" :label="an.id">{{ an.abc }}.{{ an.content }}
              <div v-if="an.image!=null && an.image!=''" style="clear: both">
                <el-image :src="an.image" style="max-width:100%;" />
              </div>
            </el-checkbox>
          </el-checkbox-group>

          <el-row :gutter="24">

            <el-col :span="12" style="color: #24da70">
              正确答案：{{ multiRights[item.id].join(',') }}
            </el-col>

            <el-col v-if="!item.answered" :span="12" style="text-align: right; color: #ff0000;">
              答题结果：未答
            </el-col>

            <el-col v-if="item.answered && !item.isRight" :span="12" style="text-align: right; color: #ff0000;">
              答题结果：{{ myMulti[item.id].join(',') }}
            </el-col>

            <el-col v-if="item.answered && item.isRight" :span="12" style="text-align: right; color: #24da70;">
              答题结果：{{ myMulti[item.id].join(',') }}
            </el-col>

            <el-col v-if="item.answered && item.isRight" style="text-align: right; color: #24da70;">
              得分： 
              <el-input-number v-model="item.actualScore" :min="0" :max="item.score" @change="saveScore(item)"></el-input-number>
            </el-col>

            <el-col v-if="!item.answered || (item.answered && !item.isRight)" style="text-align: right; color: #ff0000;">
              得分： 
              <el-input-number v-model="item.actualScore" :min="0" :max="item.score" @change="saveScore(item)"></el-input-number>
            </el-col>

          </el-row>
        </div>
      </div>

    </el-card>

  </div>
</template>

<script>

import { paperResult } from '@/api/paper/exam'
import { ChangeScore } from '@/api/paper/exam'
import { ChangeUserScore } from '@/api/paper/exam'

export default {
  data() {
    return {
      // 试卷ID
      paperId: '',
      paperData: {
        quList: []
      },
      radioValues: {},
      multiValues: {},
      radioRights: {},
      multiRights: {},
      myRadio: {},
      myMulti: {},
      textarea: {},
      trueAnswer: {}
    }
  },
  created() {
    const id = this.$route.params.id
    if (typeof id !== 'undefined') {
      this.paperId = id
      this.fetchData(id)
    }
  },
  methods: {

    fetchData(id) {
      const params = { id: id }
      paperResult(params).then(response => {
        // 试卷内容
        this.paperData = response.data

        // 填充该题目的答案
        this.paperData.quList.forEach((item) => {
          let radioValue = ''
          let radioRight = ''
          let myRadio = ''
          let textarea = ''
          const multiValue = []
          const multiRight = []
          const myMulti = []
          const trueAnswer = []

          item.answerList.forEach((an) => {
            // 用户选定的
            if (an.checked) {
              if (item.quType === 1 || item.quType === 3) {
                radioValue = an.id
                myRadio = an.abc
              } else {
                multiValue.push(an.id)
                myMulti.push(an.abc)
              }
            }

            // 正确答案
            if (an.isRight) {
              if (item.quType === 1 || item.quType === 3) {
                radioRight = an.abc
              } else {
                multiRight.push(an.abc)
              }
            }

            if (item.quType === 4){
              textarea = an.content
            }
          })

          this.multiValues[item.id] = multiValue
          this.radioValues[item.id] = radioValue

          this.radioRights[item.id] = radioRight
          this.multiRights[item.id] = multiRight

          this.myRadio[item.id] = myRadio
          this.myMulti[item.id] = myMulti
          this.trueAnswer[item.id] = textarea
        })

        console.log(this.multiValues)
        console.log(this.radioValues)
      })
    },

    saveScore(item) {
      const data = {
        actualScore: item.actualScore,
        answer: item.answer,
        answered: item.answered,
        id: item.id,
        isRight: item.isRight,
        paperId: item.paperId,
        quId: item.quId,
        quType: item.quType,
        score: item.score,
        sort: item.sort,
      }
      ChangeScore(data).then(response => {
        // paperData.userScore = 100
        console.log(data)
        console.log(response)
        this.updateUserScore()
      }).catch(error => {
        console.log(error)
      })
    },
    updateUserScore() {
      // 计算用户得分
      let userScore = 0
      this.paperData.quList.forEach((item) => {
        userScore += item.actualScore
      })
      this.paperData.userScore = userScore
      this.saveUserScore(this.paperData)
    },

    saveUserScore(paperData) {
      const data = {
        createTime: paperData.createTime,
        departId: paperData.departId,
        examId: paperData.examId,
        hasText: paperData.hasText,
        id: paperData.id,
        limitTime: paperData.limitTime,
        objScore: paperData.objScore,
        qualifyScore: paperData.qualifyScore,
        state: paperData.state,
        subjScore: paperData.subjScore,
        title: paperData.title,
        totalScore: paperData.totalScore,
        totalTime: paperData.totalTime,
        updateTime: paperData.updateTime,
        userId: paperData.userId,
        userScore: paperData.userScore,
        userTime: paperData.userTime
      }
      ChangeUserScore(data).then(response => {
        // paperData.userScore = 100
        console.log(data)
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },

  }
}
</script>

<style scoped>

  .qu-content{

    border-bottom: #eee 1px solid;
    padding-bottom: 10px;

  }

  .qu-content div{
    line-height: 30px;
  }

  .el-checkbox-group label,.el-radio-group label{
    width: 100%;
  }

  .card-title{
    background: #eee;
    line-height: 35px;
    text-align: center;
    font-size: 14px;
  }
  .card-line{
    padding-left: 10px
  }
  .card-line span {
    cursor: pointer;
    margin: 2px;
  }

</style>

