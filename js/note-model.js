function Note(text){
    this.text = text;
};

Note.prototype = (function(){

  function display(){
    return this.text;
  }

  return{
    display: display
  }

})()
// Note.prototype.display = function(){
//   return this.text;
// }