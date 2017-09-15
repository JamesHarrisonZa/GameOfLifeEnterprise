module.exports = function (config) {
	config.set({

		frameworks: ['jasmine', 'karma-typescript'],

		files: [
			{ pattern: 'src/**/*.ts' }
		],

		preprocessors: {
			'**/*.ts': ['karma-typescript'],
		},

		reporters: ['progress', 'karma-typescript'],

		karmaTypescriptConfig: {
			tsconfig: './tsconfig.json'
		},
		
		autoWatch: true,

		plugins: [
			'karma-jasmine',
			'karma-typescript',
			'karma-chrome-launcher',
		],

		browsers: ['ChromeHeadless'],
	});
};