$(document).ready(function () {
    initCreate();
});


function initCreate() {
    $("#btn_create_topic").on('click', function () {
        var data = {};
        data["name"] = $("#input_topic_name").val();
        $.ajax({
            url: "/Topics/CreateNewTopicAsync",
            contentType: "application/json; charset=utf-8",
            data: data
        }).done(function (resp) {
            $("#input_topic_name").val('');
        });
    });


    $("#btn_create_post_topic").on('click', function () {
        var data = {};
        data["postId"] = $("#post_select").val();
        data["topicId"] = $("#topic_select").val();
        $.ajax(
            {
                url: "/Topics/CreateNewPostTopicAsync",
                contentType: "application/json; charset=utf-8",
                data: data
            }).done(function (resp) {

            });
    });
}