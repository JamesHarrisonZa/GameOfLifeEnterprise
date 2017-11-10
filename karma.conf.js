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
			tsconfig: './tsconfig.json',
			reports: {
				"html": "coverage",
				"text": ""
			}
		},
		
		autoWatch: true,

		plugins: [
			'karma-jasmine',
			'karma-typescript',
			'karma-chrome-launcher',
		],

		browsers: ['ChromeHeadless'],

		customLaunchers: {
			ChromiumNoSandbox: {
				base: 'ChromeHeadless',
				flags: [
					'--disable-background-networking',
					'--disable-default-apps',
					'--disable-extensions',
					'--disable-gpu',
					'--disable-sync',
					'--disable-translate',
					'--headless',
					'--hide-scrollbars',
					'--metrics-recording-only',
					'--mute-audio',
					'--no-first-run',
					'--remote-debugging-port=42420',
					'--safebrowsing-disable-auto-update'
				]
			}
		}
	});
};