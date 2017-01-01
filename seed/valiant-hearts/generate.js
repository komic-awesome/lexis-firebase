const fs = require('fs')

let valiantHearts = require('./valiant-hearts.json')

function convertArrayToObject(array) {
  let ret = {}

  array.forEach((value, index) => {
    ret[index] = value
  })

  return ret
}

function eachRecursiveConvert(obj) {
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key] = convertArrayToObject(obj[key])
    } else if (typeof obj[key] == "object" && obj[key] !== null) {
      eachRecursiveConvert(obj[key])
    }
  }

  return obj
}

eachRecursiveConvert(valiantHearts)

fs.writeFile('words.json'
  , JSON.stringify({ 'valiant-hearts': valiantHearts.words }, null, 2));

fs.writeFile('sents.json'
  , JSON.stringify({ 'valiant-hearts': valiantHearts.sents }, null, 2));
