module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // concats all the javascripts together
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        files: {
          'build/dave-lib.js': 'src/**/*.js',
          'build/sample.js': 'samples/assets/**/*.js'
        },
      },
    },

    // watch tasks for javascripts, stylesheets, and images
    watch: {
      scripts: {
        files: ['src/**/*.js', 'samples/assets/**/*.js'],
        tasks: ['concat'],
        options: {
          spawn: false,
        },
      },
    },

    // cleans the public folder
    clean: ['build/']
  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['concat']);

};
