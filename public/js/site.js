// Helper functions placed inside variable
var helper = {

    isEmail: function(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    },

    animateMainButton: function(el) {
      $(el).removeClass('button-primary').toggleClass('button-success').prop("disabled",true);
      $(el).html('<span class="inner" style="opacity: 0; padding-left: 21.5px; padding-right: 21.5px"><i class="fa fa-check" aria-hidden="true"></i> Yay!</span>');
      $(el).find('.inner').animate({
        'opacity': 1,
        'padding-left': '0px',
        'padding-right': '0px',
      }, 400);
    },

    displayInvalidEmail: function(el) {
      $(el).append('<p class="error-msg" style="color: #ffffff; margin: 0px;">That does not appear to be a valid email address.</p>');
    },

    serverError: function (el) {
      $(el).append('<p>This is embarrasing. Our servers malfunctioned.</p>');
    },

    postToGoogleForm: function (success, url, data) {
      $.ajax({
          url: url,
          data: data,
          type: "POST",
          dataType: "xml",
          statusCode: {
              // success animate button
              0: function () {
                  success;
              },
              // success animate button
              200: function () {
                  success;
              },
          }
      });
    }


};

// on page click handlers


// function isEmail(email) {
//   var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//   return regex.test(email);
// }
//
// function animateMainButton(el) {
//   $(el).removeClass('button-primary').toggleClass('button-success').prop("disabled",true);
//   $(el).html('<span class="inner" style="opacity: 0; padding-left: 21.5px; padding-right: 21.5px"><i class="fa fa-check" aria-hidden="true"></i> Yay!</span>');
//   $(el).find('.inner').animate({
//     'opacity': 1,
//     'padding-left': '0px',
//     'padding-right': '0px',
//   }, 400);
// };
//
// function displayInvalidEmail(el) {
//   $(el).append('<p class="error-msg" style="color: #ffffff; margin: 0px;">That does not appear to be a valid email address.</p>');
// };
//
// // server response codes not yet working
// function serverError(el) {
//   $(el).append('<p>This is embarrasing. Our servers malfunctioned.</p>');
// };

$('#ButtonSubmit2').on('click', function(e) {
      // remove any error messages
      $('.error-msg').remove();
      // initialize variables
      var form = $('#ss-form2');
      var el = $(this);
      // ADD IN ALL FORM INPUTS HERE
      var name = $('#Name').val();
      var business = $('#Business').val();
      var email = $('#Email2').val();
      var phone = $('#Phone').val();
      // check if valid email address
      if (helper.isEmail(email)) {
        // post the form to Google Form
        helper.postToGoogleForm(helper.animateMainButton(el), 'https://docs.google.com/forms/d/1QppcYnRw-kxBej97b95ufqQLDFqo7uG4OBmEcMToBKA/formResponse', {
          // ADD IN FORM INPUT IDS HERE
          "entry.45640366": name,
          "entry.489371257": business,
          "entry.609193203": email,
          "entry.1326969094": phone,

        });
      }
      // if not a valid email address, display message
      else {
        console.log("invalid email");
        helper.displayInvalidEmail(form);
      }

});

$('#ButtonSubmit').on('click', function(e) {
      // remove any error messages
      $('.error-msg').remove();
      // initialize variables
      var form = $('#ss-form');
      var el = $(this);
      var email = $('#Email').val();
      // check if valid email address
      if (helper.isEmail(email)) {
        // post the form to Google Form
        helper.postToGoogleForm(helper.animateMainButton(el), 'https://docs.google.com/forms/d/1r-WaPM4Qb4C_u4RR-IM_wtUNO514Q-i9cIToXQ4Pn2E/formResponse', {
          "entry.1599441494": email
        });
      }
      // if not a valid email address, display message
      else {
        console.log("invalid email");
        helper.displayInvalidEmail(form);
      }

});
