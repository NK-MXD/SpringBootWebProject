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

            <!-- <el-col v-if="item.answered && item.isRight" style="text-align: right; color: #24da70;">
              得分： 
              <el-input-number v-model="item.actualScore" :min="0" :max="item.score" @change="saveScore(item)"></el-input-number>
            </el-col>

            <el-col v-if="!item.answered || (item.answered && !item.isRight)" style="text-align: right; color: #ff0000;">
              得分： 
              <el-input-number v-model="item.actualScore" :min="0" :max="item.score" @change="saveScore(item)"></el-input-number>
            </el-col> -->

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
              Nowadays, more and more people are choosing to live an environmentally friendly lifestyle. This is due to the increasing awareness of the impact that human activities have on the environment. People are becoming more conscious of the need to reduce their carbon footprint and live more sustainably.

One of the ways in which people are choosing to live an environmentally friendly lifestyle is by reducing their use of plastic. Plastic is a major contributor to pollution, and it takes hundreds of years to decompose. People are now using reusable bags, water bottles, and straws to reduce their plastic consumption.

Another way in which people are living an environmentally friendly lifestyle is by using renewable energy sources. Solar panels and wind turbines are becoming more common, and people are using them to power their homes and businesses. This reduces the amount of fossil fuels that need to be burned, which in turn reduces greenhouse gas emissions.

People are also choosing to eat more plant-based diets, which are more sustainable and environmentally friendly than diets that are heavy in meat and dairy. Plant-based diets require less land, water, and other resources to produce, and they generate fewer greenhouse gas emissions.

In conclusion, living an environmentally friendly lifestyle is becoming increasingly important in today's world. By reducing our use of plastic, using renewable energy sources, and eating more plant-based diets, we can all do our part to protect the environment and create a more sustainable future.
            </el-col>

            <!-- <el-col style="text-align: right; color: #24da70;">
              得分： 
              <el-input-number v-model="item.actualScore" :min="0" :max="item.score"  @change="saveScore(item)"></el-input-number>
            </el-col> -->

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

            <!-- <el-col v-if="item.answered && item.isRight" style="text-align: right; color: #24da70;">
              得分： 
              <el-input-number v-model="item.actualScore" :min="0" :max="item.score" @change="saveScore(item)"></el-input-number>
            </el-col>

            <el-col v-if="!item.answered || (item.answered && !item.isRight)" style="text-align: right; color: #ff0000;">
              得分： 
              <el-input-number v-model="item.actualScore" :min="0" :max="item.score" @change="saveScore(item)"></el-input-number>
            </el-col> -->

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
        hasText: true,
        id: paperData.id,
        limitTime: paperData.limitTime,
        objScore: paperData.objScore,
        qualifyScore: paperData.qualifyScore,
        state: 2,
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

