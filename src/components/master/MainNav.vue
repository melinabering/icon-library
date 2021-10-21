<template>
	<div>
		<v-app-bar color="white" dense clipped-left app>
			<v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>

			<v-toolbar-title>TeamMate+</v-toolbar-title>
			<v-spacer></v-spacer>

			<v-btn class="ml-4" depressed text link>
				<v-icon class="mr-2" small>mdi-clock-outline</v-icon> History
			</v-btn>
			<v-btn class="ml-4" depressed text link>
				<v-icon class="mr-2" small>mdi-star-outline</v-icon> Favorites
			</v-btn>
			<v-btn class="ml-4" depressed text link>
				<v-icon class="mr-2" small>mdi-bell-outline</v-icon> Notifications
			</v-btn>
			<div class="d-flex">
				<span class="text-right">
					<div class="body-2 pb-0 mb-0">Melina Bering</div>
					<div class="caption pt-0 mt-0">UI Engineer</div>
				</span>
				<span
					style="position:relative; width:50px;  height:36px;"
					class="ml-4 mt-1"
				>
					<v-avatar style="position: absolute; left:0; " size="32">
						<img
							src="https://media-exp1.licdn.com/dms/image/C4E03AQFUou3Ffb0ZMg/profile-displayphoto-shrink_800_800/0/1600987587203?e=1639008000&v=beta&t=siGNFAobxwG6AcJv-NkfgUbXuGrLrCqninszwCY36ZQ"
							alt="John"
						/>
					</v-avatar>
					<v-avatar
						style="position: absolute; right:0; top:3px; border:2px solid white"
						color="warning darken-1"
						size="26"
					>
						<span class="white--text caption text-center">MB</span>
					</v-avatar>
				</span>
			</div>
		</v-app-bar>
		<v-navigation-drawer
			v-model="drawer"
			clipped
			app
			class="main"
			:mini-variant.sync="mini"
			permanent
		>
			<v-list dense>
				<v-list-item-group v-model="selectedItem" color="primary">
					<v-list-item
						v-for="item in items"
						:key="item.title"
						link
						:to="item.to"
						@click="drawer = !drawer"
					>
						<v-list-item-icon>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-icon>

						<v-list-item-content>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
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
				// { title: 'Setup', icon: 'mdi-tools', to: '/setup' },
				{ title: 'Setup', icon: 'mdi-tools', to: '/setup' },

				{ title: 'Agile Audit', icon: 'mdi-tools', to: '/agileaudit' },
				{
					title: 'User Permissions',
					icon: 'mdi-tools',
					to: '/userpermissions',
				},
			],
			right: null,
			drawer: false,
			mini: true,
		};
	},
});
</script>

<style></style>
