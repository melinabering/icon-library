<template>
	<div>
		<v-container fluid class="pa-0">
			<v-toolbar dense height="36px" class="grey lighten-3" flat>
				Edit History

				<v-spacer></v-spacer>
				<v-dialog v-model="dialog" fullscreen hide-overlay>
					<template v-slot:activator="{ on, attrs }">
						<v-btn icon v-bind="attrs" v-on="on">
							<v-icon>mdi-history</v-icon>
						</v-btn>
					</template>
					<v-card height="100%" color="white">
						<v-app-bar
							app
							clipped-right
							color="white"
							flat
							height="48"
							class="border-bottom"
							style="left:0"
						>
							<v-icon @click.close="dialog = !dialog" class="mr-4"
								>mdi-arrow-left</v-icon
							>
							<v-toolbar-title>View History</v-toolbar-title>
							<v-spacer></v-spacer>
							<v-icon @click.close="dialog = !dialog">mdi-close</v-icon>
						</v-app-bar>

						<v-main class="pt-8" style="padding-left:0">
							<v-toolbar dense flat class="pt-6">
								<v-spacer></v-spacer>
								<v-switch
									v-model="dense"
									label="Toggle table view"
									class="mx-4"
								></v-switch>
							</v-toolbar>

							<v-data-table
								class="mt-4 elevation-0"
								:headers="headers"
								:items="historyData"
								:dense="dense"
								:fixed-header="false"
							>
								<template v-slot:top>
									<v-navigation-drawer
										v-model="drawerRight"
										app
										clipped
										right
										width="50%"
										flat
									>
										<template v-slot:activator="{ on, attrs }">
											<v-btn
												color="primary"
												dark
												class="mb-2"
												v-bind="attrs"
												v-on="on"
												>New Item</v-btn
											>
										</template>
										<v-card flat>
											<v-card-title class="pl-6">
												<span class="headline">{{ formTitle }}</span>
												<v-spacer></v-spacer>
												<v-btn
													icon
													@click.stop="drawerRight = !drawerRight"
													v-model="fab"
													text
												>
													<v-icon fab text>
														mdi-close
													</v-icon>
												</v-btn>
											</v-card-title>

											<v-card-text>
												<v-container>
													<v-row>
														<v-col cols="12" sm="6" md="4">
															<label for="">Status</label>
															<v-text-field
																v-model="editedItem.status"
																disabled
																solo
																dense
																tile
																class="rounded-0"
															></v-text-field>
														</v-col>
														<v-col cols="12" sm="6" md="4">
															<label for="">User</label>
															<v-text-field
																v-model="editedItem.user"
																readonly
																solo
																dense
																tile
																class="rounded-0"
															></v-text-field>
														</v-col>
														<v-col cols="12" sm="6" md="4">
															<label for="">Date</label>
															<v-text-field
																v-model="editedItem.date"
																readonly
																solo
																dense
																tile
																class="rounded-0"
															></v-text-field>
														</v-col>
													</v-row>
													<v-row>
														<v-col>
															<p>
																Lorem ipsum dolor sit amet, consectetur
																adipiscing elit. Integer nec odio. Praesent
																libero. Sed cursus ante dapibus diam. Sed nisi.
																Nulla quis sem at nibh elementum imperdiet. Duis
																sagittis ipsum. Praesent mauris. Fusce nec
																tellus sed augue semper porta. Mauris massa.
																Vestibulum lacinia arcu eget nulla.
															</p>

															<p>
																Class aptent taciti sociosqu ad litora torquent
																per conubia nostra, per inceptos himenaeos.
																Curabitur sodales ligula in libero. Sed
																dignissim lacinia nunc. Curabitur tortor.
																Pellentesque nibh. Aenean quam. In scelerisque
																sem at dolor. Maecenas mattis. Sed convallis
																tristique sem. Proin ut ligula vel nunc egestas
																porttitor. Morbi lectus risus, iaculis vel,
																suscipit quis, luctus non, massa.
															</p>

															<p>
																Fusce ac turpis quis ligula lacinia aliquet.
																Mauris ipsum. Nulla metus metus, ullamcorper
																vel, tincidunt sed, euismod in, nibh. Quisque
																volutpat condimentum velit. Class aptent taciti
																sociosqu ad litora torquent per conubia nostra,
																per inceptos himenaeos. Nam nec ante. Sed
																lacinia, urna non tincidunt mattis, tortor neque
																adipiscing diam, a cursus ipsum ante quis
																turpis. Nulla facilisi. Ut fringilla.
																Suspendisse potenti. Nunc feugiat mi a tellus
																consequat imperdiet. Vestibulum sapien. Proin
																quam. Etiam ultrices.
															</p>

															<p>
																Suspendisse in justo eu magna luctus suscipit.
																Sed lectus. Integer euismod lacus luctus magna.
																Quisque cursus, metus vitae pharetra auctor, sem
																massa mattis sem, at interdum magna augue eget
																diam. Vestibulum ante ipsum primis in faucibus
																orci luctus et ultrices posuere cubilia Curae;
																Morbi lacinia molestie dui. Praesent blandit
																dolor. Sed non quam. In vel mi sit amet augue
																congue elementum. Morbi in ipsum sit amet pede
																facilisis laoreet. Donec lacus nunc, viverra
																nec, blandit vel, egestas et, augue. Vestibulum
																tincidunt malesuada tellus. Ut ultrices ultrices
																enim.
															</p>

															<p>
																Curabitur sit amet mauris. Morbi in dui quis est
																pulvinar ullamcorper. Nulla facilisi. Integer
																lacinia sollicitudin massa. Cras metus. Sed
																aliquet risus a tortor. Integer id quam. Morbi
																mi. Quisque nisl felis, venenatis tristique,
																dignissim in, ultrices sit amet, augue. Proin
																sodales libero eget ante. Nulla quam. Aenean
																laoreet.
															</p>

															<p>
																Vestibulum nisi lectus, commodo ac, facilisis
																ac, ultricies eu, pede. Ut orci risus, accumsan
																porttitor, cursus quis, aliquet eget, justo. Sed
																pretium blandit orci. Ut eu diam at pede
																suscipit sodales. Aenean lectus elit, fermentum
																non, convallis id, sagittis at, neque. Nullam
																mauris orci, aliquet et, iaculis et, viverra
																vitae, ligula. Nulla ut felis in purus aliquam
																imperdiet. Maecenas aliquet mollis lectus.
																Vivamus consectetuer risus et tortor. Lorem
																ipsum dolor sit amet, consectetur adipiscing
																elit. Integer nec odio. Praesent libero. Sed
																cursus ante dapibus diam.
															</p>

															<p>
																Sed nisi. Nulla quis sem at nibh elementum
																imperdiet. Duis sagittis ipsum. Praesent mauris.
																Fusce nec tellus sed augue semper porta. Mauris
																massa. Vestibulum lacinia arcu eget nulla. Class
																aptent taciti sociosqu ad litora torquent per
																conubia nostra, per inceptos himenaeos.
																Curabitur sodales ligula in libero. Sed
																dignissim lacinia nunc. Curabitur tortor.
																Pellentesque nibh. Aenean quam. In scelerisque
																sem at dolor.
															</p>

															<p>
																Maecenas mattis. Sed convallis tristique sem.
																Proin ut ligula vel nunc egestas porttitor.
																Morbi lectus risus, iaculis vel, suscipit quis,
																luctus non, massa. Fusce ac turpis quis ligula
																lacinia aliquet. Mauris ipsum. Nulla metus
																metus, ullamcorper vel, tincidunt sed, euismod
																in, nibh. Quisque volutpat condimentum velit.
																Class aptent taciti sociosqu ad litora torquent
																per conubia nostra, per inceptos himenaeos. Nam
																nec ante. Sed lacinia, urna non tincidunt
																mattis, tortor neque adipiscing diam, a cursus
																ipsum ante quis turpis. Nulla facilisi. Ut
																fringilla.
															</p>

															<p>
																Suspendisse potenti. Nunc feugiat mi a tellus
																consequat imperdiet. Vestibulum sapien. Proin
																quam. Etiam ultrices. Suspendisse in justo eu
																magna luctus suscipit. Sed lectus. Integer
																euismod lacus luctus magna. Quisque cursus,
																metus vitae pharetra auctor, sem massa mattis
																sem, at interdum magna augue eget diam.
																Vestibulum ante ipsum primis in faucibus orci
																luctus et ultrices posuere cubilia Curae; Morbi
																lacinia molestie dui. Praesent blandit dolor.
																Sed non quam.
															</p>

															<p>
																In vel mi sit amet augue congue elementum. Morbi
																in ipsum sit amet pede facilisis laoreet. Donec
																lacus nunc, viverra nec, blandit vel, egestas
																et, augue. Vestibulum tincidunt malesuada
																tellus. Ut ultrices ultrices enim. Curabitur sit
																amet mauris. Morbi in dui quis est pulvinar
																ullamcorper. Nulla facilisi. Integer lacinia
																sollicitudin massa. Cras metus. Sed aliquet
																risus a tortor. Integer id quam. Morbi mi.
															</p>
														</v-col>
													</v-row>
												</v-container>
											</v-card-text>
										</v-card>
									</v-navigation-drawer>
								</template>
								<template v-slot:item.actions="{ item }">
									<v-icon small class="mr-2" @click="editItem(item)">
										mdi-eye
									</v-icon>
								</template>
								<template v-slot:no-data>
									<v-btn color="primary" @click="initialize">Reset</v-btn>
								</template>
							</v-data-table>
						</v-main>
					</v-card>
				</v-dialog>
				<template v-slot:activator="{ on, attrs }">
					<v-btn color="primary" dark v-bind="attrs" v-on="on">
						View History (Fullscreen)
					</v-btn>
				</template>
			</v-toolbar>
		</v-container>

		<v-container>
			 <v-row justify="center">
    <v-dialog
      v-model="dialog2"
      scrollable
      max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Select Country</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group
            v-model="dialog2m1"
            column
          >
            <v-radio
              label="Bahamas, The"
              value="bahamas"
            ></v-radio>
            <v-radio
              label="Bahrain"
              value="bahrain"
            ></v-radio>
            <v-radio
              label="Bangladesh"
              value="bangladesh"
            ></v-radio>
            <v-radio
              label="Barbados"
              value="barbados"
            ></v-radio>
            <v-radio
              label="Belarus"
              value="belarus"
            ></v-radio>
            <v-radio
              label="Belgium"
              value="belgium"
            ></v-radio>
            <v-radio
              label="Belize"
              value="belize"
            ></v-radio>
            <v-radio
              label="Benin"
              value="benin"
            ></v-radio>
            <v-radio
              label="Bhutan"
              value="bhutan"
            ></v-radio>
            <v-radio
              label="Bolivia"
              value="bolivia"
            ></v-radio>
            <v-radio
              label="Bosnia and Herzegovina"
              value="bosnia"
            ></v-radio>
            <v-radio
              label="Botswana"
              value="botswana"
            ></v-radio>
            <v-radio
              label="Brazil"
              value="brazil"
            ></v-radio>
            <v-radio
              label="Brunei"
              value="brunei"
            ></v-radio>
            <v-radio
              label="Bulgaria"
              value="bulgaria"
            ></v-radio>
            <v-radio
              label="Burkina Faso"
              value="burkina"
            ></v-radio>
            <v-radio
              label="Burma"
              value="burma"
            ></v-radio>
            <v-radio
              label="Burundi"
              value="burundi"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog2 = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog2 = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
		</v-container>
	</div>
