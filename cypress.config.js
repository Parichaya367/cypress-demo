const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberPreprocessorPlugin =
	require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createEsbuildPlugin =
	require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin

module.exports = defineConfig({
	projectId: 'kbq8uv',
	e2e: {
		setupNodeEvents(on, config) {
			on('task', {
				hello(msg) {
					console.log(`hello world ! ${msg}`)
					return null
				},
				readFileMaybe(filename) {
					if (fs.existsSync(filename)) {
						return fs.readFileSync(filename, 'utf8')
					}

					return null
				},
			})
		},
		defaultCommandTimeout: 10000,
		baseUrl: 'https://katalon-demo-cura.herokuapp.com/', //-> cy.visit('/') can do it now
		watchForFileChanges: true,
		pageLoadTimeout: 180000,
		video: false,
		// env: {
		// 	URL: 'https://katalon-demo-cura.herokuapp.com/',
		// 	USERNAME: 'John Doe',
		// 	PWD: 'ThisIsNotAPassword',
		// },
		retries: {
			runMode: 1, // Configure retry attempts for 'cypress run'
			openMode: 1, // configure retry attempts for 'cypress open'
		},
		reporter: 'nyan',
		// async setupNodeEvents(on, config) {
		// 	const bundler = createBundler({ plugins: [createEsbuildPlugin(config)] })
		// 	on('file:preprocessor', bundler)
		// 	await addCucumberPreprocessorPlugin(on, config)
		// 	return config
		// },
		video: true,
		//specPattern: '**/*.feature',
		chromeWebSecurity: false,
		experimentalModifyObstructiveThirdPartyCode: true,
	},
})
