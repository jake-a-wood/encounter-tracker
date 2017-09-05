module.exports =  {
	head: {
		title: 'Encounter Tracker',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'Fan-Made Dungeons and Dragons 4th edition Encounter Tracker'
			}
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
		]
	},
	plugins: ['~/plugins/vuetify.js'],
	css : [
		// '~/assets/css/normalize.scss',
		'~/assets/css/font-awesome.min.css',
		// '~/assets/css/base.scss',
		// '~/assets/css/mixins.scss',
		'~/assets/style/app.styl'
	],
	loading: { color: '#3B8070' },
	build: {
		vendor: ['vuetify'],
		extractCSS: true,
		/*
		** Run ESLINT on save
		*/
		// extend (config, ctx) {
		// 	if (ctx.dev && ctx.isClient) {
		// 		config.module.rules.push({
		// 			enforce: 'pre',
		// 			test: /\.(js|vue)$/,
		// 			loader: 'eslint-loader',
		// 			exclude: /(node_modules)/
		// 		})
		// 	}
		// }
	}
}