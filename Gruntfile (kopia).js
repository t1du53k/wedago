// This shows a full config file!
module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      files: "assets/scss/**/*.scss",
      tasks: ['compass'],
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
      dev: {
        bsFiles: {
          src : 'assets/css/*.css','*.html'
        },
        options: {
          watchTask: true
        }
      }
    }
  });

  // load npm tasks
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // create custom task-list
  grunt.registerTask('default', ["browserSync", "watch"]);
};