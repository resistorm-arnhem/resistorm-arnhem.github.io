function createNewPost(title, subtitle, author, summary, callback) {
    var data = {};
    data["title"] = title;
    data["author"] = author;
    data["subtitle"] = subtitle;
    data["summary"] = summary;
    $.ajax({
        url: "/CreatePostAsync",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        } else {
            console.log(resp["id"]);
        }
    });
}

function updateBlogPost(id, title, subtitle, author, summary, callback) {
    var data = {};
    data["id"] = id;
    data["title"] = title;
    data["author"] = author;
    data["subtitle"] = subtitle;
    data["summary"] = summary;
    $.ajax({
        url: "/UpdatePostAsync",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}




function createNewParagraph(postId, content, header, intro, callback) {
    var data = {};
    data["postId"] = postId;
    data["content"] = content;
    data["header"] = header;
    data["intro"] = intro;
    $.ajax({
        url: "/CreateParagraphAsync",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        } else {
            console.log(resp["id"]);
        }
    });
}


function updateParagraphSection(sectionId, sectionIndex, sectionTitle, sectionIntro, content, callback) {
    var data = {};
    data["id"] = sectionId;
    data["index"] = sectionIndex;
    data["heading"] = sectionTitle;
    data["intro"] = sectionIntro;
    data["content"] = content;

    $.ajax({
        url: "/UpdateParagraphAsync",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}




function createNewListing(postId, isNumbered, title, header, intro, callback) {
    var data = {};
    data["postId"] = postId;
    data["isNumbered"] = isNumbered;
    data["title"] = title;
    data["intro"] = intro;
    data["header"] = header;
    $.ajax({
        url: "/CreateListingAsync",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        } else {
            console.log(resp["id"]);
        }
    });
}

function updateListingSection(sectionId, sectionIndex, sectionTitle, sectionIntro, title, isNumbered, callback) {
    var data = {};
    data["id"] = sectionId;
    data["index"] = sectionIndex;
    data["heading"] = sectionTitle;
    data["intro"] = sectionIntro;
    data["title"] = title;
    data["isNumbered"] = isNumbered;

    $.ajax({
        url: "/UpdateListingAsync",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}


function createNewListItem(listingId, strong, content, callback) {
    var data = {};
    data["listingId"] = listingId;
    data["strong"] = strong;
    data["content"] = content;
    $.ajax({
        url: "/CreateListItemAsync",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
        console.log(resp["id"]);
    });
}

function updateListingItem(itemId, index, strong, content, callback) {
    var data = {};
    data["id"] = itemId;
    data["index"] = index;
    data["strong"] = strong;
    data["content"] = content;
    $.ajax({
        url: "/UpdateListItemAsync",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}


function createNewCodeSnippet(postId, title, intro, language, content, callback) {
    var data = {};
    data["postId"] = postId;
    data["language"] = language;
    data["header"] = title;
    data["content"] = content;
    data["intro"] = intro;

    $.ajax({
        url: "/CreateCodeSnippetAsync",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
        console.log(resp["id"]);
    });
}


function updateCodeSnippetSection(sectionId, sectionIndex, sectionTitle, sectionIntro, language, content, callback) {
    var data = {};
    data["id"] = sectionId;
    data["index"] = sectionIndex;
    data["heading"] = sectionTitle;
    data["intro"] = sectionIntro;
    data["content"] = content;
    data["language"] = language;

    $.ajax({
        url: "/UpdateCodeSnippetAsync",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}


function createNewHeading(postId, heading, style, callback) {
    var data = {};
    data["postId"] = postId;
    data["heading"] = heading;
    data["style"] = style;

    $.ajax({
        url: "/CreateHeadingAsync",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
        console.log(resp["id"]);
    });
}

function updateHeadingSection(headingId, sectionIndex, content, styling, callback) {
    var data = {};
    data["id"] = headingId;
    data["index"] = sectionIndex;
    data["content"] = content;
    data["styling"] = styling;

    $.ajax({

        url: "/UpdateHeadingAsync",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}




function updatePostTitle(postId, title, callback) {
    var data = {
        "postId": postId,
       "title": title,
    };
    $.ajax({
        url: "/UpdatePostTitle",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}

function updatePostSubtitle(postId, subtitle, callback) {
    var data = {
        "postId": postId,
        "subtitle": subtitle,
    };
    $.ajax({
        url: "/UpdatePostSubtitle",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}

function updatePostSummary(postId, summary, callback) {
    var data = {
        "postId": postId,
        "summary": summary,
    };
    $.ajax({
        url: "/UpdatePostSummary",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}

function updatePostAuthor(postId, author, callback) {
    var data = {
        "postId": postId,
        "author": author,
    };
    $.ajax({
        url: "/UpdatePostAuthor",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}

function updateSectionTitle(id, title, callback) {
    var data = {
        "sectionId": id,
        "title": title,
    };
    $.ajax({
        url: "/UpdateSectionTitle",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}

function updateSectionIntro(id, intro, callback) {
    var data = {
        "sectionId": id,
        "title": title,
    };
    $.ajax({
        url: "/UpdateSectionIntro",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}

function updateParagraphContent(id, content, callback) {
    var data = {
        "sectionId": id,
        "content": content,
    };
    $.ajax({
        url: "/UpdateParagraphContent",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}

function updateListingTitle(id, title, callback) {
    var data = {
        "sectionId": id,
        "title": title,
    };
    $.ajax({
        url: "/UpdateListingTitle",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}

function updateListingIsNumbered(id, isNumbered, callback) {
    var data = {
        "sectionId": id,
        "isNumbered": isNumbered,
    };
    $.ajax({
        url: "/UpdateListingIsNumbered",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}

function updateListItemStrong(id, strong, callback) {
    var data = {
        "itemId": id,
        "strong": strong,
    };
    $.ajax({
        url: "/UpdateListItemStrong",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}

function updateListItemContent(id,content, callback) {
    var data = {
        "itemId": id,
        "content": content,
    };
    $.ajax({
        url: "/UpdateListItemContent",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}


function updateCodeSnippetContent(id,content, callback) {
    var data = {
        "sectionId": id,
        "content": content,
    };
    $.ajax({
        url: "/UpdateCodeSnippetContent",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}


function updateCodeSnippetLanguage(id,language, callback) {
    var data = {
        "sectionId": id,
        "language": language,
    };
    $.ajax({
        url: "/UpdateCodeSnippetLanguage",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}

function updateHeader(id,header, callback) {
    var data = {
        "sectionId": id,
        "content": header,
    };
    $.ajax({
        url: "/UpdateHeader",
        contentType: "application/json; charset=utf-8",
        data: data
    }).done(function (resp) {
        if (callback) {
            callback(resp);
        }
    });
}