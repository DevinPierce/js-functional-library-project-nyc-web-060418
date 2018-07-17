fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      if (Array.isArray(collection)) {
        for (let element of collection) {
          cb(element)
        }
      } else {
        for (let key in collection) {
          cb(collection[key])
        }
      }
      return collection;
    },

    map: function(collection, cb) {
      const newArray = [];
      if (Array.isArray(collection)) {
        for (let element of collection) {
          newArray.push(cb(element))
        }
      } else {
        for (let key in collection) {
          newArray.push(cb(collection[key]))
        }
      }
      return newArray
    },

    reduce: function(collection, cb, initialValue) {
      let accumulator = initialValue
      if (accumulator === undefined){
        let accumulator = collection[0]
        for (let i = 1; i < this.size(collection); i++){
          accumulator = cb(accumulator, collection[i], collection)
        }
      } else {
        for (let element of collection){
          accumulator = cb(accumulator, element, collection)
        }
      }
      return accumulator
    },

    find: function (collection, cb) {
      for (let element of collection) {
        if (cb(element)){
          return element
        }
      }
    },

    filter: function (collection, cb) {
      const newArray = []
      for (let element of collection) {
        if (cb(element)){
          newArray.push(element)
        }
      }
      return newArray
    },

    size: function (collection) {
      let count = 0
      for (let element in collection){
        count++
      }
      return count
    },

    first: function (collection, number) {
      if (number === undefined){
        return collection[0]
      }
      const newArray = []
      for (let i = 0; i < number; i++){
        newArray.push(collection[i])
      }
      return newArray
    },

    last: function (collection, number) {
      if (number === undefined){
        return collection[this.size(collection) - 1]
      }
      const newArray = []
      for (let i = this.size(collection) - 1; i >= this.size(collection) - number; i--){
        newArray.push(collection[i])
      }
      return newArray.reverse()
    },

    compact: function (collection) {
      const newArray = []
      for (let element of collection){
        if (element)
          newArray.push(element)
      }
      return newArray
    },

    flatten: function (collection, boolean) {
      if (boolean === true){
        let newArray = []
        newArray = newArray.concat.apply([], collection)
        // debugger
        return newArray
      }

      // if (!Array.isArray(collection)){
      //   return [collection]
      // }
      // const newArray = []
      // for (let element of collection) {
      //   newArray = newArray.concat(this.flatten(element))
      // }
      // return newArray
    },

    // sortBy: function (collection, cb) {
    //   const newCollection = collection.slice()
    //   newCollection.sort(function(a, b){
    //     return cb(a) > cb(b)
    //     // debugger
    //   })
    //   debugger
    //   return newCollection
    // },
    sortBy: function (collection, cb) {
      const newCollection = this.map(collection.slice(), cb)
      newCollection.sort(function(a, b){
        return cb(a) - cb(b)
      })
      return newCollection
    },
    // sortBy: function (collection, cb) {
    //   const newCollection = []
    //   for (let element of collection){
    //     newCollection.push(cb(element))
    //   }
    //   newCollection.sort(function(a,b){
    //
    //   })
    //   return newCollection
    // },

    uniq: function (collection) {

    },
    // uniq: function (collection) {
    //   const newArray = [collection[0]]
    //   for (let element of collection){
    //     for (let newElement of newArray){
    //       console.log(element, newElement);
    //       if (element !== newElement){
    //         newArray.push(element)
    //         break;
    //       }
    //     }
    //
    //   }
    //   return newArray
    // },

    keys: function (collection) {
      const newArray = []
      for (let key in collection){
        newArray.push(key)
      }
      return newArray
    },

    values: function (collection) {
      const newArray = []
      for (let key in collection){
        newArray.push(collection[key])
      }
      return newArray
    },

    functions: function(object) {
      const newArray = []
      for (let key in object){
        if (typeof object[key] === 'function'){
          newArray.push(key)
        }
      }
      return newArray
    },


  }
})()

fi.libraryMethod()
