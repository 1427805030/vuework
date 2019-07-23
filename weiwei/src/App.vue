<template>
 <div id="app">
   <LunboDiv id="lunbo"></LunboDiv>
   <NavGuide id="nav"></NavGuide>
   <router-view id="content"></router-view>
 </div>
</template>

<script>
  import  NavGuide from './components/nav/NavGuide'
  import  LunboDiv from './components/lunbo/LuoboDiv'
  export default {
    components:{
      LunboDiv,
      NavGuide,
    }
  }
</script>

<style >

</style>
