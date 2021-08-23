<template>
	<div class="timetracking">
		<v-toolbar flat color="grey lighten-4" dense>
			<v-col><v-toolbar-title>Timesheet</v-toolbar-title></v-col>
			<v-col>
				<v-menu
					ref="menu"
					v-model="menu"
					:close-on-content-click="false"
					:return-value.sync="date"
					transition="scale-transition"
					offset-y
					min-width="auto"
				>
					<template v-slot:activator="{ on, attrs }">
						<v-text-field
							v-model="date"
							label="Picker in menu"
							prepend-icon="mdi-calendar"
							readonly
							v-bind="attrs"
							v-on="on"
						></v-text-field>
					</template>
					<v-date-picker v-model="date" no-title scrollable>
						<v-spacer></v-spacer>
						<v-btn text color="primary" @click="menu = false">
							Cancel
						</v-btn>
						<v-btn text color="primary" @click="$refs.menu.save(date)">
							OK
						</v-btn>
					</v-date-picker>
				</v-menu>
			</v-col>
			<v-col></v-col>
		</v-toolbar>
		<ckeditor
			:editor="editor"
			v-model="editorData"
			:config="editorConfig"
		></ckeditor>
	</div>
</template>

<script>
export default {
	data: () => ({
		date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
			.toISOString()
			.substr(0, 10),
		menu: false,
		modal: false,
		menu2: false,
		// editor: ClassicEditor,
		// editorData: '<p>Content of the editor.</p>',
		// editorConfig: {
		// The configuration of the editor.
		// },
	}),
}
</script>
