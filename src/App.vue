<template>
	<v-app id="inspire">
		<main-nav></main-nav>
		<v-main>
			<!-- Content here -->
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

//
<script lang="ts">
import MainNav from '@/components/master/MainNav.vue';

export default {
	data(): any {
		return {};
	},
	components: {
		'main-nav': MainNav,
	},
};
</script>
