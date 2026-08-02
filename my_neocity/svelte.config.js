import adapter from '@sveltejs/adapter-static';

export default {
	compilerOptions: {
		runes: true
	},
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build'
		}),
		paths: {
			base: '/Neocity_den'
		}
	}
};