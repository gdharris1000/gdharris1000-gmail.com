function instanciatesWithArray(){
    var noteList = new NoteList();
    assert.isTrue(noteList.list.length === 0, "instanciates with array");
}

function createsNote(){
    var noteList = new NoteList();
    noteList.create("yes");
    assert.isTrue(noteList.list[0].text === "yes", "creates a new note and adds it to the list");
}

function displayNotes(){
    var noteList = new NoteList();
    noteList.create("hello");
    noteList.create("hi")
    var notes = noteList.display();
    assert.isTrue(notes[0].text == "hello", "display notes1");
    assert.isTrue(notes[1].text == "hi", "display notes2");
}

function checkNotesHaveIds(){
    var noteList = new NoteList();
    noteList.create("hello");
    noteList.create("hi")
    assert.isTrue(noteList.list[0].id == 0, "check note id is 0");
    assert.isTrue(noteList.list[1].id == 1, "check note id is 1");
}

function testFindNote(){
    var noteList = new NoteList();
    noteList.create("hello");
    noteList.create("hi")
    assert.isTrue(noteList.findNote(0).text == "hello", "check find note");

}

instanciatesWithArray();
createsNote();
displayNotes();
checkNotesHaveIds();
testFindNote();