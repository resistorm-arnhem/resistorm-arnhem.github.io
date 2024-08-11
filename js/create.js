var listItemCount = 0;
var listingModal = null;
var paragraphModal = null;
var imagehModal = null;
var codeSnippethModal = null;
var headingModal = null;

$(document).ready(function () {
    initModals();
    $("#btn_to_paragraph").on('click', rawToParagraph);
    $("#btn_to_listing").on('click', rawToListing);
    $("#btn_add_input_list_item").on('click', function () {
        appendInputListItem("", "");
    });

    $("#btn_to_header").on('click', rawToHeading);
    $("#btn_to_code_snippet").on('click', rawToCodeSnippet);
    $("#btn_to_image").on('click', rawToImage);




    $("#btn_listing_submit").on('click', submitListing);
    $("#btn_paragraph_submit").on('click', submitParagraph);
    $("#btn_code_snippet_submit").on('click', submitCodeSnippet);
    $("#btn_heading_submit").on('click', submitHeading);
});


function initModals() {
    var emListing = document.getElementById("listing_modal");
    var emParagraph = document.getElementById("paragraph_modal");
    var emCodeSnippet = document.getElementById("code_snippet_modal");
    var emImage = document.getElementById("image_modal");
    var emHeading = document.getElementById("heading_modal");
    listingModal = bootstrap.Modal.getOrCreateInstance(emListing);
    paragraphModal = bootstrap.Modal.getOrCreateInstance(emParagraph);
    codeSnippethModal = bootstrap.Modal.getOrCreateInstance(emCodeSnippet);
    imageModal = bootstrap.Modal.getOrCreateInstance(emImage);
    headingModal = bootstrap.Modal.getOrCreateInstance(emHeading);
}

function submitCodeSnippet() {
    var postId = $("#hidden_blog_id").val();
    var title = $("#input_code_snippet_header").val();
    var intro = $("#txt_code_snippet_intro").val();
    var language = $("#input_language").val();
    var content = $("#txt_code_snippet_content").val();
    createNewCodeSnippet(postId, title, intro, language, content, function (resp) {
        $("#txt_raw").val("");
        codeSnippethModal.hide();
    });
}



function parseInputListItem(line) {
    if (line.search(":") != -1) {
        var parts = line.split(":");
        appendInputListItem(parts[0], parts[1]);
    } else {
        appendInputListItem("", line);
    }
}


function appendInputListItem(strong, content) {
    var eContainer = document.createElement("div");
    eContainer.setAttribute("class", "input-group mb-2");
    var eInput1 = document.createElement("input");
    eInput1.setAttribute("type", "text");
    eInput1.setAttribute("class", "form-control list-item-input-strong");
    eInput1.setAttribute("data-item-index", listItemCount);
    eInput1.setAttribute("placeholder", "strong");
    eInput1.setAttribute("value", strong);
    var eSpan = document.createElement("span");
    eSpan.setAttribute("class", "input-group-text");
    eSpan.innerHTML = ":";
    var eInput2 = document.createElement("input");
    eInput2.setAttribute("class", "form-control list-item-input-content");
    eInput2.setAttribute("type", "text");
    eInput2.setAttribute("placeholder", "content");
    eInput2.setAttribute("data-item-index", listItemCount);
    eInput2.setAttribute("value", content);
    eContainer.appendChild(eInput1);
    eContainer.appendChild(eSpan);
    eContainer.appendChild(eInput2);
    document.getElementById("input_list_item_container").appendChild(eContainer);
    listItemCount++;
}


function clearInputListItems() {
    $("#input_list_item_container").html('');
    listItemCount = 0;
}


function getRawLines() {
    var text = $("#txt_raw").val();
    var lines = text.split(/\r?\n|\r|\n/g);
    var items = [];
    for (const line of lines) {
        if (line.trim().length > 0) {
            if (!line.includes("Code kopiëren")) {
                items.push(line.trim());
            }
        }
    }
    return items;
}

