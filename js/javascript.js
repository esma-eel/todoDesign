$('.button-collapse').sideNav({
    edge: 'right', // Choose the horizontal origin
    //closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

var el = document.querySelector('.custom-scrollbar');
Ps.initialize(el);

$(function () {


    $(".sticky").sticky({
        topSpacing: 0
        , zIndex: 2
        , stopper: "#footeri"
    });


    $('[data-toggle="tooltip"]').tooltip();
    $('.datepicker').pickadate({
        monthsFull: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        monthsShort: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        weekdaysFull: ['شنبه', 'یک شنبه', 'دو شنبه', 'سه شنبه', 'چهار شنبه', 'پنج شنبه', 'جمعه'],
        weekdaysShort: ['ش', '1ش', '2ش', '3ش', '4ش', '5ش', 'جمعه'],
        showMonthsShort: true,
        today: '',
        clear: 'پاک کردن',
        close: 'لغو',
        labelMonthNext: 'برو به ماه بعد',
        labelMonthPrev: 'برو به ماه قبل',
        labelMonthSelect: 'یک ماه از لیست انتخاب کن',
        labelYearSelect: 'یک سال از لیست انتخاب کن',
        selectMonths: true,
        selectYears: true,
        format: 'شما انتخاب کردید: dddd, dd mmm, yyyy',
        min: new Date(1390,12,12),
        max: new Date(1400,12,12),
        selectYears: 15,
        min: [1390,3,20],
        max: [1400,7,14],


    });
    $.extend($.fn.pickadate.defaults, {
        monthsFull: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        weekdaysShort: ['1ش', '2ش', '3ش', '4ش', '5ش', 'جمعه', 'ش'],
        today: 'امروز\'سلام',
        clear: 'پاک کردن',
        formatSubmit: 'yyyy/mm/dd'
    });


    $('#input_starttime').pickatime({
        // 12 or 24 hour
        twelvehour: true,
        // Light or Dark theme
        /*darktheme: true*/
        Done : 'تمام'
    });


    $(document).on('click', '.changeTo', function (event) {
        /*check if collapsse setting is opoen then just change the name and scroll to it again*/
        var acollapse = $('#acollapse');
        var collapseSetting = $('#collapseSetting');

        var input = $('<input />', {
            'type': 'text',
            'name': 'unique',
            'class': 'changeTo2',
            'value': $(this).html()
        });
        $(this).parent().append(input);
        $('#editWork').text($(this).html());
        $(this).remove();
        input.focus();

        acollapse.removeAttr('href');
        acollapse.removeAttr('data-toggle');
        acollapse.removeAttr('aria-expanded');
        collapseSetting.attr('aria-expanded','true');
        acollapse.removeAttr('href');
        $('#editWork').text($(this).val());

    });

    $(document).on('blur', '.changeTo2', function () {
        if ($(this).val() == ""){
            $(this).parent().append($('<span class="changeTo"/>').html("بدون نام"));
        }
        $(this).parent().append($('<span class="changeTo"/>').html($(this).val()));
        $('#editWork').text($(this).val());
        $(this).remove();
        $('html, body').scrollTo('#collapseSetting');
        /*$('#collapseSetting').removeClass('show').attr('aria-expanded','false');
        $('#acollapse').attr('aria-expanded','false');*/
    });












});