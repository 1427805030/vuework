<template>
  <div id="content">
    <div class="login">
      <div class="denglu">
        <el-tabs type="border-card">
          <el-tab-pane label="用户注册">
            <div class="zhuce">
              <form class="from">
                用户名<input type="text" name="username"/><br />
                密码<input type="password" name="password" /><br />
                重复密码<input type="password" name="repassword"/><br />
                邮箱<input type="email" name="email"/><br />
                手机号码 <input type="text" name="phone"/><br/>
                生日<input type="text" name="birthday" /><br />
                性别<input type="radio" name="sex" value="true"/>男<input type="radio" name="sex" value="false"/>女<br/>
                <input type="submit"  value="提交"/>&nbsp
                <input type="reset" value="重置">
              </form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="短信登陆">
            <div>

            </div>
          </el-tab-pane>
          <el-tab-pane label="密码登陆">
            <div>

            </div>
          </el-tab-pane>
          <el-tab-pane label="扫码登陆">
            <div>

            </div>
          </el-tab-pane>
          <div class="society">
            <a href="#">微信登陆</a>
            <a href="#">QQ登陆</a>
          </div>
        </el-tabs>
      </div>
    </div>
    <div class="footer">
      footer
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less">
  #content{
    .login{
      margin-top: -10px;
      position: relative;
      height: 1080px;
      background: url("../Login/img/login.jpg");
      .denglu{
        width: 600px;
        height: 500px;
        margin-left: 700px;
        padding-top: 240px;
        .el-tabs--border-card{
          margin-left: 50px ;
          width: 388px;
          height:500px ;
          .el-tabs--border-card>.el-tabs__header{
            background-color:#000000;
            opacity: 0.2;
          }
          .el-tabs__header{
            height: 40px;
            width: 388px;
          }
          .el-tabs__content{
            height: 500px;
          }
          .el-tabs--border-card>.el-tabs__content{
            background-color:#000000;
            opacity: 0.2;
          }
          .el-tab-pane{
            height: 350px;
          }
          .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
          }
        }
        .society{
          a{
            text-decoration: none;
            display: block;
            padding-left:10px;
            padding-right: 10px;
            margin-left:30px ;
            padding-top: 10px;
            width: 90px;
            height: 30px;
            text-align: center;
            float: left;
          }
        }
      }
    }
    .footer{
      width: 100%;
      height: 200px;
      color: aliceblue;
      font-size: 15px;
      background-color: black;
    }
    }

</style>
