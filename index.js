function arrayMain(collection) {
	let array;
	if (Array.isArray(collection)) {
		return collection;
	} else {
		array = Object.values(collection);
	}
	return array;
}

function myEach(collection, callback) {
	const array = arrayMain(collection);
	array.forEach((element) => callback(element));
	return collection;
}

function myMap(collection, callback) {
    return arrayMain(collection).map((element) => callback(element));
}

function myReduce(collection, callback, acc) {
    if (Array.isArray(collection)) {
        for (let element of collection) {
            if (typeof acc === 'number') {
            acc = callback(acc, element, collection)
            } else {
                acc = collection[0]
            }
        }
    } else {
        let arrayOfValues = Object.values(collection)
        for (let element of arrayOfValues) {
            if (typeof acc === 'number') {
                acc = callback(acc, element, collection)
            } else {
                acc = arrayOfValues[0]
            }
        }
    }
    return acc
};

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let element of collection) {
            if (predicate(element)) {
                return element
            } 
        }
    } else {
        let arrayOfValues = Object.values(collection)
        for (let element of arrayOfValues) {
            if (predicate(element)) {
                return element
            }
        }
    }
};

function myFilter(collection, callback) {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i])) {
        result.push(collection[i]);
      }
    }
    return result;
  }

  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }

  function myFirst(array, n) {
    if (!n) {
       return array[0];
    }

    else return array.slice(0, n);
}

function myLast(array, n) {
    if (!n) {
        return array[array.length - 1];
    }

    else return array.slice(-n);
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}