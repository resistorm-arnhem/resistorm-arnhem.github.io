$(document).ready(function () {

    $(".image-section-file-picker").on('change', function(){
        var sectionId = $(this).data("section-id");
        fileToBase64($(this)[0], function (resp) {
            $("input[data-section-id='" + sectionId + "'][data-attr='image_base64']").val(resp);
        });
    });


});



function fileToBase64(element, callback) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        callback(reader.result);
    }
    reader.readAsDataURL(file);
}

