<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20" style="display: flex;">

        <el-col :span="18" :xs="24" style="flex-grow: 1;">
          <user-card :user="user" />
        </el-col>

        <el-col :span="6" :xs="24" style="flex-grow: 1;">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="修改资料" name="account">
                <account :user="user" />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
        
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Account from './components/Account'

export default {
  name: 'Profile',
  components: { UserCard, Account },
  data() {
    return {
      user: {},
      activeTab: 'account'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles',
      'departId',
      'phone',
      'chnid'
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        role: this.roles.join(' | '),
        departId: this.departId,
        phone: this.phone,
        chnid: this.chnid,
        email: 'admin@test.com',
        avatar: this.avatar
      }
    }
  }
}
</script>
