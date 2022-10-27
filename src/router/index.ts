import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import RegisterView from '@/views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';
import VerifyEmailView from '@/views/VerifyEmailView.vue';
import ProfileViewVue from '@/views/ProfileView.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeView,
  },
  {
    name: 'register',
    path: '/register',
    component: RegisterView,
  },
  {
    name: 'login',
    path: '/login',
    component: LoginView,
  },
  {
    name: 'verifyemail',
    path: '/verifyemail',
    component: VerifyEmailView,
    children: [
      {
        name: 'verifyemail',
        path: ':verificationCode',
        component: VerifyEmailView,
      },
    ],
  },
  {
    name: 'profile',
    path: '/profile',
    component: ProfileViewVue,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
