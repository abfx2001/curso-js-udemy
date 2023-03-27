const mod1 = require('./mod1')

const axios = require('axios')

const { Pessoa } = require('./mod1')

const p1 = new Pessoa('Arthur')
console.log(p1)
console.log(mod1)
console.log(mod1.falaNome())