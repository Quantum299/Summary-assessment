// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3 school for HTML-CSS
// for the jquery you can only use jquery documentaion.
// https://api.jquery.com
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function(element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function(element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  
  //=============================================================================
  /*                              Q1                                           */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //containing the length of each word in that string.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  //wordLengths("hello its me") // [5,3,2]


  function wordLengths(str) {
    // TODO: your code here
   

   var newArr= str.split(" ");
      return map(newArr,function(element,i){
              return (element.length);
   })

}

/*we creat an array of string (string.split(" ")separate the whole string when it found a space 
and fill it with the word one by one in the newArr ) and use map to iterat the newArray with each and 
return a new array cantain the length of each word at 
the same index of the newArr .
  
  
  

  //=============================================================================
  /*                                  Q2                                    */
  //=============================================================================
  //Write a function countOccurrences that accepts two parameters: a string, 
  // and a character (e.g. "a"), and returns number of times that character occured.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // countOccurrences("hello", "l"); // 2
  // countOccurrences("hello, world!", "l"); // 3
  
  function countOccurrences(string, character) {
      // your code is here
    
    var newArr= string.split('');
    var count=0;
   
      each(newArr,function(element,i){
        if(element===character){
            
            ++count ; 
     }
     return count  ;     
}  
/* we creat an array of string "string.split" and creat a variable "count" 
   we give a condition the count will increment once it find an occurention and so on 
   once the i(index) equal the newArr.length the function will return the counter (count)
  
  
  //=============================================================================
  /*                                  Q3                                    */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //with only the words of length that are longer than 3.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // wordsLongerThanThree("Hello Mad World") //["Hello", "World"]
  
  function wordsLongerThanThree(str) {

  // TODO: your code here

  if(typeof str !== "string")
    return "enter only a string"
  if( str === undefined)
    return "enter a string "
  if(str.length === 0 )
    return " you didn't enter nothing "

  var strArr = str.split(' ');

  return filter(strArr , function(element, index){
    if(element.length> 3)
      return element;
  })
    
}

/* we chek the type of the input and should be only a string (the 3 if statment) 
/* we creat an array (strArr ) and fill it with the word of the str(split(' '))  
/* fill the element wich is an array ("each function") for evry element of strArr larger than 3 .


  
  //=============================================================================
  /*                                  Q4                                        */
  //=============================================================================
  //Using recursion, write a function called repeatString that takes two parameters: a string str, 
  //which is the string to be repeated, and count, a number 
  //representing how many times the string str should be repeated.
  //repeatString('dog', 0); // => '' 
  //repeatString('dog', 1); // => 'dog' 
  //repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog' 
  //repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
  
  
   function repeatString(str, count) { 
 // TODO: your code here
  

  if(count === 0) {
    return '' ;
  }
  return str + repeatString(str,count-1) ;
} 

/* we check if the count equal 0 then we don't have anything to repeat it 
then if we will take store the string and decrimente the counter "count" by 1 until we the count equal to 0 .
so the counter will stop and return the total of str as result .
  
  
  //=============================================================================
  /*                                  Q5                                       */
  //=============================================================================
  /*
   using closures create a function called makePizza that has the following properties and methods
   crust a property represented by a string. ex "thin","thick". 
   size a property represented by a string. ex "M","L".
   numberOfSlice a property that hold the number of slice, ex: 8
   ** the values of all properties will be provided as arguments in the function invocation. 
   addIngredients a function that add a new ingredient to the ingredients property.
   displayIngredients a function that displays a comma separated string of all ingredients. ex: The ingredients are:tomato,mushroom,meat
   bakePizza a function that display a string with your pizza description after 2 seconds. ex "Your thin M 8 slice pizza is done" 
   eatSlice a function that let you eat from the pizza as long as the numberOfSlice is greater than zero and decrease the total number of slices by one.
   */
  //Example:
  // var pizza = makePizza("thin", "M", 2);
  // pizza.addIngredients("tomato");
  // pizza.addIngredients("meshroom");
  // pizza.addIngredients("meat");
  // console.log(pizza.displayIngredaints());
  // pizza.bakePizza();
  // pizza.eatSlice();
  // pizza.eatSlice();
  // pizza.eatSlice();
  
  // Write your code here ..... 

  function makePizza(crust,size,numberOfSlice){
  var crust = crust;
  var size = size;
  var numberOfSlice = numberOfSlice;
  var ingredients = [];
  return{
    addIngredients : function(ingredient){
       ingredients.push(ingredient); 
       return ingredients;
    }, 
    displayIngredients: function(){
      return ingredients.join(",");
    },
    bakePizza: function(){
        
            return "Your "+crust+" "+size+" "+numberOfSlice+" slice pizza is raedy";
       
    },
    eatSlice : function(){
      return numberOfSlice -= 1;
    }
  }
}


  


  
  //=============================================================================
  /*                                  Q6                                      */
  //=============================================================================
  /*
  Create a ReadingList class by using OOP concept, where:
  Your class should has:
  "read" for the number of books that finish reading
  "unRead" for the number of books that still not read
  "toRead" array for the books names that want to read in the future
  "currentRead" for the name of the book that is reading currently
  "readBooks" Array of the names of books that finish read
  "AddBook" function that:
  a- Accept the book name as parameter
  b- Add the new book to "toRead" array
  c- Increment the number of the unread books.
  "finishCurrentBook" function that:
  a- Add the "currentRead" to the "readBooks" array
  b- Increment the "read" books
  c- Change the "currentRead" to be the first book from "toRead" array
  d- Decrement the number of "unread" books
  */
  
  // Now, to make sure that you are actually reading, make a comment below this and type: Yes I am
  
  // Yes I am reading

  // Write your code here .....

  function readingList(read, unRead, toRead, currentRead, readBooks,){
  var list = {};
    list.read = read;
    list.unRead = unRead;
    list.toRead = toRead;
    list.currentRead = currentRead;
    list.readBooks = readBooks;
    list.addBook = add;
    list.finishCurrentBook = finish;
  return list;
}
var add = function(bookName){
  this.toRead.push(bookName);
  this.unRead ++;
}
var finish = function(){
  this.readBooks.push(this.currentRead);
  this.read ++ ;
  this.toRead.unshift(this.currentRead);
  this.unRead --;
}
  
  //=============================================================================
  /*                                  Q7                                       */
  //=============================================================================
  //Using closures create makeSafe Function that accepts an initial integer value to specify the storage size limit
  //makeSafe should contain addItem function that accepts two parameters the item and the itemSize as Strings
  //itemSize should be either "big", "medium" and "small"
  //big sized items will hold 3 slots in the storage
  //medium sized items will hold 2 slots in the storage
  //small sized items  will hold 1 slot in the storage
  //return "Can't fit" if you try to add an item that exceeds the storage size limit
  //when the safe is full return a string representing all the items that are in the safe
  //Example:
  //  var safe = makeSafe(5)
  //  safe('watch','small')
  //  safe('gold-bar','big')
  //  safe('silver-bar','big') => "Can't fit"
  //  safe('money','small') => "watch gold-bar money"
  
  // Write your code here .....


  function makeSafe(initialLimit){
  var slots = initialLimit;
  var items = [];
  return function (item, size){
    if (size === "small" && slots >= 1) {
      slots = slots - 1;
      items.push(item);
    }
    else if (size === "medium" && slots >= 2) {
      slots = slots - 2;
      items.push(item);
    }
    else if (size === "big" && slots >= 3) {
      slots = slots - 3;
      items.push(item);
    }
    
    else if(slots === 0){
      return items.join();
    }
    else{
      return "Can't fit";
    }
  }
}
  
  //=============================================================================
  /*                                  Q8                                       */
  //=============================================================================
  
  //Create HTML, CSS & JS files and connect them together
  //Add Two text input fields, one with a placeholder input, and another with color
  //Add a button below them and an empty unordered list below the button
  //Create 3 CSS classes (red, yellow, blue)
  //Create a javascript function that adds an item list to the unordered list
  //If the color value is red, yellow or blue
  //Add the CSS class to the item accordingly
  //Do not add a list item if the color value is non of the colors
  
  //DO NOT USE JQUERY
  
  //================================================================================
  /*                              Q9                                            */
  //================================================================================
  
  //Create HTML, CSS & JS files
  //Link jQuery
  //Create an empty unordered list
  //Create three input elements of type checkbox
  //Create two buttons "create" & "remove"
  //Create 7 classes in CSS each with the appropriete color (black, purple, green, orange, red, yellow, blue)
  //Using jQuery run a function that gets called using the button's id (#create)
  //The function takes see if the checkboxes are checked or not (true or false), use $("#id").prop('checked')
  //If all 3 checkboxes are checked add an list item with the word black in it and add the "black" class to it
  //If 2 of the checkboxes are checked add (purple = blue + red), (green = blue + yellow), (orange = red + yellow)
  //If 1 of the checkboxes is checked add (yellow, blue or red) as li and the class to it
  
  //Using jQuery call a function from the button's id (#delete)
  //The function removes all the elements from the unordered list based on the checkboxes as the previous function
  //Use jQuery as much as you can in selecting elements and other tasks
  
  //================================================================================
  /*                              Q10                                           */
  //================================================================================
  // Theoretical questions.
  // 1- In your own words,Why do we use Closures ?
  
  // 2- In OOP, what does "this" refer to ?
  
  // 3- What is jQuery?
  
  // 4- what is the diffrence between Closure's methods and The OOP's methods?
  