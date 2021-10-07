import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: 'mdi', // default - only for display purposes
		values: {
			product: 'mdi-dropbox',
			support: 'mdi-lifebuoy',
			steam: 'mdi-steam-box',
			pc: 'mdi-desktop-classic',
			xbox: 'mdi-xbox',
			playstation: 'mdi-playstation',
			switch: 'mdi-nintendo-switch',
		},
	},
	theme: {
		themes: {
			light: {
				primary: '#007AC3',
				secondary: '#b0bec5',
				anchor: '#005B92',
				accent: '#EA8F00',
				error: '#E5202E',
				info: '#007AC3',
				success: '#85BC20',
				warning: '#EA8F00',
			},
		},
	},
});
