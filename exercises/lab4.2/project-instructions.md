## Immutable update practice

For each of these tasks, create a new copy of the object or array with the described change - without editing the original object.

You might find this useful: [Redux immutable upadate patterns](https://redux.js.org/usage/structuring-reducers/immutable-update-patterns)

Example:

```js
// Insert 'hello' into this array at the end:
const myArray = ['I', 'would', 'like', 'to', 'say']

const newArray = [...myArray, 'hello']
```

## Arrays

These ones can each be done in one line of code.

Normally it's fine to copy the array and then mutate the copy, but in this case, try to avoid doing that and instead create the new array using the `...` spread operator.

```js
const myArray = ['I', 'would', 'like', 'to', 'say']

// 1. Add 'hello' to the end of the array

// 2. Replace the first element in the array with 'Fred'

// 3. Add 'you' in between 'like', and 'to' and add 'goodbye' at the end.

// 4. Remove 'like' and 'to' from the array (by index)

// 5. Sort the array
```

## Objects

Each of these can be done in one line, with the spread operator.

```js
const myObject = {
  name: 'Fred Blogs',
  age: 35,
}

// 1. Change Fred's name to `Fred Smith`

// 2. Add a new key {nationality: 'AU'}

// 3. Add 1 to Fred's age
```

## Nested Objects and Arrays

When updating a nested object, each array or object that changes needs to be a new object.

In this example, when updating one pet, the pet object must be a new object and the array itself must be a new array too.

```js
const pets = [
  { name: 'Fluffy', type: 'cat', adopted: false},
  { name: 'Mittens', type: 'cat', adopted: true},
  { name: 'Rover', type: 'dog', adopted: false},
]

// 1. Add a new pet to the end of the list: { name: 'Shadow', type: 'dog', adopted: false }

// 2. Change Rovers's status to adopted: true

const todos = {
  inProgress: ['clean the bathroom'],
  completed: ['wash the dishes', 'react homework']
}

// 3. Remove all the completed todos

// 4. Add a new todo to the inProgress list

// 5. Move all the inProgress todos to the completed list

```

