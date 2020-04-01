function showsListOnPage(){
    function htmlOutputDouble(){
        return "<ul><li><div>test</div></li></ul>"
    }
    displayHTML(htmlOutputDouble());
   assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>test</div></li></ul>", "list appears on page");
}

showsListOnPage();