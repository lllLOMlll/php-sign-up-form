$(document).ready(function() {
  var errorColor = "#c11717"; /* RED */
  var validColor = "#00ff00"; /* GREEN */
  var defaultColor = "#808080"; /* GRAY */

/********************************************************************************************************
                                          FORM VALIDATION
 ********************************************************************************************************/
  /* setting up an event handler for when the form is submitted */
 $("form").submit(function() {
  var fname = $("input[name='fname']"),
  lname = $("input[name='lname']"),
  gender = $("input[name='gender']"),
  age = $("input[name='age']"),
  username = $("input[name='username']"),
  password = $("input[name='password']"),
  passwordCnf = $("input[name='passwordCnf']"),
  newsletter = $("input[name='newsletter']") 


  /* add other fields of the form */
  isValidated = true,
  formValue = "";

/********************************************************************************************************
                                             RESET
 ********************************************************************************************************/
  $('#reset').click(function() {
    // Hide the span
    $('span').hide();

    // RESET COLOR AND BOX SHADOW
    
    // Gender 
    $(gender).parent().parent().find('span').hide();
  // Remove outline from the radio button that is not checked
    $('input[name="gender"]:not(:checked)').css({
      'outline': 'none'
    });
    $('input[name="gender"]:checked').css({
      'outline': 'none'
    });



    // Last name
    $(lname).css({
      'border-color': '',
      'box-shadow': ''
    });

    // First name
    $(fname).css({
      'border-color': '',
      'box-shadow': ''
    });

    // Age
    $(age).css({
      'border-color': '',
      'box-shadow': ''
    });

    // Username
    $(username).css({
      'border-color': '',
      'box-shadow': ''
    });

    // Password
    $(password).css({
      'border-color': '',
      'box-shadow': ''
    });


    // Password confirmation
    $(passwordCnf).css({
      'border-color': '',
      'box-shadow': ''
    });

    // Country
    var country = $("#country");

    country.css({
      'border-color': '',
      'box-shadow': ''
    });

    country.parent().parent().find('span').hide();



    // reset the isValidated variable
    isValidated = true;
  });

/********************************************************************************************************
                                          FIELDS VALIDATION
 ********************************************************************************************************/
/************* GENDER  *************/
  if (!gender.is(':checked')) {
    $(gender).parent().parent().find('span').text("Gender is required.");
    $(gender).parent().parent().find('span').show("slow");
    $('.radio-male, .radio-female').css({
     'outline': '1px solid ' + errorColor
   });
    isValidated = false;
  } else {
    $(gender).parent().parent().find('span').hide();
  // Remove outline from the radio button that is not checked
    $('input[name="gender"]:not(:checked)').css({
      'outline': 'none'
    });
  // Apply a green outline only to the checked radio button
    $('input[name="gender"]:checked').css({
      'outline': '1px solid ' + validColor,
      'border-color': '',
      'box-shadow': ''
    });
  }




/************ LAST NAME ************/
  if ($(lname).val().length < 2 && $(lname).val().length != 0) {
    $(lname).next().text("Last Name cannot be less than 2 char.");
    $(lname).next().show("slow");
    $(lname).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  } else if ($(lname).val().length == 0) {
    $(lname).next().text("Last name is required.");
    $(lname).next().show("slow");
    $(lname).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  } else if (!/^[a-zA-Z\-]+$/.test($(lname).val())) {
    $(lname).next().text("Last name can only contain letters and hyphen.");
    $(lname).next().show("slow");
    $(lname).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  }

/************ FIRST NAME ************/
  if ($(fname).val().length < 2 && $(fname).val().length != 0) {
    $(fname).next().text("First Name cannot be less than 2 char.");
    $(fname).next().show("slow");
    $(fname).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  } else if ($(fname).val().length == 0) {
    $(fname).next().text("First name is required.");
    $(fname).next().show("slow");
    $(fname).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  } else if (!/^[a-zA-Z\-]+$/.test($(fname).val())) {
    $(fname).next().text("First name can only contain letters and hyphen.");
    $(fname).next().show("slow");
    $(fname).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  }

/************* AGE  *************/
  if ($(age).val() == "") {
    $(age).next().text("Age is a required field");
    $(age).next().show("slow");
    $(age).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  } else if ($(age).val() < 0) {
    $(age).next().text("Age cannot be a negative number");
    $(age).next().show("slow");
    $(age).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  } else if ($(age).val() == 0 || $(age).val() < 18) {
    $(age).next().text("You must be over 18!");
    $(age).next().show("slow");
    $(age).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  } else if ($(age).val() > 120) {
    $(age).next().text("You are over 120 years old. Really???");
    $(age).next().show("slow");
    $(age).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  }


/************* USERNAME  *************/
  if ($(username).val() =="") {
    $(username).next().text("Username is a required field");
    $(username).next().show("slow");
    $(username).css({
     'border-color': errorColor,
     'box-shadow': 'none'
   });
    isValidated = false;
  } else if ($(username).val().length < 6 && $(username).val().length != 0) {
    $(username).next().text("Username must be at least 6 characters");
    $(username).next().show("slow");
    $(username).css({
     'border-color': errorColor,
     'box-shadow': 'none'
   });
    isValidated = false;
  }

/************* PASSWORD  *************/
  if ($(password).val() == "") {
    $(password).next().text("Password is a required field");
    $(password).next().show("slow");
    $(password).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  } else if ($(password).val().length < 8) {
    $(password).next().text("Password must contain at least 8 characters");
    $(password).next().show("slow");
    $(password).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  } else if (!/[!@#$%^&*]/.test($(password).val()) || !/[A-Z]/.test($(password).val())) {
    $(password).next().text("At least one special character and one uppercase");
    $(password).next().show("slow");
    $(password).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  }


/************* PASSWORD CONFIRMATION  *************/
  if ($(passwordCnf).val() == "") {
    $(passwordCnf).next().text("Confirmation password is a required field");
    $(passwordCnf).next().show("slow");
    $(passwordCnf).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  } else if ($(passwordCnf).val() != $(password).val()) {
    $(passwordCnf).next().text("Passwords do not match");
    $(passwordCnf).next().show("slow");
    $(passwordCnf).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  }


/************* COUNTRY  *************/
  var country = $("#country");

  if (country.val() == "") {
    country.parent().parent().find('span').text("Country is a required field");
    country.parent().parent().find('span').show("slow");
    country.css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  }




/************* NEWSLETTER  *************/

/********************************************************************************************************
                                          DISPLAYING THE FORM
 ********************************************************************************************************/

  if (isValidated) {
    formValue += "> Form submitted <" + "\n\n";
    formValue += "Last Name:  " + $(lname).val() + "\n";
    formValue += "First Name:  " + $(fname).val() + "\n";
    formValue += "Age:  " + $(age).val() + "\n";
    formValue += "Username:  " + $(username).val() + "\n"
    if (newsletter.is(':checked')) {
      formValue += "Newsletter subscription :  YES"
    } else {
      formValue += "Newsletter subscription :  NO"
    }


    isValidated = confirm(formValue + "\n\nAre you sure you want to submit this form?\n");
  }

  return isValidated;
});

 /********************************************************************************************************
                                           FOCUS AND BLUR (ORANGE)
 ********************************************************************************************************/
$(fname).add(lname).add(age).add(username).add(password).add(passwordCnf).add(country).focus(function() {
  if (this.id !== 'country') {
    $(this).next().hide("slow");
  }
  $(this).css({
    'border-color': '#ffa500', /* ORANGE */
    '-moz-box-shadow' : '1px 1px 10px #ffA500',  
    '-webkit-box-shadow' : '1px 1px 10px #ffA500', 
    'box-shadow': '1px 1px 10px #ffa500'
  });
});

$(fname).add(lname).add(age).add(username).add(password).add(passwordCnf).add(country).blur(function() {
  $(this).css({
    // 'border-color': '', /* Remove the border color */
    // '-moz-box-shadow' : '', /* Remove the Firefox box shadow */ 
    // '-webkit-box-shadow' : '', /* Remove the Chrome box shadow */ 
    // 'box-shadow': '' /* Remove the standard box shadow */
  });
});





 /********************************************************************************************************
                                           BLUR
 ********************************************************************************************************/
 /************* GENDER  *************/


 /************ LAST NAME ************/
$(lname).blur(
  function() {
    if ($(lname).val().length < 2 && $(lname).val().length != 0) {
      $(lname).next().text("Last Name cannot be less than 2 char.");
      $(lname).next().show("slow");
      $(lname).css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else if ($(lname).val().length == 0) {
      $(lname).next().text("Last name is required.");
      $(lname).next().show("slow");
      $(lname).css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else if (!/^[a-zA-Z\-]+$/.test($(lname).val())) {
      $(lname).next().text("Last name can only contain letters and hyphen.");
      $(lname).next().show("slow");
      $(lname).css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else {
      $(this).next().hide("slow");
      $(this).css({
        'border-color': validColor,
        'box-shadow': 'none'
      });
    }
  });

 /************ FIRST NAME ************/
$(fname).blur(
  function() {
    if ($(fname).val().length < 2 && $(fname).val().length != 0) {
      $(fname).next().text("First Name cannot be less than 2 char.");
      $(fname).next().show("slow");
      $(fname).css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else if ($(fname).val().length == 0) {
      $(fname).next().text("First name is required.");
      $(fname).next().show("slow");
      $(fname).css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else if (!/^[a-zA-Z\-]+$/.test($(fname).val())) {
      $(fname).next().text("Last name can only contain letters and hyphen.");
      $(fname).next().show("slow");
      $(fname).css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else {
      $(this).next().hide("slow");
      $(this).css({
        'border-color': validColor,
        'box-shadow': 'none'
      });
    }
  });

 /************ AGE ************/
$(age).blur(function() {
  if ($(age).val() == ""){
    $(age).next().text("Age is a required");
    $(age).next().show("slow");
    $(age).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
  } else if ($(age).val() < 0){
    $(age).next().text("Age cannot be a negative number");
    $(age).next().show("slow");
    $(age).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
  } else if ($(age).val() == 0 || $(age).val() < 18){
    $(age).next().text("You must be over 18!");
    $(age).next().show("slow");
    $(age).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
  } else if ($(age).val() > 120) {
    $(age).next().text("You are over 120 years old. Really???");
    $(age).next().show("slow");
    $(age).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
  } else {
    $(this).next().hide("slow");
    $(this).css({
      'border-color': validColor,
      'box-shadow': 'none'
    });
  }
});

 /************ USERNAME ************/
$(username).blur(
  function() {
    if ($(username).val() =="") {
      $(username).next().text("Username is a required field");
      $(username).next().show("slow");
      $(username).css({
       'border-color': errorColor,
       'box-shadow': 'none'
     }) ;
    } else if ($(username).val().length < 6 && $(username).val().length != 0) {
      $(username).next().text("Username must be at least 6 characters");
      $(username).next().show("slow");
      $(username).css({
       'border-color': errorColor,
       'box-shadow': 'none'
     });
    } else {
      $(this).next().hide("slow");
      $(this).css({
        'border-color': validColor,
        'box-shadow': 'none'
      });
    }
  });

 /************ PASSWORD ************/
$(password).blur(
  function() {
    if ($(password).val() == "") {
      $(password).next().text("Password is a required field");
      $(password).next().show("slow");
      $(password).css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else if ($(password).val().length < 8) {
      $(password).next().text("Password must contain at least 8 characters");
      $(password).next().show("slow");
      $(password).css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else if (!/[!@#$%^&*]/.test($(password).val()) || !/[A-Z]/.test($(password).val())) {
      $(password).next().text("At least one special character and one uppercase");
      $(password).next().show("slow");
      $(password).css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else {
      $(this).next().hide("slow");
      $(this).css({
        'border-color': validColor,
        'box-shadow': 'none'
      });
    }
  });

 /************ PASSWORD CONFIRMATION ************/
$(passwordCnf).blur(
  function() {
    if ($(passwordCnf).val() == "") {
      $(passwordCnf).next().text("Confirmation password is a required field");
      $(passwordCnf).next().show("slow");
      $(passwordCnf).css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else if ($(passwordCnf).val() != $(password).val()) {
      $(passwordCnf).next().text("Passwords do not match");
      $(passwordCnf).next().show("slow");
      $(passwordCnf).css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else {
      $(this).next().hide("slow");
      $(this).css({
        'border-color': validColor,
        'box-shadow': 'none'
      });
    }
  });


  /************ COUNTRY ************/

var country = $("#country");
$(country).blur(
  function() {
    if (country.val() == "") {
      country.parent().parent().find('span').text("Country is a required field");
      country.parent().parent().find('span').show("slow");
      country.css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else {
      $(this).next().hide("slow");
      $(this).css({
        'border-color': validColor,
        'box-shadow': 'none'
      });
    }
  });

  /************ NEWSLETTER ************/


 /********************************************************************************************************
                                           KEYPRESS
 ********************************************************************************************************/
$(fname).add(lname).add(age).add(username).keypress(function() {
  if ($(this).val().length < 1) {
    $(this).css({
      'border-color': errorColor,
      '-moz-box-shadow' : '1px 1px 10px #F44336',
      'webkit-box-shadow' : '1px 1px 10px #F44336',
      'box-shadow': '1px 1px 10px #F44336',   /* RED */
    });
  } else {
    $(this).css({
      'border-color': validColor,
      '-moz-box-shadow' : '1px 1px 10px #00FF00',
      'webkit-box-shadow' : '1px 1px 10px #00FF00',
      'box-shadow': '1px 1px 10px #00FF00',   /* GREEN */
    });
  }
});

});
