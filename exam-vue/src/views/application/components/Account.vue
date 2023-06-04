<template>
  <div>
  <el-form>
    <el-form-item label="真实姓名">
      <el-input v-model.trim="user.realName" readonly />
    </el-form-item>
    <!-- <el-form-item label="密码">
      <el-input v-model.trim="user.password" type="password" placeholder="不修改请留空" />
    </el-form-item> -->
    <el-form-item label="部门">
      <el-input v-model.trim="user.departId"  placeholder="不修改请留空" />
    </el-form-item>
    <el-form-item label="手机号码">
      <el-input v-model.trim="user.phone"  placeholder="不修改请留空" />
    </el-form-item>
    <el-form-item label="身份证号">
      <el-input v-model.trim="user.chnid"  placeholder="不修改请留空" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">报名</el-button>
    </el-form-item>
  </el-form>
  <el-dialog :visible="showModal" @close="closeModal" width="50%">
      <div class="popup-content">
        <div class="popup-text">请扫描二维码，进行支付</div>
        <img :src="imageUrl" alt="弹出的图片" class="popup-image">
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { updateData } from '@/api/sys/user/user'
import { getDetail } from '@/api/user'

export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: 'person',
          email: '',
          avatar: '',
          roles: '',
          password: '',
          departId: '',
          phone: '',
          chnid: '',
        }
      }
    },
    // dialogVisible: false,
  },
  data() {
    return {
      showModal: false, // 控制弹窗显示
      imageUrl: 'https://image-1305894911.cos.ap-beijing.myqcloud.com/Obsidian/202306040958010.jpg' // 图片 URL
    }
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },

    async submit() {
      updateData(this.user).then(() => {
        this.$notify({
          title: '成功',
          message: '用户资料保存成功！！',
          type: 'success',
          duration: 2000
        })
        this.showModal = true; // 显示弹窗
      })
    },
    closeModal() {
      this.showModal = false; // 关闭弹窗
      this.$notify({
          title: '成功',
          message: '报名成功！！',
          type: 'success',
          duration: 2000
        })
        this.showModal = false; // 显示弹窗
    },
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
        this.user.realName = userData.realName;
        this.user.name = userData.username;
        this.user.departId = userData.departId;
        this.user.phone = userData.phone;
        this.user.chnid = userData.chnid;
        this.user.role = userData.roleName;
        console.log('dsdsjidjwi'+userData);
        console.log(data);
        // console.log(this.user.name);
      }).catch(error => {
        console.log(data);
        console.error(error);
      });
    }
  }
}
</script>

<style>
.popup-content {
  text-align: center;
}

.popup-text {
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
}

.popup-image {
  width: 50%; /* 设置图片的宽度 */
  height: auto; /* 自动调整高度以保持原始比例 */
}
</style>
