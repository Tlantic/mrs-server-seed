module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-apidoc');

	grunt.initConfig({
		//Docs generation task
		apidoc: {
		  app: {
		    src: "lib/routes/",
		    dest: "apidoc/"
		  }
		}
	});
	
	grunt.registerTask('docs', ['apidoc']);
}
