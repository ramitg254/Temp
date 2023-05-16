// CommonJS, every file is module(by default)
// Modules - Encapsulated Code(only share minimum)
const names =require('./4-names')
const sayHi =require('./5-utils')
const data =require('./6-alternative-flavor')
require('./7-mind-grenade')//here 7-mind-grenade do not contain module.exports so it will directly execute instead of getting imported
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
