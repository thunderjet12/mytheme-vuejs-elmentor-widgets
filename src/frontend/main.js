import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


// import '../assets/less/style.less';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';


UIkit.use(Icons);


var UI = UIkit.util;

UI.ready(function() {

    UI.removeClass(UI.$('body'), 'invisible');

});


/* eslint-disable no-new */
new Vue({
  el: '#vue-frontend-app',
  router,
  render: h => h(App)
})
