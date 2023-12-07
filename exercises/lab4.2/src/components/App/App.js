/* imports */
import './App.css';

/* App component */
const App = () => {
  // Arrays
  const myArray = ['I', 'would', 'like', 'to', 'say'];

  // 1. Add 'hello' to the end of the array
  const newArray = [...myArray, 'hello'];
  console.log("newArr", [...myArray, 'hello']);

  // 2. Replace the first element in the array with 'Fred'
  let replaceFirst = [...myArray];
  // replaceFirst[0] = 'Fred';
  const withFred = ['Fred', ...myArray.slice(1)]
  console.log('withFred', withFred);

  // 3. Add 'you' in between 'like', and 'to' and add 'goodbye' at the end.
  // const newArray = [...myArray.slice(0, 3), 'you', ...myArray.slice(3), 'goodbye']
  let addYou = [...myArray];
  addYou.splice(3, 0, 'you');
  // addYou = [...addYou, 'goodbye'];
  addYou[addYou.length] = 'goodbye';
  console.log('addYou', addYou);

  // 4. Remove 'like' and 'to' from the array (by index)
  const indexArr = myArray.filter(item => {
    if (item !== 'like' && item !== 'to') {
      return item;
    }
  });
  // const alsoNewArray = [...myArray.slice(0, 2), ...myArray.slice(4)]
  console.log("indexArr", indexArr);

  // 5. Sort the array
  const sortArr = [...myArray.sort()];
  console.log("sortArr", sortArr);


  // Objects
  const myObject = {
    name: 'Fred Blogs',
    age: 35,
  }

  // 1. Change Fred's name to `Fred Smith`
  const newObject = {...myObject, name: 'Fred Smiith'}
  console.log('newObject', newObject);

  // 2. Add a new key {nationality: 'AU'}
  const keyObj = {...myObject, nationality: 'AU'};
  console.log('keyObj', keyObj);

  // 3. Add 1 to Fred's age
  const fredAge = {...myObject, age: myObject.age + 1};
  console.log("fredAge", fredAge);


  // Nested Objects and Arrays
  const pets = [
    { name: 'Fluffy', type: 'cat', adopted: false},
    { name: 'Mittens', type: 'cat', adopted: true},
    { name: 'Rover', type: 'dog', adopted: false},
  ];

  const todos = {
    inProgress: ['clean the bathroom'],
    completed: ['wash the dishes', 'react homework']
  }

  // 1. Add a new pet to the end of the list: { name: 'Shadow', type: 'dog', adopted: false }
  const newPets = [...pets, { name: 'Shadow', type: 'dog', adopted: false }];
  console.log('newPets', newPets);

  // 2. Change Rovers's status to adopted: true
  const status = [...pets.slice(0, 2), { name: "Rover", type: "dog", adopted: true }];
  console.log('status', status);

  console.log('pets', pets);

  // 3. Remove all the completed todos
  const newTodos = {...todos, completed: []}
  console.log('newTodos', newTodos);

  // 4. Add a new todo to the inProgress list
  const addNewTodo = {...todos, inProgress: [...todos.inProgress, 'go shopping']}
  console.log('addNewTodo', addNewTodo);

  // 5. Move all the inProgress todos to the completed list
  const moveTodos = {...todos, inProgress: [], completed: [...todos.inProgress, ...todos.completed]}
  console.log('moveTodos', moveTodos);

  console.log('todos', todos);



  return (
    <div className="App">
      <h1>New app</h1>
    </div>
  );
}

export default App;
