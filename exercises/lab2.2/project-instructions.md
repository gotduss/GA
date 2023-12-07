## To-do List - Part 1

Create a to-do list app! A simple app to keep track of the things that you need to get done.

You'll need two components:
 - `Todo` - for a single item on the todo list
 - `TodoList` - the whole list of to-dos (uses the `Todo` component)

The `TodoList` component should use `state` to store the list of to-do items as an array of strings. The `Todo` component does not need its own `state`.

### Adding to-do items

In the `TodoList` component, add a text input box and a button, use these to add a new todo entry to your list.

- The new todo can be added at the top or bottom of the list (your choice!)
- Make sure you clear the text box when adding the new todo

### Removing to-do items

For now, we will only remove the first to-do or all of the todos. (In Part 2 we'll make it so you can remove any to-do).

- Add a button that clears the whole to-do list.
- Add another button which removes the first to-do in the list only.

### Extensions

Add some CSS styling! Make the to-do list nicer to use.

Make it so some todo's are 'urgent'
 - Instead of storing the to-dos as an array of strings, use an array of objects. 
 - When creating a to-do, use a check-box to mark them as urgent
 - Put `urgent` to-do's at the top of the list
 - Add an option to only show the 'urgent' to-dos

Add a search feature
 - Add a text input box at the top, labelled 'search'
 - Filter the to-dos so that only the ones that match the search are visible.
 - The remove/clear buttons should only remove/clear the to-dos that match the search.
