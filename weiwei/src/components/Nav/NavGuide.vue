<template>
  <div id="nav">
    <div class="guide">
      <div class="logo">
        <img v-bind:src="ImgUrl" alt="加载中..."/>
      </div>
      <li>
        <span  v-bind:class="{on:'/miste'===$route.path}" @click="goTo('/miste')">首页</span>
      </li>
      <li>
        <span v-bind:class="{on:'/fenlei'===$route.path}" @click="goTo('/fenlei')">版块</span>
      </li>
      <li>
        <span  v-bind:class="{on:'/banzhu'===$route.path}" @click="goTo('/banzhu')">版主</span>
      </li>
      <li>
        <span  v-bind:class="{on:'/zhutie'===$route.path}" @click="goTo('/zhutie')">主帖</span>
      </li>
      <li>
        <span  v-bind:class="{on:'/houtai'===$route.path}" @click="goTo('/houtai')">后台</span>
      </li>
      <li>
        <span  v-bind:class="{on:'/profile'===$route.path}" @click="goTo('/profile')">个人</span>
      </li>
      <li>
        <span  v-bind:class="{on:'/login'===$route.path}" @click="goTo('/login')">登陆</span>
      </li>
      <div class="soso">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select" >
          <el-button slot="append" icon="el-icon-search">
            <apan v-bind:class="{on:'/search'===$route.path}" @click="goTo('/search')"> 搜索</apan>
          </el-button>
        </el-input>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
      data() {
        return {
          ImgUrl: '../static/img/3.jpg',
          input: '',
          select: ''
        }
      },
      methods:{
        goTo(path)
        {
          this.$router.replace(path)
        }
      }
  }
</script>

<style lang="less">
  #nav{
    position: relative;
    background-color: white;
    .guide{
      float: left;
      height: 80px;
      .logo{
        margin-left: 10px;
        float: left;
        img{
          width: 110px;
          height: 80px;
        }
      }
      li{
        width: 70px;
        height: 80px;
        font-family: 宋体;
        font-size: 30px;
        text-align: center;
        list-style-type: none;
        float: left;
        padding-left: 20px;
        padding-right: 20px;
        span{
          width: 100px;
          height: 60px;
          text-align: center;
          color:black;
          display: block;
          padding-top: 20px;
          transition: 1s;
          &:hover{
            background: rgb(0,0,0,2);
            color:white;
          }
        }
      }
      .soso{
        position: relative;
        float:left;
        width: 340px;
        height: 80px;
        margin-left:20px;
        background-color:white ;
        .input-with-select {
          width: 300px;
          float: left;
          margin-top: 20px;
          margin-left: 20px;
          background-color: #fff;
        }
        .el-input__inner{
          border-color: #3a8ee6;
          font-size:18px;
          font-family: 宋体;
          color: black;
        }
        .el-input{
          font-family: 宋体;
          font-size: 18px;
        }
      }
    }
  }
</style>
