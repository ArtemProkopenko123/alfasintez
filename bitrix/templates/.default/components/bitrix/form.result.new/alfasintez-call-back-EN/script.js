$( document ).ready(function() {


    $('.alfasintez-question-1 input').attr("placeholder", "Name *");
    $('.alfasintez-question-2 input').attr({placeholder: "Phone number *",phone:""});

// проверка формы на заполненность////////
    $('body').on('click', '.alfasintez-call-back-form .alfasintez-form-submit', function(event)
    {
        $('.alfasintez-call-back-form input.inputtext').removeClass("inputError");
        var $input_1 = $('.alfasintez-call-back-form .alfasintez-question-1 input.inputtext'),
            $input_2 = $('.alfasintez-call-back-form .alfasintez-question-2 input.inputtext');

        if($input_1.val() == "" ||  $input_1.val().length < 3 ) {
            $input_1.attr("placeholder", "Name *").addClass("inputError");
            event.preventDefault();
        } else {$(this).attr("disable", true);}

        if($input_2.val() == "" || $input_2.val().length < 10 || $input_2.val().length > 15) {
            $input_2.attr("placeholder", "Phone number *").addClass("inputError");
            event.preventDefault();
        } else {$(this).attr("disable", true);}


    });
    /* ------------------ ОТМЕНА ВВОДА БУКВ В INPUT PHONE ----------------------------*/
    $(document).on("keydown", ".inputtext[phone]", function(event) {

        // Разрешаем нажатие клавиш backspace, del, tab и esc и +
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 107 || event.keyCode == 187 ||
            // Разрешаем выделение: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем клавиши навигации: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
        } else {
            // Запрещаем всё, кроме клавиш цифр на основной клавиатуре, а также Num-клавиатуре
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });
//---------------------------ДОБАВЛЕНИЕ + В ПОЛЕ ТЕЛЕФОНА-------------------------//
    $( ".inputtext[phone]" ).focusin(function() {
        var $inputVal = $(this);
    if($inputVal.val() == "") {
        $inputVal.val("+");
    }
    });

});