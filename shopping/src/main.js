import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import axios from 'axios'
//global function and variable
import Global from './Global'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(Global)
//axios
app.config.globalProperties.$axios = axios


// Global request interceptor
axios.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      router.push({ path: "/error" });
      return Promise.reject(error);
    }
  );
  
  // Global response interceptor
  axios.interceptors.response.use(
    res => {
      if (res.data.code === "401") {
        // Handle unauthorized access
        app.config.globalProperties.notifyError(res.data.msg);
        app.config.globalProperties.$store.dispatch("setShowLogin", true);
      }
      if (res.data.code === "500") {
        // Handle server error
        //jump to error page
        router.push({ path: "/error" });
      }
      return res;
    },
    error => {
      router.push({ path: "/error" });
      return Promise.reject(error);
    }
  );

// Global interceptor to check user authentication before navigating to protected routes
router.beforeResolve((to, from, next) => {
    let cookie = document.cookie.match(new RegExp("(^| )"+ "XM_TOKEN" +"=([^;]*)(;|$)"));
  
    if (to.meta.requireAuth) {
      if (!cookie) {
        app.config.globalProperties.$store.dispatch("setShowLogin", true);
        if (from.name == null) {
          next("/");
          return;
        }
        next(false);
        return;
      }
    }
  
    next();
  });

// Relative time filter
app.config.globalProperties.$filters = {
    dateFormat: (dataStr) => {
      var time = new Date(dataStr);
      function timeAdd0 (str) {
        if (str < 10) {
          str = '0' + str;
        }
        return str;
      }
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return y + '-' + timeAdd0(m) + '-' + timeAdd0(d) + ' ' + timeAdd0(h) + ':' + timeAdd0(mm) + ':' + timeAdd0(s);
    }
  }
  
// Global components
import MyMenu from './components/MyMenu'
import MyList from './components/MyList'
import MySeckillList from './components/MySeckillList'
import MyLogin from './components/MyLogin'
import MyRegister from './components/MyRegister'

app.component(MyMenu.name, MyMenu)
app.component(MyList.name, MyList)
app.component(MySeckillList.name, MySeckillList)
app.component(MyLogin.name, MyLogin)
app.component(MyRegister.name, MyRegister)


app.mount('#app')
