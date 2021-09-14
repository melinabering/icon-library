<template>
	<div class="userpermissinos">
		<h1>This is the User Permissions page</h1>
		<v-data-table
			:headers="headers"
			:items="roles"
			sort-by="systemName"
			class="elevation-1"
		>
			<template v-slot:top>
				<v-toolbar flat>
					<v-dialog v-model="dialog" fullscreen>
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								color="primary"
								dark
								class="mb-2"
								depressed="true"
								v-bind="attrs"
								v-on="on"
							>
								New Item
							</v-btn>
						</template>
						<v-card>
							<v-app-bar dense clipped-left flat>
								<v-card-title>
									<span class="text-h5">{{ formTitle }}</span>
								</v-card-title>
							</v-app-bar>

							<v-card-text
								><v-navigation-drawer
									absolute
									permanent
									clipped
									style="margin-top:48px;"
								>
									<v-stepper v-model="e6" vertical>
										<v-stepper-step :complete="e6 > 1" step="1">
											Select an app
											<small>Summarize if needed</small>
										</v-stepper-step>

										<v-stepper-content step="1"> </v-stepper-content>

										<v-stepper-step :complete="e6 > 2" step="2">
											Configure analytics for this app
										</v-stepper-step>

										<v-stepper-content step="2">
											<v-card
												color="grey lighten-1"
												class="mb-12"
												height="200px"
											></v-card>
											<v-btn color="primary" @click="e6 = 3">
												Continue
											</v-btn>
											<v-btn text>
												Cancel
											</v-btn>
										</v-stepper-content>

										<v-stepper-step :complete="e6 > 3" step="3">
											Select an ad format and role ad unit
										</v-stepper-step>

										<v-stepper-content step="3">
											<v-card
												color="grey lighten-1"
												class="mb-12"
												height="200px"
											></v-card>
											<v-btn color="primary" @click="e6 = 4">
												Continue
											</v-btn>
											<v-btn text>
												Cancel
											</v-btn>
										</v-stepper-content>

										<v-stepper-step step="4">
											View setup instructions
										</v-stepper-step>
										<v-stepper-content step="4">
											<v-card
												color="grey lighten-1"
												class="mb-12"
												height="200px"
											></v-card>
											<v-btn color="primary" @click="e6 = 1">
												Continue
											</v-btn>
											<v-btn text>
												Cancel
											</v-btn>
										</v-stepper-content>
									</v-stepper>
								</v-navigation-drawer>
								<v-container>
									<v-row>
										<v-col cols="12" sm="6" md="4">
											<v-text-field
												outlined
												dense
												v-model="editedItem.role"
											></v-text-field>
										</v-col>
										<v-col cols="12" sm="6" md="4">
											<v-text-field
												outlined
												dense
												v-model="editedItem.systemName"
											></v-text-field>
										</v-col>
										<v-col cols="12" sm="6" md="4">
											<v-text-field
												outlined
												dense
												v-model="editedItem.createdBy"
											></v-text-field>
										</v-col>
										<v-col cols="12" sm="6" md="4">
											<v-text-field
												outlined
												dense
												v-model="editedItem.active"
											></v-text-field>
										</v-col>
									</v-row>
								</v-container>
							</v-card-text>

							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="blue darken-1" text @click="close">
									Cancel
								</v-btn>
								<v-btn color="blue darken-1" text @click="save">
									Save
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
					<v-dialog v-model="dialogDelete" max-width="500px">
						<v-card>
							<v-card-title class="text-h5"
								>Are you sure you want to delete this item?</v-card-title
							>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="blue darken-1" text @click="closeDelete"
									>Cancel</v-btn
								>
								<v-btn color="blue darken-1" text @click="deleteItemConfirm"
									>OK</v-btn
								>
								<v-spacer></v-spacer>
							</v-card-actions>
						</v-card>
					</v-dialog>
				</v-toolbar>
			</template>
			<template v-slot:item.actions="{ item }">
				<v-icon small class="mr-2" @click="editItem(item)" color="primary">
					mdi-pencil
				</v-icon>
				<v-icon small @click="deleteItem(item)" color="red darken-1">
					mdi-delete
				</v-icon>
			</template>
			<template v-slot:no-data>
				<v-btn color="primary" @click="initialize">
					Reset
				</v-btn>
			</template>
		</v-data-table>
	</div>
</template>

<script>
export default {
	data: () => ({
		dialog: false,
		dialogDelete: false,
		headers: [
			{
				text: 'Role',
				align: 'start',
				sortable: false,
				value: 'role',
			},
			{ text: 'System Name', value: 'systemName' },
			{ text: 'Created By', value: 'createdBy' },
			{ text: 'Active', value: 'active' },
			{ text: 'Actions', value: 'actions', sortable: false },
		],
		roles: [],
		editedIndex: -1,
		editedItem: {
			role: '',
			systemName: 0,
			createdBy: 0,
			active: 0,
		},
		defaultItem: {
			role: '',
			systemName: 0,
			createdBy: 0,
			active: 0,
		},
		return: {
			e6: 1,
		},
	}),

	computed: {
		formTitle() {
			return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
		},
	},

	watch: {
		dialog(val) {
			val || this.close();
		},
		dialogDelete(val) {
			val || this.closeDelete();
		},
	},

	created() {
		this.initialize();
	},

	methods: {
		initialize() {
			this.roles = [
				{
					role: 'Frozen Yogurt',
					systemName: 159,
					createdBy: 6.0,
					active: 24,
					protein: 4.0,
				},
			];
		},

		editItem(item) {
			this.editedIndex = this.roles.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialog = true;
		},

		deleteItem(item) {
			this.editedIndex = this.roles.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialogDelete = true;
		},

		deleteItemConfirm() {
			this.roles.splice(this.editedIndex, 1);
			this.closeDelete();
		},

		close() {
			this.dialog = false;
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			});
		},

		closeDelete() {
			this.dialogDelete = false;
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			});
		},

		save() {
			if (this.editedIndex > -1) {
				Object.assign(this.roles[this.editedIndex], this.editedItem);
			} else {
				this.roles.push(this.editedItem);
			}
			this.close();
		},
	},
};
</script>
