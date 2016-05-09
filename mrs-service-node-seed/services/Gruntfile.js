module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-apidoc');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.initConfig({
		 // Mocha
	    mochaTest: {
	      test: {
	        options: {
	          reporter: 'spec',
	          quiet: false,
	          clearRequireCache: false
	        },
	        src: ['test/**/*.js']
	      }
	    },
		//Jshint
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: ['lib/**/*.js']
		}
	});

	grunt.registerTask('build', ['jshint']);
	grunt.registerTask('test', ['mochaTest']);
};
