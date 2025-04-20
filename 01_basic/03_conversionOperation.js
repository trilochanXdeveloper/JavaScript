let score = 33

console.log(typeof score);
console.log(typeof(score));

let score1 = "33"
console.log(typeof score1);
let valueInNumber = Number(score1);
console.log(typeof valueInNumber);

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let uname=""
let uname1="Trilochan"
let ISaValidName = Boolean(uname);
let ISaValidName1 = Boolean(uname1);
console.log(ISaValidName);
console.log(ISaValidName1);
/*
  1 => true;  0 => false;
  "" => false; "Trilochan" => true;
*/

let stringNumber = "100.22"
console.log(typeof stringNumber);
let number = Number(stringNumber);
console.log(typeof number);
console.log(number);

/*
🔁 Explicit Type Conversion:-
 You manually convert data types using functions like
    1.To String
        String(123);        // "123"
        (123).toString();   // "123"
        true.toString();    // "true"
    2.To Number
        Number("123");      // 123
        parseInt("123.45"); // 123
        parseFloat("123.45"); // 123.45
        Number(true);       // 1
        Number(false);      // 0
    3.To Boolean
        Boolean(0);         // false
        Boolean(1);         // true
        Boolean("");        // false
        Boolean("hello");   // true

⚡ Implicit Type Conversion
 JavaScript automatically converts types when needed.

Examples:
    1. String Concatenation with +

       "5" + 1       // "51" (number 1 converted to string)

    2. Arithmetic with -, *, /

       "5" - 1       // 4 (string "5" converted to number)
       "10" * "2"    // 20
    3. Boolean in Logical Context

        if ("")       // false ("" is falsy)
        if ("hello")  // true (non-empty string is truthy)
    4. Equality Comparison

       "5" == 5      // true (type coercion happens)
       "5" === 5     // false (strict comparison, no conversion)

📌 Tip: Avoid unexpected bugs
   Use === and !== for strict comparison to avoid type coercion surprises.
*/