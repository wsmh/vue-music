import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/First-level/Login/index.vue'
import Layout from '@/views/First-level/Layout/index.vue'
import Explore from '@/views/Second-level/Explore/index.vue'
import Music from '@/views/Third-level/Music/index.vue'
import Book from '@/views/Third-level/example/Book.vue'
import Zhibo from '@/views/Third-level/example/Zhibo.vue'
import Player from '@/views/Third-level/example/Player.vue'
import Ranking from '@/views/Fourth-level/Ranking/index.vue'
import Selected from '@/views/Fourth-level//Selected/index.vue'
import Recommend from '@/views/Second-level/Recommend/index.vue'
import MusicListDetail from '@/views/Second-level/MusicListDetail/index.vue'
import MySpace from '@/views/Second-level/MySpace/index.vue'
import CommentPage from '@/components/CommentsPage/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      component: CommentPage,
      path: '/comments/:id'
    },
    {
      component: Login,
      path: '/login'
    }, {
      component: Layout,
      path: '/layout',
      redirect: '/layout/recommend',
      children: [{
        component: MusicListDetail,
        path: '/musiclist'
      }, {
        component: Explore,
        path: '/layout/explore',
        redirect: '/layout/explore/music/selected',
        children: [{
          component: Music,
          path: '/layout/explore/music',
          children: [{
            component: Selected,
            path: '/layout/explore/music/selected'
          }, {
            component: Ranking,
            path: '/layout/explore/music/ranking'
          }]
        }, {
          component: Player,
          path: '/layout/explore/player'
        }, {
          component: Book,
          path: '/layout/explore/book'
        }, {
          component: Zhibo,
          path: '/layout/explore/zhibo'
        }]
      }, {
        component: Recommend,
        path: '/layout/recommend'
      }, {
        component: MySpace,
        path: '/layout/myspace'
      }]
    },
  ]
})

export default router
