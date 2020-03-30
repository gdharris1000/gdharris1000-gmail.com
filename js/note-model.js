function Note(text){
    this.text = text;
};

Note.prototype.display = function(){
  return this.text;
}