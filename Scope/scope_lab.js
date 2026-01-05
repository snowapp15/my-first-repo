// Global Scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
// Blocked Scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a vlock-scoped const";
}

// Global Scope
//console.log(globalVar);
//console.log(globalLet);
//console.log(globalConst);

// Block Scope
//console.log(blockVar);
//console.log(blockLet);
//console.log(blockConst);
function show() {
// Function Scope
var funcVar = "I'm a func-scoped var";
let funcLet = "I'm a func-scoped let";
const funcConst = "I'm a func-scoped const";
//console.log(funcVar);
//console.log(funcConst);
//console.log(funcLet);
}

show()
// Show Function Logging
//console.log(funcVar);
//console.log(funcConst);
//console.log(funcLet);