/*
* 导入路由对象模块
*/
import  Vue from 'vue'
import  router from 'vue-router'

import Banzhu from '../pages/Main/Banzhu/banzhu'
import Fenlei from '../pages/Main/Fenlei/fenlei'
import Login from '../pages/Main/Login/login'
import Miste from '../pages/Main/Miste/miste'
import Profile from '../pages/Main/Profile/profile'
import Search from '../pages/Main/Search/search'
import Zhutie from '../pages/Main/Zhutie/zhutie'
import Houtai from '../pages/Main/Houtai/houtai'

Vue.use(router)

export  default new router({
  routes:[
    { path:'/banzhu',
      component:Banzhu
    },
    { path:'/fenlei',
      component:Fenlei
    },
    { path:'/login',
      component:Login
    },
    { path:'/miste',
      component:Miste
    },
    { path:'/profile',
      component:Profile
    },
    { path:'/search',
      component:Search
    },
    { path:'/zhutie',
      component:Zhutie
    },
    { path:'/houtai',
      component:Houtai
    },
    {
      path:'/',
      redirect:'/miste'
    }
  ]
})
