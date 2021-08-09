<template>
	<v-row>
		<v-col>
			<v-simple-table fixed-header dense>
				<template v-slot:default>
					<thead>
						<tr>
							<th class="text-left">
								Action
							</th>
							<th class="text-left">
								User
							</th>
							<th class="text-left">
								Date
							</th>
							<th class="text-left">
								Title
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in edithistorydata" :key="item.name">
							<td>{{ item.action }}</td>
							<td>{{ item.user }}</td>
							<td>{{ item.date }}</td>
							<td>{{ item.title }}</td>
						</tr>
					</tbody>
				</template>
			</v-simple-table>
		</v-col>
	</v-row>
</template>
<script>
export default {
	name: 'DatatableEditHistory',
	data() {
		return {
			edithistorydata: [
				{
					action: 'Deleted',
					user: 'Miles Hitchcock',
					date: '07/30/2021',
					title: '[Story] Send Planning Memo',
				},
				{
					action: 'Created',
					user: 'Miles Hitchcock',
					date: '07/30/2021',
					title: 'Sprint 1',
				},
			],
		}
	},
}
</script>

<style></style>
