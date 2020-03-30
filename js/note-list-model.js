function NoteList(){
    this.list = [];
}

NoteList.prototype.create = function(text){
    this.list.push(new Note(text));
}

NoteList.prototype.display = function (){
    return this.list;
}