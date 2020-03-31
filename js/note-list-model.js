function NoteList(){
    this.list = [];
}

NoteList.prototype = (function(){

    function create(text){
        this.list.push(new Note(text));
    }

    function display(){
        return this.list;
    }

   return {
       create: create,
       display: display
   }

})();

// NoteList.prototype.create = function(text){
//     this.list.push(new Note(text));
// }

// NoteList.prototype.display = function (){
//     return this.list;
// }