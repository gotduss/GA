## Feedback form

You've been asked to write a simple feedback form for a restaurant to make it easy for customers to provide feedback. It should look something like the screenshot below.

Each different rating represents a score between 0 (very unhappy face) and 4 (grinning face). The total score for all 3 ratings should be shown at the bottom.

The customer should be able to change the rating (and c) by clicking any of the emoji buttons.

You must use two components, one for the overall feedback form, and one for the emoji happiness picker. You could call it `HappinessPicker`. This is because we might want the happiness picker to be reusable in other parts of our app.

### Hints

The `HappinessPicker` component should show all 5 buttons and it should not have any `state` by itself. It'll need to have two `props`, one for the current value and one which is a function to call when the value changes.

You might find it helpful to put the emoji in an array.

The first emoji is a score of 0, and the last emoji a score of 4, which matches the index of the array.

```js
const emojiScores = ['😦', '😞', '😐', '🙂', '😁']
```