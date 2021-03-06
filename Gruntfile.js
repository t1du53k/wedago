'use strict';
 
module.exports = function (grunt) {
 
  // Project configuration.
  grunt.initConfig({
    watch: {
      sass: {
        files: "assets/scss/*.scss",
        tasks: ['compass']
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'assets/scss',
          cssDir: 'assets/css',
          outputStyle: 'compressed'
        }
      }
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "css/*.css",
            "*.html"
          ]
        },
        options: {
          watchTask: true,
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
 
  // Launch BrowserSync + watch task
  grunt.registerTask('default', ['browserSync', 'watch']);
};