var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 var newObj = { key: value }
 return Object.assign({}, object, newObj); 
}