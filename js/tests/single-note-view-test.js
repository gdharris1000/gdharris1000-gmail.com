function NoteDouble(){
    this.text = "hello";
}

function initialisesWithNote(){
    noteView = new NoteView(new NoteDouble());

    assert.isTrue(noteView.note.text === "hello", "single note initialises with note");
}

function wrapsTextInHTML(){
    noteView = new NoteView(new NoteDouble());
    htmlOutput = noteView.htmlOutput();
    assert.isTrue(htmlOutput === "<div>hello</div>", 'single note html wrapping');
}

wrapsTextInHTML()
initialisesWithNote()