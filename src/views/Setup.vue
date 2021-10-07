<template>
	<v-container>
		<v-row>
			<v-col class="col-12">
				<v-text-field
					label="Search"
					single-line
					outlined
					dense
					append-icon="mdi-magnify"
					style="border-radius:0;"
					hide-details=""
				></v-text-field>
			</v-col>

			<v-col cols="12" lg="2" sm="2" v-for="(item, i) in items" :key="i">
				<v-card tile>
					<v-app-bar flat dense color="white">
						<v-list-item two-line class="pa-0 mt-2">
							<v-list-item-content>
								<v-list-item-title class="subtitle-1">{{
									item.icon
								}}</v-list-item-title>
								<v-list-item-subtitle
									>Alias: {{ item.text }}</v-list-item-subtitle
								>
							</v-list-item-content>
						</v-list-item>
						<v-spacer></v-spacer>
						<v-checkbox value class="mt-4"></v-checkbox>
					</v-app-bar>

					<v-card-text class="text-center">
						<v-icon x-large v-text="item.icon" :color="item.color"></v-icon>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions dense>
						<!-- <v-btn icon @click="show = !show">
							<v-icon>{{
								show ? 'mdi-chevron-up' : 'mdi-chevron-down'
							}}</v-icon>
						</v-btn> -->
						icon="{{ item.icon }}" color="{{ item.color }}"
						<v-divider></v-divider>

						<v-spacer></v-spacer>
						<v-menu v-model="menu" :close-on-content-click="false">
							<template v-slot:activator="{ on, attrs }">
								<v-btn color="indigo" icon dark v-bind="attrs" v-on="on">
									<v-icon>mdi-dots-vertical</v-icon>
								</v-btn>
							</template>

							<v-card>
								<v-card-actions>
									<v-btn text @click="menu = false">
										PNG
									</v-btn>
									<v-btn text @click="menu = false">
										SVG
									</v-btn>
								</v-card-actions>
							</v-card>
						</v-menu>
					</v-card-actions>
					<v-expand-transition>
						<div v-show="show">
							<v-divider></v-divider>

							<v-card-text>
								v-icon="{{ item.icon }}" color="{{ item.color }}"
								<v-divider></v-divider>
								fdskj
							</v-card-text>
						</div>
					</v-expand-transition>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue';
export default {
	data: () => ({
		items: [
			{
				text: 'Entity',
				icon: 'mdi-triangle-outline',
				color: 'yellow darken-2',
			},
			// { text: 'Control', icon: 'mdi-shield-check-outline', color: 'green' },
			// {
			// 	text: 'Strategic Risk',
			// 	icon: 'mdi-shield-star-outline',
			// 	color: 'orange darken-2',
			// },
			// { text: 'Issue', icon: 'mdi-alert-outline', color: 'red' },
			// {
			// 	text: 'Recommendation',
			// 	icon: 'mdi-alert-circle-outline',
			// 	color: 'purple',
			// },
			// {
			// 	text: 'Objective',
			// 	icon: 'mdi-lightbulb-outline',
			// 	color: 'yellow darken-2',
			// },
			// { text: 'Coaching Note', icon: 'mdi-note-text-outline', color: 'orange' },
			// { text: 'Procedure', icon: 'mdi-cog-outline', color: 'primary' },
			// { text: 'Workpaper', icon: 'mdi-note-multiple-outline', color: 'teal' },
			// {
			// 	text: 'Assessment',
			// 	icon: 'mdi-clipboard-text-outline',
			// 	color: 'brown lighten-1',
			// },
			// {
			// 	text: 'Template Folder',
			// 	icon: 'mdi-folder-open-outline',
			// 	color: 'primary',
			// },
		],
		show: false,
		fav: true,
		menu: false,
		message: false,
		hints: true,
	}),
};
</script>
