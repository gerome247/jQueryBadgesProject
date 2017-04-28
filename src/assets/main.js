// $(function() {
//   // your code will go here
//   $.ajax({
//       url: 'https://www.codeschool.com/users/gerome247.json',
//       dataType: 'jsonp',
//       success: function(response) {
//         // handle response
//         //console.log(response.courses.completed);
//         addCourses(response.courses.completed);
//       }
//     });

//     function addCourses(courses) {
//       var $badges = $('#badges');
//       var template = $.trim( $('#badgesTemplate').html() );
//       var frag ="";
//      $.each(courses, function(index, obj) {
//         if(obj) {
//           frag += template.replace( /{{ title }}/ig, obj.title).replace(/{{ badge }}/ig, obj.badge).replace(/{{ url }}/ig, obj.url);
//         }
//         // console.log(index);
//         // console.log(obj.title);
//       });
//         $($badges).append(frag);
//     }

// });


$(function() {
  $.ajax({
      url: 'https://www.codeschool.com/users/gerome247.json',
      dataType: 'jsonp',
      success: function(response) {
      addCourses(response.courses.completed);
      }
    });
    function addCourses(courses) {
      var $badges = $('#badges');

      courses.forEach(function(course){
        var $course = $('<div />', {
          'class': 'course'
        }).appendTo($badges);

        $('<h3 />', {
          text: course.title
        }).appendTo($course);

        $('<img />', {
          src: course.badge
        }).appendTo($course);

        $('<a />',{
          'class': 'btn btn-primary',
          target: '_blank',
          href: course.url,
          text: 'See Course'
        }).appendTo($course);
      })

    }
});