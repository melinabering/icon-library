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
		<v-container fluid>
			<v-text-field
				v-model="search"
				append-icon="mdi-magnify"
				label="Search"
				outlined
				dense
				hide-details
			></v-text-field>
			<v-data-table
				dense
				:headers="headers"
				:items="desserts"
				:search="search"
				:items-per-page="20"
				class="elevation-0"
			></v-data-table>
		</v-container>
	</div>
</template>

<script>
export default {
	data: () => ({
		search: '',
		headers: [
			{
				text: 'Dessert (100g serving)',
				align: 'start',
				sortable: false,
				value: 'name',
			},
			{ text: 'Calories', value: 'calories' },
			{ text: 'Fat (g)', value: 'fat' },
			{ text: 'Carbs (g)', value: 'carbs' },
			{ text: 'Protein (g)', value: 'protein' },
			{ text: 'Iron (%)', value: 'iron' },
		],
		desserts: [
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Ice cream sandwich',
				calories: 237,
				fat: 9.0,
				carbs: 37,
				protein: 4.3,
				iron: '1%',
			},
			{
				name: 'Eclair',
				calories: 262,
				fat: 16.0,
				carbs: 23,
				protein: 6.0,
				iron: '7%',
			},
			{
				name: 'Cupcake',
				calories: 305,
				fat: 3.7,
				carbs: 67,
				protein: 4.3,
				iron: '8%',
			},
			{
				name: 'Gingerbread',
				calories: 356,
				fat: 16.0,
				carbs: 49,
				protein: 3.9,
				iron: '16%',
			},
			{
				name: 'Jelly bean',
				calories: 375,
				fat: 0.0,
				carbs: 94,
				protein: 0.0,
				iron: '0%',
			},
			{
				name: 'Lollipop',
				calories: 392,
				fat: 0.2,
				carbs: 98,
				protein: 0,
				iron: '2%',
			},
			{
				name: 'Honeycomb',
				calories: 408,
				fat: 3.2,
				carbs: 87,
				protein: 6.5,
				iron: '45%',
			},
			{
				name: 'Donut',
				calories: 452,
				fat: 25.0,
				carbs: 51,
				protein: 4.9,
				iron: '22%',
			},
			{
				name: 'KitKat',
				calories: 518,
				fat: 26.0,
				carbs: 65,
				protein: 7,
				iron: '6%',
			},
		],
		currentItem: 'tab-Web',
		items: ['Web', 'Shopping', 'Videos', 'Images'],
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
