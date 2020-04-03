function NoteList(){
    this.list = [];
    this.noteId = 0;
}

NoteList.prototype = (function(){

    function create(text){
        this.list.push(new Note(text, this.noteId));
        this.noteId++;
    }

    function display(){
        return this.list;
    }

    function findNote(id){
        var note;
        this.list.forEach(i => {
            if(i.id == id){
                note = i;
            }
        })
        return note;
    }

   return {
       create: create,
       display: display,
       findNote: findNote
   }

})();


//---------Alternative version------
//
// (function(exports){
//     function NoteList(){
//         this.list = [];
//     }

//     NoteList.prototype.create = function(text){
//         this.list.push(new Note(text));
//     }

//     NoteList.prototype.display = function(){
//         return this.list;
//     }

//     exports.NoteList = NoteList;

// })(this);