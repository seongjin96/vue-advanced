import { createWebHistory, createRouter } from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView.js';
import bus from "@/utils/bus";
import { store } from '@/store/index'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      // path: url 주소
      path: '/news',
      name: 'news',
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: NewsView,
      // component: createListView('NewsView'),

      /*
        to: 이동할 URL의 라우팅 정보
        from: 현재 URL의 라우팅 정보
      */
      beforeEnter: (to, from, next) => {
        bus.emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
            .then(() => {
              bus.emit('end:spinner');
              next();
            })
            .catch((error) => {
              console.log(error);
            });
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: createListView('AskView'),
      beforeEnter: (to, from, next) => {
        bus.emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
            .then(() => {
              // bus.emit('end:spinner');
              next();
            })
            .catch((error) => {
              console.log(error);
            });
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: createListView('JobsView'),
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ]
});
