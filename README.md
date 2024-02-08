# TMDB

Full-stack movie app built with the MERN stack, following the MVC architecture. Admin Panel helps Admin to add, delete and update movie data including title, poster image, rating and genre.
Users can view movies list in usePopcorn🍟 App and they can add the movies into watch later . Pagination helps to restrict the number of movies listed in the page. Users can filter movies based on genres and rating.

# Demo :

# Features of the Movies Dashboard App

- Movies Listing Dashboard
- Add,edit and delete movies
- Add,edit and delete genre
- Login
- Register
- Notification

# Features of the Movies App

- Movies List
- Filter in genre and ratings
- Pagination
- Add to user WatchLater
- DarkMode
- Login
- Register
- Notification

## Dashboard

This is the home page that displays all the movies in the database. The details of movies include Title, Description, Genre and rating. Users can either update or delete each movie.

## Add Movie Page

Users can add movie details including Poster, title and rating. Genre can be selected from the available list of genres. Rating is provided using slider ranging from 1 to 5. Details are stored to MongoDB. Image is uploaded to cloudinary CDN. Cloudinary credentials are provided in .env file at the server side.

## Pagination in Prefetching

Tanstack/react-query library using this feature .if page reload fetching current page and also fetch next page, and go to next page and prefetching 3rd page

## Add Genre Page

Users can add Genre in this page. The Details are stored as a seperate collection in MongoDb. The list of Genres are also provided with edit and delete option.

## Watch Later Page

Users can add movies to watch later page. A watch button on dashboard when clicked add movies to watch later list and you can view watch later movie list in this page. Users can remove watch later movies by clicking delete button in the watch later page.

## Register

Users can register to usePopcorn🍟 application using email. Once registered you can access the site using your email and password.
The hashed-password created using bcrypt and user email are stored in user collection.

## Login

Users can login to usePopcorn🍟 application using email and password. JWT is used for authentication.

# Technologies used

- React
- Tanstack/react-query
- Express
- NodeJS
- MongoDB
- TailWind css
- StyledComponents
- Mongoose
- HookForm
- Cloudinary
- react-hot-toast(notification)
- Axios
- React Router
- Multer
- Bcrypt
- JWT
- Cookie Parser
- framer-motion
