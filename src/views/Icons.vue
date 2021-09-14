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
						{{ item.text }}

						<!-- <v-spacer></v-spacer>
						<v-btn icon large>
							<v-icon>mdi-dots-vertical</v-icon>
						</v-btn> -->
					</v-app-bar>
					<v-card-text class="text-center">
						<v-icon x-large v-text="item.icon" :color="item.color"></v-icon>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions dense>
						<v-btn icon
							><v-icon>
								mdi-content-copy
							</v-icon></v-btn
						>
						<v-spacer></v-spacer>
						<v-btn icon
							><v-icon>
								mdi-download
							</v-icon></v-btn
						>
					</v-card-actions>
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
			{ text: 'Control', icon: 'mdi-shield-check-outline', color: 'green' },
			{
				text: 'Strategic Risk',
				icon: 'mdi-shield-star-outline',
				color: 'orange darken-2',
			},
			{ text: 'Issue', icon: 'mdi-alert-outline', color: 'red' },
			{
				text: 'Recommendation',
				icon: 'mdi-alert-circle-outline',
				color: 'purple',
			},
			{
				text: 'Objective',
				icon: 'mdi-lightbulb-outline',
				color: 'yellow darken-2',
			},
			{ text: 'Coaching Note', icon: 'mdi-note-text-outline', color: 'orange' },
			{ text: 'Procedure', icon: 'mdi-cog-outline', color: 'primary' },
			{ text: 'Workpaper', icon: 'mdi-note-multiple-outline', color: 'teal' },
			{
				text: 'Assessment',
				icon: 'mdi-clipboard-text-outline',
				color: 'brown lighten-1',
			},
			{
				text: 'Template Folder',
				icon: 'mdi-folder-open-outline',
				color: 'primary',
			},
		],
	}),
};
</script>
