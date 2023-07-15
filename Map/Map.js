// you can create a map data structure using the built-in Map object. The Map object allows you to store key-value pairs and provides methods to manipulate and retrieve data efficiently. 

// Creating a new Map:
const myMap = new Map();

// Adding elements to the Map:
myMap.set(key1, value1);
myMap.set(key2, value2);

// Retrieving values from the Map:
const value1 = myMap.get(key1);
const value2 = myMap.get(key2);

// Checking if a key exists in the Map:
const hasKey = myMap.has(key1);

// Removing an element from the Map:
myMap.delete(key1);

// Getting the size of the Map:
const size = myMap.size;

// Iterate over keys
for (const key of myMap.keys()) {
    console.log(key);
}

// Iterate over values
for (const value of myMap.values()) {
    console.log(value);
}

// Iterate over key-value pairs
for (const [key, value] of myMap.entries()) {
    console.log(key, value);
}

//clearing the map
myMap.clear();
