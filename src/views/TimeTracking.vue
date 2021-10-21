<template>
	<div>
		<v-toolbar flat color="primary" dark dense class="py-0 pr-0" height="40px;">
			<v-tabs v-model="currentItem" hide-slider>
				<v-tab v-for="item in items" :key="item" :href="'#tab-' + item">
					{{ item }}
				</v-tab>

				<v-menu v-if="more.length" bottom left>
					<template v-slot:activator="{ on, attrs }">
						<v-btn text class="align-self-center mr-4" v-bind="attrs" v-on="on">
							More
							<v-icon right>
								mdi-menu-down
							</v-icon>
						</v-btn>
					</template>

					<v-list tile dense>
						<v-list-item
							v-for="item in more"
							:key="item"
							@click="addItem(item)"
						>
							{{ item }}
						</v-list-item>
					</v-list>
				</v-menu>
			</v-tabs>

			<v-spacer></v-spacer>
			<v-sheet
				color="success darken-2"
				dark
				elevation="0"
				height="40px"
				width="100"
				class="pa-2"
				>TeamMate+</v-sheet
			>
		</v-toolbar>
		<v-container>
			<v-row>
				<v-col v-for="item in timesheet" :key="item">
					<v-card outlined>
						<v-card-text class="text-center">
							<div class="subtitle">{{ item.text }}</div>
							<div class="body-2">{{ item.content }}</div>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	data: () => ({
		currentItem: 'tab-Web',
		items: ['News', 'Maps', 'Books', 'Flights', 'Apps'],
		timesheet: [
			{ text: 'Resource', content: 'Lina Herrera' },
			{ text: 'Open Timesheets', content: '0' },
			{ text: 'Workflow State', content: 'In Progress' },
			{ text: 'Due Date', content: '10/30/2021' },
			{ text: 'Weekly Total Hours', content: '40' },
		],
		more: ['News', 'Maps', 'Books', 'Flights', 'Apps'],
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	}),

	methods: {
		// addItem(item) {
		// 	const removed = this.items.splice(0, 1)
		// 	this.items.push(...this.more.splice(this.more.indexOf(item), 1))
		// 	this.more.push(...removed)
		// 	this.$nextTick(() => {
		// 		this.currentItem = 'tab-' + item
		// 	})
		// },
	},
};
</script>
<style></style>
