$(document).ready(function () {
    $("#btn_create_modal_post").on('click', createNewModalPost);
});


function createNewModalPost() {
    var title = $("#input_post_title").val();
    var subtitle = $("#input_post_subtitle").val();
    var author = $("#input_post_author").val();
    var summary = $("#txt_post_summary").val();

    createNewPost(title, subtitle, author, summary, function (resp) {
        location.reload();
    });
}