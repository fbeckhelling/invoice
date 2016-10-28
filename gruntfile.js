module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				//sourceMap: true
			},
            dist: {
                files: [
                  {
                      expand: true, // Recursive
                      cwd: "assets/sass/", // The startup directory
                      src: ["**/*.scss"], // Source files
                      dest: "assets/css/", // Destination
                      ext: ".css" // File extension 
                  }
                ]
            }
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('dev', ['sass', 'watch']);
}