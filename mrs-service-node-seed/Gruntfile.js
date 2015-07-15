module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-apidoc');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.initConfig({
		//Docs generation task
		apidoc: {
		  app: {
		    src: "lib/routes/",
		    dest: "public/apidoc/"
		  }
		},
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

	grunt.registerTask('build', ['jshint', 'apidoc']);
	grunt.registerTask('docs', ['apidoc']);
	grunt.registerTask('test', ['mochaTest']);
};
