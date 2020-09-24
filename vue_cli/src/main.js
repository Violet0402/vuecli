// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from "axios";

/*安装axios  npm install axios --save-dev*/
Vue.config.productionTip = false
Vue.prototype.$http=axios;
Vue.use(ElementUI);
/*配置好以后，就直接在需要请求的地方发送(this.$http.get("url").then((res) =>{}))*/

/*安装element-ui    npm i element-ui -S*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
