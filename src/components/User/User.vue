<template>
  <div class="user">User</div>
</template>
<script>
import axios from "api/config";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getRepository();
  },
  methods: {
    getRepository() {
      let params = {
        sort: "updated"
      };
      axios.get("/user/repos", params).then(response => {
        this.list = response.data;
      });
    }
  }
};
</script>