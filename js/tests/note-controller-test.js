
function showsListOnPage(){
    function htmlOutputDouble(){
        return "<ul><li><div><a href='#note/0'>Lorem ipsum dolor si...</a></div></li></ul>"
    }
    displayHTML(htmlOutputDouble());
   assert.isTrue(document.getElementById("app").innerHTML === '<ul><li><div><a href="#note/0">Lorem ipsum dolor si...</a></div></li></ul>', "list appears on page");
}

function displayNoteOnPage(){
    note = new Note("hello", 0);

    displayNote(note);
    assert.isTrue(document.getElementById("app").innerHTML === "<div>hello</div>", "note appears on page")
}



//showsListOnPage();
//displayNoteOnPage();