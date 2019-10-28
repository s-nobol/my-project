import Vue from 'vue'
import Router from 'vue-router'


// view
import main from './pages/Main.vue'
import page1 from './pages/Page1.vue'
import page2 from './pages/Page2.vue'
// import HelloWorld from './components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          component: main
        },
        {
          path: '/page1',
          component: page1
        },
        {
          path: '/page2',
          component: page2
        }
    ],
    
    base: process.env.BASE_URL,  // これ
    mode: 'history', // ★ 追加
})