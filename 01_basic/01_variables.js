const accountId = 15324
let accountEmail = "trilochanpradhan2001@gmail.com"
var accountPassword = "1221"
accountCity = "Hyderabad"
let accountState;//output: undefined

// accountId = 2  // not allowed- once initialization const are not allowed to re initialize

accountEmail = "hc@yahoo.com"
accountPassword = "221356"
accountCity = "Odisha"

/*
Prefer not to use var:-
  Because of issue in block scope and functional scope.
*/

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])