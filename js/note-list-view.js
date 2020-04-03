function NoteListView(noteList){
    this.noteList = noteList;
}

NoteListView.prototype = (function(){

    function htmlOutput(){
        if(this.noteList.list.length === 0){
            return "No notes, sorry";
        } 
        else {
            var htmlify = [];

            this.noteList.list.forEach(element => {
                htmlify.push("<li><div><a href='#note/" + element.id + "'>" + element.text.slice(0, 20) + "...</a></div></li>");
            });

            return "<ul>" + htmlify.join("") + "</ul>";
        }
    }

    return {
        htmlOutput: htmlOutput
    }

})();

// NoteListView.prototype = (function(exports){

//     function htmlOutput(){
//         if(this.noteList.list.length === 0){
//             return "No notes, sorry";
//         } 
//         else {
//             var htmlify = [];

//             this.noteList.list.forEach(element => {
//                 htmlify.push("<li><div>" + element.text + "</div></li>");
//             });

//             return "<ul>" + htmlify.join("") + "</ul>";
//         }
//     }

//     exports.htmlOutput = htmlOutput;

// })(this);