module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		},
		uglify: {
			options: {
				mangle: true
			},
			my_target: {
				files: {
					'assets/js/script.js': ['assets/components/js/*.js']
				} //files
			} // my target
		}, // uglify
		watch: {
			options: { livereload: true },
			scripts: {
				files: ['src/assets/js/*.js'],
				// tasks: ['uglify']
			}, // scripts
			sass: {
				files: ['src/assets/components/sass/*.scss'],
				tasks: ['compass:dev']
			}, // sass
			php: {
				files: ['src/**/*.php'], // in subfolders as well
			}
		} // watch
	}) // initConfig

	grunt.registerTask('default', 'watch');
} // exports