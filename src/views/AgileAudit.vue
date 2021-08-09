<template>
	<v-container>
		<v-row class="mt-8">
			<v-col class="text-center"
				><v-btn @click.stop="drawerEditHistory = !drawerEditHistory"
					>Navigation Drawer</v-btn
				>
			</v-col>
			<v-col class="text-center">
				<v-dialog v-model="dialog" scrollable width="800">
					<template v-slot:activator="{ on, attrs }">
						<v-btn color="primary" light v-bind="attrs" v-on="on">
							Modal
						</v-btn>
					</template>

					<v-card>
						<v-card-title class="text-h5 grey lighten-2">
							Edit History
						</v-card-title>

						<v-card-text>
							<datatableEditHistory />
						</v-card-text>

						<v-divider></v-divider>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="primary" text @click="dialog = false">
								Close
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog></v-col
			>
			<v-col class="text-center">
				<v-dialog v-model="dialog2" fullscreen width="800">
					<template v-slot:activator="{ on, attrs }">
						<v-btn color="primary" light v-bind="attrs" v-on="on">
							Modal
						</v-btn>
					</template>

					<v-card>
						<v-card-title>
							Edit History
						</v-card-title>

						<v-card-text>
							<datatableEditHistory />
						</v-card-text>

						<v-divider></v-divider>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="primary" text @click="dialog2 = false">
								Close
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog></v-col
			>
		</v-row>

		<v-navigation-drawer
			width="75%"
			absolute
			temporary
			right
			v-model="drawerEditHistory"
		>
			<datatableEditHistory />
		</v-navigation-drawer>
	</v-container>
</template>

<script>
import DatatableEditHistory from '../components/DatatableEditHistory.vue'
export default {
	data: () => ({
		drawerEditHistory: false,
		group: null,
		dialog: false,
		dialog2: false,
	}),

	watch: {
		group() {
			this.drawer = false
		},
	},

	components: {
		DatatableEditHistory,
	},
}
</script>
