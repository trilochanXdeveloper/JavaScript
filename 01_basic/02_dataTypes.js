"use strict"; //treat all JS code as newer version

// alert(3 + 3) // we are using nodejs, not browser

// console.log(3+3) console.log("JavaScript") //code readability should be high 

let name = "Trilochan Pradhan"
let age = 23
let isMinor = false

/*
DATA TYPES OF JavaScripts:-

🟢 Primitive Data Types

  Data Type	            Description	                                           Example Values	                                   Range (If Applicable)
   Number	     Represents both integers and floating-point numbers	       42, 3.14, -7	                                    ±(2^53 - 1) = ±9,007,199,254,740,991 (Number.MAX_SAFE_INTEGER)
   BigInt	     For arbitrarily large integers	                               1234567890123456789012345678901234567890n	    Beyond Number.MAX_SAFE_INTEGER, limited by memory
   String	     Sequence of characters (text)	                               "hello", 'world'	                                Max length: ~2^53 characters (depends on memory)
   Boolean       Logical value	                                               true, false	                                    Only two values
  Undefined	     A variable that has not been assigned a value	               undefined	                                    Single value: undefined
    Null	     Denotes a null or "empty" value	                           null	                                            Single value: null
   Symbol	     Unique and immutable primitive used as object keys	           Symbol('id')	                                    Unique every time; no range
  
🟣 Non-Primitive Data Type (Objects)

  Data Type            Description                                                   Example
   Object         Collections of key-value pairs, complex data structures    { name: "Alice", age: 25 }
                  Includes Arrays, Functions, Dates, etc. 

🔁 Extra: Object Subtypes:-

-Array: let arr = [1, 2, 3];
-Function: function greet() { console.log("Hi"); }
-Date: let now = new Date();

🧠 Notes:-

-typeof null → "object" (this is a long-standing JS bug).
-typeof NaN → "number" (also kinda weird).
-typeof BigInt(10) → "bigint"
-typeof Symbol('a') → "symbol"

*/