function rawToListing() {
    var useTitle = document.getElementById("cb_section_title").checked;
    var useIntro = document.getElementById("cb_section_intro").checked;
    var useHeader = document.getElementById("cb_content_header").checked;

    var text = $("#txt_raw").val();
    var lines = text.split(/\r?\n|\r|\n/g);
    var items = [];
    for (const line of lines) {
        if (line.trim().length > 0) {
            items.push(line)
        }
    }

    if (useTitle) {
        console.log("Using title");
        $("#input_listing_header").val(items.shift());
    } else {
        $("input_listing_header").val("");
    }

    if (useIntro) {
        console.log("using intro");
        $("#txt_listing_intro").val(items.shift());
    } else {
        $("#txt_listing_intro").val("");
    }

    if (useHeader) {
        console.log("using header");
        $("#input_listing_title").val(items.shift());
    } else {
        $("#input_listing_title").val("");
    }

    clearInputListItems();
    listingModal.show();
    for (const line of items) {
        parseInputListItem(line);
    }
}

var postedListingId = null;

var postedItems = 0;
function submitListing() {
    var postId = $("#hidden_blog_id").val();
    createNewListing(postId, false, $("#input_listing_title").val(), $("#input_listing_header").val(), $("#txt_listing_intro").val()
        , function (resp) {
            var listingId = resp['contentId'];
            postedListingId = resp['contentId'];
            postedItems = 0;
            if (listingId && listingId > 0) {
                postNextListItem();
            }
        });
}

function postNextListItem() {
    if (postedItems < listItemCount) {
        var content = $("input.list-item-input-content[data-item-index='" + postedItems + "']").val();
        var strong = $("input.list-item-input-strong[data-item-index='" + postedItems + "']").val();
        if (postedListingId) {
            postedItems += 1;
            createNewListItem(postedListingId, strong, content, function (resp) {
                postNextListItem();
            });
        }
    } else {
        listingModal.hide();
        $("#txt_raw").val('');
    }
}


// PARAGRAPH
function rawToParagraph() {
    var useTitle = document.getElementById("cb_section_title").checked;
    var useIntro = document.getElementById("cb_section_intro").checked;

    var text = $("#txt_raw").val();
    var lines = text.split(/\r?\n|\r|\n/g);
    var items = [];
    for (const line of lines) {
        if (line.trim().length > 0) {
            items.push(line)
        }
    }

    if (useTitle && items.length > 1) {
        $("#input_paragraph_header").val(items.shift());
    } else {
        $("#input_paragraph_header").val("");
    }

    if (useIntro && items.length > 1) {
        $("#input_paragraph_intro").val(items.shift());
    } else {
        $("#input_paragraph_intro").val("");
    }
    var content = items.shift();
    while (items.length > 0) {
        content = content + "\n" + items.shift();
    }

    $("#txt_paragraph_content").val(content);
    paragraphModal.show();
}


function submitParagraph() {
    var postId = $("#hidden_blog_id").val();
    var title = $("#input_paragraph_header").val();
    var intro = $("#input_paragraph_intro").val();
    var content = $("#txt_paragraph_content").val();

    createNewParagraph(postId, content, title, intro, function (resp) {
        $("#input_paragraph_header").val("");
        $("#input_paragraph_intro").val("");
        $("#txt_paragraph_content").val("");
        $("#txt_raw").val("");
        paragraphModal.hide();
    });


}


// CODE SNIPPET
function rawToCodeSnippet() {
    var lines = getRawLines();
    var useTitle = document.getElementById("cb_section_title").checked;
    var useIntro = document.getElementById("cb_section_intro").checked;

    if (useTitle && lines.length > 2) {
        $("#input_code_snippet_header").val(lines.shift());
    } else {
        $("#input_code_snippet_header").val("");
    }

    if (useIntro && lines.length > 2) {
        $("#txt_code_snippet_intro").val(lines.shift());
    } else {
        $("#txt_code_snippet_intro").val("");
    }

    if (lines.length > 1) {
        $("#input_language").val(lines.shift());
    } else {
        $("#input_language").val("");
    }
    if (lines.length > 0) {
        var content = lines.shift();
        while (lines.length > 0) {
            content = content + "\n" + lines.shift();
        }
        $("#txt_code_snippet_content").val(content);
    }
    codeSnippethModal.show();
}

function rawToImage() { }

function rawToHeading() {
    var lines = getRawLines();
    if (lines.length > 0) {
        $("#input_heading_content").val(lines[0]);
    }
    headingModal.show();
}

function submitHeading() {
    var postId = $("#hidden_blog_id").val();
    var heading = $("#input_heading_content").val();
    var styling = $("#select_heading_style").val();
    createNewHeading(postId, heading, styling, function (resp) {
        $("#txt_raw").val("");
        headingModal.hide();
    });
}