import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
// import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		// route level code-splitting
		// this generates a separate chunk (dashboard.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
	},
	{
		path: '/timetracking',
		name: 'Time Tracking',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "timetracking" */ '../views/TimeTracking.vue'
			),
	},
	{
		path: '/icons',
		name: 'Icons',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "icons" */ '../views/Icons.vue'),
	},
	{
		path: '/agileaudit',
		name: 'AgileAudit',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "AgileAudit" */ '../views/AgileAudit.vue'),
	},
	{
		path: '/assessment',
		name: 'Assessment',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "Assessment" */ '../views/Assessment.vue'),
	},
	{
		path: '/setup',
		name: 'Setup',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "setup" */ '../views/Setup.vue'),
	},
	{
		path: '/userpermissions',
		name: 'User Permissions',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "Assessment" */ '../views/UserPermissions.vue'
			),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
