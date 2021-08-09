<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" clipped app>
			<v-list dense nav>
				<v-list-item v-for="item in items" :key="item.title" link :to="item.to">
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar color="primary" dark dense clipped-left app>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-toolbar-title>TeamMate+</v-toolbar-title>
			<v-spacer></v-spacer>
			icon
		</v-app-bar>

		<v-main>
			<!-- Content here -->
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

//
<script lang="ts">
export default {
	data() {
		return {
			items: [
				{ title: 'My Home', icon: 'mdi-home-outline', to: '/home' },
				{
					title: 'Dashboard',
					icon: 'mdi-view-dashboard-outline',
					to: '/dashboard',
				},
				{
					title: 'Assessment',
					icon: 'mdi-clipboard-outline',
					to: '/assessment',
				},
				{
					title: 'Audit Plan',
					icon: 'mdi-clipboard-outline',
					to: '/auditplan',
				},
				{ title: 'Project', icon: 'mdi-clipboard-outline', to: '/project' },
				{
					title: 'Time Tracking',
					icon: 'mdi-clock-outline',
					to: '/timetracking',
				},
				{
					title: 'Notifications',
					icon: 'mdi-bell-outline',
					to: '/notifications',
				},
				{ title: 'My Schedule', icon: 'mdi-calendar', to: '/myschedule' },
				{
					title: 'Self-Assessment',
					icon: 'mdi-account-outline',
					to: '/selfassessment',
				},
				{ title: 'Survey', icon: 'mdi-list', to: '/survey' },
				{
					title: 'Audit Report',
					icon: 'mdi-view-dashboard',
					to: '/auditreport',
				},
				{
					title: 'Response Tracking',
					icon: 'mdi-alert-circle-outline',
					to: '/responsetracking',
				},
				{
					title: 'Issue Tracking',
					icon: 'mdi-alert-outline',
					to: '/issuetracking',
				},
				{
					title: 'TeamInsights Reports',
					icon: 'mdi-note-outline',
					to: '/temainsightreports',
				},
				{ title: 'TeamStore', icon: 'mdi-store-outline', to: '/teamstore' },
				{ title: 'Setup', icon: 'mdi-tools', to: '/setup' },
				{ title: 'Icons', icon: 'mdi-tools', to: '/icons' },
			],
			right: null,
			drawer: null,
		}
	},
}
</script>
