<template>
	<v-container>
		<v-row>
			<v-col v-for="n in 12" :key="n" cols="12" sm="2">
				<v-card color="grey lighten-4" tile flat>
					<v-app-bar flat dense color="grey lighten-4">
						<v-toolbar-title class="text-h6pl-0">
							mdi-icon-name
						</v-toolbar-title>
						<v-spacer></v-spacer>
						<v-btn icon>
							<v-icon>mdi-dots-vertical</v-icon>
						</v-btn>
					</v-app-bar>
					<v-card-text>
						<v-img
							class="text-center"
							width="100px"
							src="../assets/icons/mdi_assessment.svg"
						>
						</v-img>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
