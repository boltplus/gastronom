$(".phone-mask").mask("99999999999");

$(document).ready(function() {
    $('.select_another_region').on('click', function() {
        var web_ccode = $(this).attr('data-ccode');
        var region_title = $(this).attr('data-title');

        console.log(web_ccode);

        $('#change_region').text('в '+region_title);
        $('#web_ccode').val(web_ccode);
        $('#myModal').modal('hide');
    });
});

