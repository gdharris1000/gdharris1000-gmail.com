function NoteView(note){
    this.note = note;
}

NoteView.prototype = (function(){

    function htmlOutput(){
        return "<div>" + this.note.text + "</div>"
    }

    return{
        htmlOutput: htmlOutput
    }

})();