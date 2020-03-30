function instanciatesWithText(){
    var note = new Note("Hello world");
    assert.isTrue(note.text === "Hello world", "instanciates with text");
}

function returnsNoteText(){
    var note = new Note("Hello world");
    var noteText = note.display();
    assert.isTrue(noteText === "Hello world", "returns note text")
}


instanciatesWithText();
returnsNoteText();