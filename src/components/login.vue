<template>
    <div>
        <ul>
            <li>
                <span>账号</span>
                <input type="text">
            </li>
            <li>
                <span>密码</span>
                <input type="text">
            </li>
            <li>
                <a href="" @click.prevent="getGithub">github</a>
                <a href="">登陆</a>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  created() {
    // if (this.$route.query) {
    //     this.setToken();
    // } else {
    //     this.getToken();
    // }
    console.log(this.$route);
  },
  methods: {
    setToken() {
      window.localStorage.setItem("cnloop-info", this.$route.query);
    },
    getToken() {
      return window.localStorage.getItem("cnloop-info");
    },
    login(){
        if(!this.getToken()) return;

    },
    getGithub() {
      window.location.href =
        "https://github.com/login/oauth/authorize?client_id=8a98ceca42bdf7bd689e&redirect_uri=http://127.0.0.1:3000/login";
    }
  }
};
</script>
<style scoped>
div {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
ul {
  width: 400px;
  height: 200px;
  list-style: none;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
li {
  margin-top: 10px;
}
li:last-child {
  margin-top: 15px;
  width: 150px;
  display: flex;
  justify-content: space-between;
}
li span {
  margin-right: 20px;
}
li a {
  text-decoration: none;
  padding: 5px;
  border: 1px solid #ccc;
}
</style>
