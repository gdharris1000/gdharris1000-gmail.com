var assert = {
    isTrue: function(assertionToCheck, name){
        if(!assertionToCheck){
            throw new Error("Assertion failed: " + name + " is not truthy");
        }
        else{
            console.log(name + " passed!");
        }
    }
}