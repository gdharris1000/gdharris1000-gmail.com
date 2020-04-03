function instanciatesWithText(){
    var note = new Note("Hello world", 0);
    assert.isTrue(note.text === "Hello world", "instanciates with text");
}

function instanciatesWithId(){
    var note = new Note("Hello world", 0);
    assert.isTrue(note.id === 0, "instanciates with id");
}

function returnsNoteText(){
    var note = new Note("Hello world");
    var noteText = note.display();
    assert.isTrue(noteText === "Hello world", "returns note text")
}


instanciatesWithText();
instanciatesWithId();
returnsNoteText();