</template>

<script>
// import DatatableEditHistory from '../components/DatatableEditHistory.vue';
export default {
	data: () => ({
		drawerRight: false,
		fab: true,
		dialog: false,
		dense: true,
		fixedHeader: true,
		drawer: false,
		headers: [
			{ text: 'Action', value: 'status' },
			{ text: 'User', value: 'user' },
			{
				text: 'Date',
				align: 'status',
				value: 'date',
			},
			{ text: 'View', value: 'actions', sortable: false },
		],
		historyData: [],
		editedIndex: -1,
		editedItem: {
			date: '',
			status: 0,
			user: 0,
		},
		defaultItem: {
			date: '',
			status: 0,
			user: 0,
		},
	}),
	computed: {
		formTitle() {
			return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
		},
	},

	watch: {
		drawerRight(val) {
			val || this.close();
		},
	},

	created() {
		this.initialize();
	},

	methods: {
		initialize() {
			this.historyData = [
				{
					date: '08/18/2021',
					status: 'Edited',
					user: 'Jennifer Esterheld',
				},
				{
					date: '8/31/2020',
					status: 'Deleted',
					user: 'Maurits Henniger',
				},
				{
					date: '10/24/2020',
					status: 'Edited',
					user: 'Corie Ewers',
				},
				{
					date: '11/17/2020',
					status: 'Edited',
					user: 'Perl Blackah',
				},
				{
					date: '3/20/2021',
					status: 'Edited',
					user: 'Merell Buxam',
				},
				{
					date: '7/9/2021',
					status: 'Deleted',
					user: 'Erminie Aldcorne',
				},
				{
					date: '10/17/2020',
					status: 'Deleted',
					user: 'Nani Bagger',
				},
				{
					date: '1/13/2021',
					status: 'Created',
					user: 'Rosene Wisham',
				},
				{
					date: '8/5/2021',
					status: 'Edited',
					user: 'Olivero Vaneschi',
				},
				{
					date: '7/28/2021',
					status: 'Created',
					user: 'Constantine Humpherston',
				},
				{
					date: '1/19/2021',
					status: 'Created',
					user: 'Lura Bendle',
				},
				{
					date: '1/30/2021',
					status: 'Created',
					user: 'Chaim Masi',
				},
				{
					date: '8/28/2020',
					status: 'Edited',
					user: "Putnem O' Bee",
				},
				{
					date: '6/28/2021',
					status: 'Edited',
					user: 'Saxe Strooband',
				},
				{
					date: '5/23/2021',
					status: 'Created',
					user: 'Danny Flowith',
				},
				{
					date: '2/11/2021',
					status: 'Edited',
					user: 'Morgan Robardet',
				},
				{
					date: '10/5/2020',
					status: 'Created',
					user: 'Elaine Pattesall',
				},
				{
					date: '3/24/2021',
					status: 'Created',
					user: 'Andrea Byne',
				},
				{
					date: '11/20/2020',
					status: 'Edited',
					user: 'Wolf Bernardo',
				},
				{
					date: '5/20/2021',
					status: 'Edited',
					user: 'Torey Farrens',
				},
				{
					date: '8/23/2020',
					status: 'Created',
					user: 'Loralee Jaine',
				},
				{
					date: '12/18/2020',
					status: 'Edited',
					user: 'Denni Curryer',
				},
				{
					date: '2/26/2021',
					status: 'Edited',
					user: 'Elton Mercik',
				},
				{
					date: '7/14/2021',
					status: 'Deleted',
					user: 'Erich MacCart',
				},
				{
					date: '2/10/2021',
					status: 'Deleted',
					user: 'Rosabel Beagan',
				},
				{
					date: '2/12/2021',
					status: 'Edited',
					user: 'Christiano Springer',
				},
				{
					date: '3/12/2021',
					status: 'Deleted',
					user: 'Con Cordel',
				},
				{
					date: '8/27/2020',
					status: 'Edited',
					user: 'Ingar Scolts',
				},
				{
					date: '7/27/2021',
					status: 'Deleted',
					user: 'Adelaida Witcomb',
				},
				{
					date: '12/17/2020',
					status: 'Edited',
					user: 'Burtie Gabriely',
				},
				{
					date: '6/4/2021',
					status: 'Edited',
					user: 'Wilfred Dixsee',
				},
			];
		},

		editItem(item) {
			this.editedIndex = this.historyData.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.drawerRight = true;
		},

		deleteItem(item) {
			const index = this.historyData.indexOf(item);
			confirm('Are you sure you want to delete this item?') &&
				this.historyData.splice(index, 1);
		},

		close() {
			this.drawerRight = false;
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			});
		},

		save() {
			if (this.editedIndex > -1) {
				Object.assign(this.historyData[this.editedIndex], this.editedItem);
			} else {
				this.historyData.push(this.editedItem);
			}
			this.close();
		},
	},
};
</script>
