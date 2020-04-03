
var noteList = new NoteList;

(function(exports){
    function NoteController(noteList){
        this.noteList = noteList;
    }

    NoteController.prototype.displayHTML = function (notes){
        document.getElementById("app").innerHTML = notes;
    }

    NoteController.prototype.displayNote = function (note){
        noteView = new NoteView(note);
        document.getElementById("app").innerHTML = noteView.htmlOutput();
    }

   
    exports.NoteController = NoteController;
    
})(this);



noteList.create("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est nulla, imperdiet in nunc eget, gravida aliquet dolor. Etiam mauris arcu, eleifend consequat imperdiet id, semper non neque. Aliquam vitae sapien feugiat, ullamcorper magna eget, finibus turpis. Nulla justo felis, tincidunt et lorem nec, consectetur placerat est. Donec a purus vestibulum, malesuada ipsum nec, scelerisque tortor. Etiam porttitor magna vitae magna pellentesque luctus. Aenean ac nibh neque. Donec vulputate placerat fermentum. Aenean dolor est, sollicitudin a pellentesque eu, porttitor a sapien. Morbi tincidunt leo commodo maximus mattis. Suspendisse iaculis blandit accumsan.");
var noteView = new NoteListView(noteList);
var noteController = new NoteController(noteList);


    window.addEventListener("hashchange", function(){
       note = noteController.noteList.findNote(window.location.hash.split("#")[1].substring(5)); 
       noteController.displayNote(note);
    } );  
   
window.onload = noteController.displayHTML(noteView.htmlOutput());

document.getElementById("text").addEventListener("submit", function(){
    event.preventDefault();
    console.log(event.target[0].value);
})


// window.addEventListener("hashchange", noteList.findNote(window.location.hash.split("#")[1].substring(5)));   
// window.addEventListener("hashchange", console.log(window.location.hash.split("#")[1].substring(5)));   
