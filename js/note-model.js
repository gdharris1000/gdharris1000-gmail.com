function Note(text ,id){
    this.text = text;
    this.id = id;
};

Note.prototype = (function(){

  function display(){
    return this.text;
  }

  return{
    display: display
  }

})();

// Note.prototype.display = function(){
//   return this.text;
// }