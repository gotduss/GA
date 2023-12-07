## Film Project - Part 1

This is a mult-part project that we will finish over a few weeks.

You're working on a website to look at the latest films (though our examples are a bit old), and show details about them.

Your friendly web designer has already created a lot of the HTML and CSS that you will need to work with.

**You may only use function-style React components for this project.**

### Setting up

Go to this repository: https://git.generalassemb.ly/Aus-RCT-PT-core-content/film-project-starter

And use it as the starting code for this project.

You have options how you do this:
 - Download the code as Zip file and unpack it in your homework repository
 - OR `git clone` this repository into your homework repository and then delete the `.git` folder (don't put a git repo inside another git repo)
 - OR use this project as a template to create your own repository and clone it to work there (you'll need to copy the code to submit it as homework repo later)

### Step 1: Make the list of movies work
 
In `FilmLibrary.js` you'll find that there's a list of films there with three mock films in the list. Those should be real films!

Move the `FilmRow` elements into a separate component, and then use the data in `TMBD.js` to populate a whole list of `FilmRow`'s. Move the CSS import for `FilmRow.css` to the matching JavaScript file.

Make it so that:
 - Each film has the correct title, poster and year (calculate the year from the date!)
 - The number next to `ALL` at the top matches the number of films the list.
 - All the films start off with the icon for `add_to_queue` (they are not in the favourite list yet)

**Hint:** The `README.md` file in the given code has information on how the icons and URLs for posters work

**Hint:** You'll need to use [Date.getFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear) to get the year.

### Step 2: Show film detail

Make it so that when you click on a film, it shows the details for that film in the right-hand panel (`FilmDetail` is already a separate component for you)

**Hint:** You'll need to store the film information as state in the `FilmLibrary` component:

```js
const [selectedFilm, setSelectedFilm] = useState(null)
```


## Extension: Film Favourites list

Find the `fave` button on each `FilmRow` (it's the `add_to_queue` icon). Use that button to add a film to a list of favourite films.

When you click `FAVES` at the top, it should switch to showing a list of all your favourite films.

Make it so that:
 - You can easily swap between showing `ALL` (all films) and `FAVES` (only favourites)
 - The `ALL` and `FAVES` buttons visibly change to indicate which one is currently selected
 - The icon changes from a `add_to_queue` icon to a `remove_from_queue` icon if the film is one of the favourites
 - When you click the `remove_from_queue` icon button, it should remove that film from the favourites list
 - The number next to `FAVES` is the number of films in the favourites list