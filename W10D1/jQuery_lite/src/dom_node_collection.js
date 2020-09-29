class DOMNodeCollection{
    constructor(array){
        // the passed-in array is
        // an array where each element is a node.

        // Each node is an HTML DOM element.
        this.array = array;
    }

    /*
        If it receives an argument,
        this will become the innerHTML of 
        each of the nodes.
        If it does not receive an argument,
        it should return the innerHTML of
        the first node in the array.
    */
    html(str){
        // optionally receive a string as a parameter.
        // meaning that the str must be of type string.
        // if str is not passed in, then str = undefined
        if(str instanceof String){
            
            // HTML DOM "innerHTML" Property
            for(let i =0; i<this.array.length;i++){
                this.array[i].innerHTML = str;
            }
        }
        else{
            return this.array[0].innerHTML;
        }
    }

    // clears out the content of all nodes in the internal array
    empty(){
        this.html("");
    }

    append(obj){
        if(obj instanceof jQuery
            || obj instanceof HTMLElement
            || obj instanceof String){
            
            for(let i = 0; i<obj.length;i++){
                for(let j = 0; j<this.array.length; j++){
                    this.array[i].innerHTML += obj[i];
                }
            }
        }
    }

    // return a DOMNodeCollection
    // of ALL children of all nodes in the array.
    children(){
        let arr = [];
        for(let i =0; i<this.array.length;i++){
            arr.push(this[i].children);
        }
        return new DOMNodeCollection([arr]);
    }

    parent(){
        let arr = [];
        for(let i =0; i<this.array.length;i++){
            arr.push(this[i].parent);
        }
        return new DOMNodeCollection([arr]);
    }


    find(selector){
        let arr = document.querySelectorAll(selector);
        return new DOMNodeCollection([arr]);
    }

    remove(){
        for(let i =0; i<this.array.length;i++){
            this[i].remove();
        }
    }

    
}


module.exports = DOMNodeCollection;