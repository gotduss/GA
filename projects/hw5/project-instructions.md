## Film Project - Part 2

This follows on from
[Film Project - Part 1](https://gist.git.generalassemb.ly/katie/9c940b65fd83f9a6610e7d1886c6b553)
you need to finish step 1 and step 2, but you do not need to have done the extension.

### Step 1: Set up an API key

To use TMDB you'll need to get an API key.

- Go to [TMDb](https://www.themoviedb.org).
- You'll have to sign up first (it's free). However, it will ask for your phone number and address.
- Request an API key on your profile page (further instructions [here](https://developers.themoviedb.org/3/getting-started)).

Once you have your API key, include it in your app. Because you **never want to store app secrets in your repository**, you'll use the [`dotenv`](https://github.com/motdotla/dotenv) package to keep the API key in a local file.

#### Using `dotenv` to include your API key

Using `create-react-app` means that `dotenv` is already installed.

You just need to:
- Create a new file at the root of your project called `.env.local`.
- In your `.env.local` file, add the line `REACT_APP_TMDB_API_KEY=<Your TMDB API v3 KEY>`

To use that API key in your JavaScript, add the following line to your `TMDB.js` file:

```js
// Gets the API key from the .env.local file
export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY
```

You can then import this API key from other files like this:

```js
import { TMDB, TMDB_API_KEY } from "./TMDB"
```

### Step 2: Fetch film details

When the user clicks to show more details about a film, instead of using the information from `TMDB.js` it should fetch that information from the API using `fetch` and store it in state in the `FilmLibrary` component.

1. Read the TMDB API documentation for looking up a Movie by its ID: https://developers.themoviedb.org/3/movies/get-movie-details

2. When the user clicks on one of the films, use the API to get the movie information. Check it's working with `console.log` before trying to use the results.

3. Use the result of the API call in the `FilmDetail` component

4. The API results include a tagline for most movies! Include the tagline in your `FilmDetail` before the overview.


### Step 3: Fetch the list of movies

_All these movies are from 2017... let's get some newer ones from the API!_

> **Warning:** For this step you will need to use `useEffect`. You may want to wait until it's covered in class before doing this step.

1. Read the documentation for discovering new movies using the TMDB API: https://developers.themoviedb.org/3/discover/movie-discover

2. Using `useEffect`, change your code so that after the `FilmLibrary` component renders for the first time (and only the first time), it fetches most popular 2022 movies and displays those in the list of movies.

**Hint:** You'll need `sort_by=popularity.desc`, and `primary_release_year=2022` in the URL of your request.

You should be able to delete all the films from `TMDB.js` now.

### Extensions

You're free to extend this film app as much as you want!

- The TMDB API only returns the first 20 movies, make it possible to load more and add them to the list. (You could add a 'load more' button at the end of the list)
- Make it possible to choose the release year for the movies list