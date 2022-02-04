# Tuner-API

Let's make our own music playlist app!

To view the deployed solution to the API/backend, click [here](https://playlist-tuner.herokuapp.com/)

![](https://media4.giphy.com/media/4T7zBzdeNEtjThYDWn/giphy.gif?cid=790b76114ee03ef7f860492a9083d77f86191a7bf340002c&rid=giphy.gif&ct=g)

## Multiple Session Lab/Activity

While you will start this lab/activity today, you will have many sessions to build it out.

The different parts should align with what you are learning in lecture.

By the end, your app should have the following functionality

|  #  | Action  |    URL     | HTTP Verb |    CRUD    |              Description               |
| :-: | :-----: | :--------: | :-------: | :--------: | :------------------------------------: |
|  1  |  Index  |   /songs   |    GET    |  **R**ead  |   Get a list (or index) of all songs   |
|  2  |  Show   | /songs/:id |    GET    |  **R**ead  | Get an individual view (show one song) |
|  3  | Create  |   /songs   |   POST    | **C**reate |           Create a new song            |
|  4  | Destroy | /songs/:id |  DELETE   | **D**elete |             Delete a song              |
|  5  | Update  | /songs/:id |    PUT    | **U**pdate |             Update a song              |

There are currently no unit tests. Use Postman to test your app.

If you finish ahead of time you can try the bonus challenges in each section, or start to build a front-end with create-react-app.

If you feel like you are falling behind, reach out to an instructor.

## Part 1

- fork and clone this repo

- Get a basic express app working

- Then implement the index route that uses pg-promise to query your db

|  #  | Action |  URL   | HTTP Verb |   CRUD   |            Description             |
| :-: | :----: | :----: | :-------: | :------: | :--------------------------------: |
|  1  | Index  | /songs |    GET    | **R**ead | Get a list (or index) of all songs |

Build a schema for Postgres in a `schema.sql` file with the following columns/data types:

- name string
- artist: string
- album: string
- time: string
- is_favorite: boolean

Add a `seed.sql` file that will insert a few songs into your database

Don't forget to update your environmental variables to that you can connect to your Postgres database.

- create a route `/` that says something like `Welcome to Tuner`
- create a route `/songs` that shows the array of songs you've created
- create a 404 route that when a user tries to access a route that doesn't exist, they will see this page

**Note** the original `/songs` route should be unaffected by these additions

### Bonus

Typing `"psql -U postgres -f db/schema.sql"` and `"psql -U postgres -f db/seed.sql"` is a bit annoying and you probably have to look it up every time.

Research how to upgrade your `package.json` and add two scripts one called `dbinit` to run the first command and `dbseed` to run the second command. Then run them using `npm run dbinit` and `npm run dbseed`

## Part 2

Do not start Part 2 until your previous routes work as expected. If you are stuck, be sure to ask for help.

|  #  |   Action   |    URL     | HTTP Verb |    CRUD    |              Description               |
| :-: | :--------: | :--------: | :-------: | :--------: | :------------------------------------: |
|  2  |  **Show**  | /songs/:id |    GET    |  **R**ead  | Get an individual view (show one song) |
|  3  | **Create** |   /songs   |   POST    | **C**reate |           Create a new song            |

**IMPORTANT** Since you now have a database, you should use the `id` of the songs instead of array positions. Be sure to update your logic to fit.

Ie, if your first song in an array (array index of 0) has an `id` of 4, `/songs/4` should be how you get the show view. **NOT** `/songs/0`

- add routes for create and show
- add some logic so that if someone goes to an invalid id they will be redirected to the 404 route you had written in the last part

### Bonuses

Be sure to set up appropriate error handling, so that you can have more helpful error messages for yourself as a dev, and for future users of the app.

## Part 3

Do not start Part 3 until your show and create routes work as expected. If you are stuck, be sure to ask for help.

|  #  |   Action    |    URL     | HTTP Verb |    CRUD    |  Description  |
| :-: | :---------: | :--------: | :-------: | :--------: | :-----------: |
|  4  | **Destroy** | /songs/:id |  DELETE   | **D**elete | Delete a song |
|  5  | **Update**  | /songs/:id |    PUT    | **U**pdate | Update a song |

**IMPORTANT** Since you now have a database, you should use the `id` of the songs instead of array positions. Be sure to update your logic to fit.

Ie, if your first song in an array (array index of 0) has an `id` of 4, `/songs/4` should be how you get the delete route. **NOT** `/songs/0`. The same for your `edit route.

- add routes for delete and update

### Bonuses

- Go back and try any of the previous Bonuses
- Start building a create-react-app front end

### SUPER Bonus

Add functionality where if a user goes to

- `/songs?order=asc` it will organize the songs alphabetically
- `/songs?order=desc` it will organize the songs in reverse alphabetical order
- `/songs?is_favorite=true` it will only show the songs where the value of `is_favorite` is true
- `/songs?is_favorite=false` it will only show the songs where the value of `is_favorite` is false


## BONUS Part 5 [Part 4 is a React App, see other repo](https://github.com/joinpursuit/tuner-react)

- Build a One-to-Many so that `One Playlist has many songs` for both the back and front end
- Build a One-to-Many so that `One Album has many songs` for both the front end and the back end
- Build a One-to-Many so that `One Artist has many songs` for both the front end and the back end
- Build a way to see the Songs on an Album
- Tidy up the UI/UX so this app is easy to use for anyone

## SUPER BONUS Part 6 

Upgrade the app so that a playlist can have many songs and a song can belong to many playlists
Add users so that users can have many playlists
Add the ability for users to like songs (many songs can be liked by users, users can like many songs)
