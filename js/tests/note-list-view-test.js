function instanceReceivesNoteList(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.noteList.list.length === 0, "instance of note list view receives a note list");
};

function htmlOutput(){
    var noteList = new NoteList();
    noteList.create("test");
    var noteListView = new NoteListView(noteList);
    var htmlOutput = noteListView.htmlOutput();
    assert.isTrue(htmlOutput === "<ul><li><div>test</div></li></ul>", "html output");
}

function htmlOutputNoNotes(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    var htmlOutput = noteListView.htmlOutput();
    assert.isTrue(htmlOutput === "No notes, sorry", "html output with no notes"); 
}

instanceReceivesNoteList();
htmlOutput();
htmlOutputNoNotes();