<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>个人资料</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb :image="user.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
          <div>欢迎</div>
          {{ user.role }}
        </pan-thumb>
      </div>
      <div class="box-center">
        <div class="user-name text-center">姓名：{{ user.name }}</div>
        <div class="user-name text-center">学校：{{ user.departId }}</div>
        <div class="user-name text-center">电话号码：{{ user.phone }}</div>
        <div class="user-name text-center">身份证号：{{ user.chnid }}</div>
        <!-- <div class="user-role text-center text-muted">{{ user.role | uppercaseFirst }}</div> -->
      </div>
    </div>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'
import { getDetail } from '@/api/user'

export default {
  components: { PanThumb },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          avatar: '',
          roles: '',
          departId: '',
          phone: '',
          chnid: '',
        }
      }
    }
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      const data = {
        chnid: this.user.chnid,
        createTime: '',
        departId: this.user.departId,
        id: '',
        password: '',
        phone: this.user.phone,
        realName: '',
        roleIds: '',
        salt: '',
        state: 0,
        updateTime: '',
        userName: '',
        username: this.user.name
      }

      getDetail(data).then(response => {
        const userData = response.data;
        this.user.name = userData.realName;
        this.user.departId = userData.departId;
        this.user.phone = userData.phone;
        this.user.chnid = userData.chnid;
        this.user.role = userData.roleName;
        console.log('dsdsjidjwi'+userData);
      }).catch(error => {
        console.error(error);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-role {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
