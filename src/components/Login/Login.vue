<template>
  <div class="login">

    <div class="password">
      <el-input  placeholder="input your github personal access tokens" prefix-icon="el-icon-lock" v-model="token"></el-input>
    </div>
    <div class="login">
      <el-button type="primary" @click="login">登录</el-button>
      <el-link type="primary" href="https://github.com/settings/tokens/new">去生成tokens</el-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      token:''
    };
  },
  methods: {
    login() {
      //let token = "1b471406b34c73d3992ddb547735de5ae2e641ba";
      this.$store.commit("SET_TOKEN", this.token);
      this.$router.push({
        path: "/"
      });
    }
  },
  components: {}
};
</script>
<style lang="stylus" scoped>
div {
  margin: 2px;
}
</style>
