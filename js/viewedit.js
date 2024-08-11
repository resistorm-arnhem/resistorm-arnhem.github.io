$(document).ready(function () {
    initInputFields();
});


function initInputFields() {
    $("input[data-attr='section_title']").on('change', function () {
        var id = $(this).data("section-id");
        var title = $(this).val();
        updateSectionTitle(id, title, function (resp) {
            toast.show();
        });
    });

    $("textarea[data-attr='section_intro']").on('change', function () {
        var id = $(this).data("section-id");
        var intro = $(this).val();
        updateSectionIntro(id, intro, function (resp) {
            toast.show();
        });
    });


    $("textarea[data-attr='paragraph_content").on('change', function () {
        var id = $(this).data("section-id");
        var content = $(this).val();
        updateParagraphContent(id, content, function (resp) {
            toast.show();
        });
    });

    $("input[data-attr='listing_title']").on('change', function () {
        var id = $(this).data("section-id");
        var title = $(this).val();
        updateListingTitle(id, title, function (resp) {
            toast.show();
        });
    })

    $("input[data-attr='item_strong']").on('change', function () {
        var id = $(this).data("item-id");
        var strong = $(this).val();
        updateListItem(id, strong, function (resp) {
            toast.show();
        });
    });

    $("textarea[data-attr='item_content']").on('change', function () {
        var id = $(this).data("item-id");
        var content = $(this).val();
        updateListItemContent(id, content, function (resp) {
            toast.show();
        });
    });
}