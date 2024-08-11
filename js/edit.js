var modalParagraph = null;
var modalListing = null;
var modalCodeSnippet = null;
var modalImage = null;
var modalHeading = null;
var modalDelete = null;


$(document).ready(function () {
    var elParagraph = document.getElementById("modal_paragraph");
    var elListing = document.getElementById("modal_listing");
    var elCodeSnippet = document.getElementById("modal_code_snippet");
    var elHeading = document.getElementById("modal_heading");
    var elDelete = document.getElementById("modal_delete");
    var elImage = document.getElementById("modal_image");
    modalParagraph = bootstrap.Modal.getOrCreateInstance(elParagraph);
    modalListing = bootstrap.Modal.getOrCreateInstance(elListing);
    modalCodeSnippet = bootstrap.Modal.getOrCreateInstance(elCodeSnippet);
    modalImage = bootstrap.Modal.getOrCreateInstance(elImage);
    modalHeading = bootstrap.Modal.getOrCreateInstance(elHeading);
    modalDelete = bootstrap.Modal.getOrCreateInstance(elDelete);

    $(".btn-edit-section").on('click', function () {
        var sectionId = $(this).data("section-id");
        var contentType = $(this).data("content-type");
        openInModal(sectionId ,contentType);
    });

    $(".btn-delete-section").on("click", function () {
        var sectionId = $(this).data("section-id");
        $("#btn_confirm_delete").data("section-id", sectionId);
        modalDelete.show();
    });

    $.ajax({
        url: "/Home/GetPostsByTopic",
    }).done(function (resp) {
        $("#blogs_by_topic_col").html($(resp));
    });
        
   
});








function openInModal(id, ctype) {
    if (ctype == "Paragraph") {
        loadParagraphToModal(id);
        modalParagraph.show();
    } else if (ctype == "Listing") {
        loadListingToModal(id);
    } else if (ctype == "CodeSnippet") {
        modalCodeSnippet.show();
    } else if (ctype == "Heading") {
        modalHeading.show();
    }
}


function loadParagraphToModal(id) {
    var sectionTitle = getInputValue(id, "section_title");
    var sectionIntro = getInputValue(id, "section_intro");
    var sectionIndex = getInputValue(id, "section_index");
    var content = getInputValue(id, "paragraph_content");
    $("#input_paragraph_section_title").val(sectionTitle);
    $("#input_paragraph_section_intro").val(sectionIntro);
    $("#input_paragraph_content").val(content);


}

function loadListingToModal(id) {
    var sectionTitle = getInputValue(id, "section_title");
    var sectionIntro = getInputValue(id, "section_intro");
    var sectionIndex = getInputValue(id, "section_index");
    $("[data-section-id='" + id + "'][data-attr='item_strong']").each(function () {
        var itemId = $(this).data("item-id");
        appendListItem($("[data-item-id='" + itemId + "'][data-attr='item_strong']").text(), $("[data-item-id='" + itemId + "'][data-attr='item_content']").text(), itemId);
    });
    modalListing.show();
}

function clearListItems() {
    $("#listing_modal_items_container").html('');
}



function appendListItem(strong, content, itemId) {
    var el1 = document.createElement("dt");
    el1.classList.add("col-sm-3");
    var in1 = document.createElement("input");
    in1.classList.add("form-control");
    var attr1 = document.createAttribute("type");
    attr1.value = "text";
    var attr2 = document.createAttribute("value");
    attr2.value = strong.trim();
    var attr3 = document.createAttribute("data-item-id")
    attr3.value = itemId;
    in1.attributes.setNamedItem(attr1);
    in1.attributes.setNamedItem(attr2);
    in1.attributes.setNamedItem(attr3);
    el1.appendChild(in1);
    var el2 = document.createElement("dd");
    var in2 = document.createElement("textarea");
    in2.classList.add("form-control");
    var at1 = document.createAttribute("data-item-id");
    var at2 = document.createAttribute("rows");
    at1.value = itemId;
    at2.value = 2;
    in2.attributes.setNamedItem(at1);
    in2.attributes.setNamedItem(at2);
    el2.classList.add("col-sm-9");
    el2.appendChild(in2);
    in2.innerHTML = content.trim();
    document.getElementById("listing_modal_items_container").appendChild(el1);
    document.getElementById("listing_modal_items_container").appendChild(el2);

}

function getInputValue(sectionId, attrName) {
    return $("input[data-section-id='"+sectionId+"'][data-attr='"+attrName+"']").val();
}
