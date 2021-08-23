<template>
	<v-row>
		<v-col>
			<v-data-table
				:headers="headers"
				:items="editHistoryContent"
				sort-by="user"
				dense
			>
				<template v-slot:top> </template>
				<template v-slot:item.view="{ item }">
					<v-icon small class="mr-2" @click="editItem(item)">
						mdi-view-split-vertical
					</v-icon>
				</template>
			</v-data-table>
		</v-col>
	</v-row>
</template>
<script>
export default {
	name: 'DatatableEditHistory',
	data: () => ({
		dialog: false,
		dialogDelete: false,
		headers: [
			{
				text: 'Dessert (100g serving)',
				align: 'start',
				sortable: false,
				value: 'name',
			},
			{ text: 'User', value: 'user' },
			{ text: 'Date', value: 'date' },
			{ text: 'Title', value: 'title' },

			{ text: 'View', value: 'view', sortable: false },
		],
		editHistoryContent: [
			{
				name: 'Frozen Yogurt',
				user: 159,
				date: 6.0,
				title: 24,
			},
			{
				name: 'Ice cream sandwich',
				user: 237,
				date: 9.0,
				title: 37,
			},
		],
	}),
};
</script>

<style></style>
