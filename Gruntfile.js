'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    // [START config]
    sass: {                                          // Task
      dist: {                                        // Target
        options: {                                   // Target options
          style: 'compressed',
          sourceMap: true
        },
        files: {                                  // Dictionary of files
          'public/css/main.min.css': 'src/static/css/main.scss',   // 'destination': 'source'
        }
      }
    },
    clean: ['public/css/main.min.css'],
    watch: {
      sass: {
        files: ['src/static/css/*.scss'],
        tasks: ['sass']
      }
    }
    // [END config]
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sass');
  // [START tasks]
  grunt.registerTask('build', ['sass']);
  // [END tasks]
  grunt.registerTask('default', ['watch']);
};
