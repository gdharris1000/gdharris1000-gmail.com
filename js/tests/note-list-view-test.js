function instanceReceivesNoteList(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.noteList.list.length === 0, "instance of note list view receives a note list");
};

function htmlOutput(){
    var noteList = new NoteList();
    noteList.create("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet mauris tortor. Aenean tortor urna, molestie at posuere ut, imperdiet et mauris. Donec tincidunt massa id iaculis blandit. Etiam faucibus pellentesque sapien vitae pharetra. Maecenas suscipit nisl ut est luctus, varius malesuada turpis blandit. Ut interdum eros et maximus consectetur. Nam dapibus feugiat lacinia. Nunc porta congue quam, eget hendrerit neque bibendum sit amet. Suspendisse sapien ipsum, rhoncus ut tincidunt ut, sollicitudin porttitor lorem. Curabitur dictum placerat leo, at consequat elit lobortis vel. Quisque iaculis nisl id risus dignissim consectetur. Ut ultrices leo at dapibus accumsan. Fusce vitae eros convallis, suscipit turpis sit amet, vulputate justo. Fusce quis venenatis sem, nec tempus lectus. Nulla posuere leo et odio porttitor, ac posuere erat aliquet. Vivamus euismod aliquet metus, at dapibus libero mattis et.");
    var noteListView = new NoteListView(noteList);
    var htmlOutput = noteListView.htmlOutput();
    assert.isTrue(htmlOutput === "<ul><li><div><a href='#note/0'>Lorem ipsum dolor si...</a></div></li></ul>", "html output");
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