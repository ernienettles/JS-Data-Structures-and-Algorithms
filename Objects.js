// Objects are unordered, but hold a key for an associated value which allows fast lookups

let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
}

// Methods

Object.keys(instructor) // Outputs an array with the keys within the instructor object

Object.values(instructor) // Outputs an array with the values within the instructor object

Object.entries(instructor) // Outputs an array of arrays that contain each key/value pair

instructor.hasOwnProperty("firstName") // Outputs true or false depending on whether the key exists within the object
