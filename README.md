# TMDB

Full-stack movie app built with the MERN stack. Admin Panel helps Admin to add, delete and update movie data including title, poster image, rating and genre.
Users can view movies list in usePopcorn🍟 App and they can add the movies into watch later . Pagination helps to restrict the number of movies listed in the page. Users can filter movies based on genres and rating.

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

# Features of Dashboard

## Dashboard

![dash](https://github.com/shibilamjad/usePopcorn/assets/144805618/2a30a971-49af-42f4-b698-227ae68a93ef)

This is the home page that displays all the movies in the database. The details of movies include Title, Description, Genre and rating. Users can either update or delete each movie.

## Add Movie Page

https://github.com/shibilamjad/usePopcorn/assets/144805618/80c1224c-46fd-44a5-83d2-7c8cfef13f84

Users can add movie details including Poster, title and rating. Genre can be selected from the available list of genres. Rating is provided using slider ranging from 1 to 5. Details are stored to MongoDB. Image is uploaded to cloudinary CDN. Cloudinary credentials are provided in .env file at the server side.

## Edit and Delete Movie Page

https://github.com/shibilamjad/usePopcorn/assets/144805618/1fb55b5b-2478-442e-92aa-32da34433822

Users can edit and deleting movie details including Poster, title and rating. Genre

## Add,Edit and Delete Genre Page

Users can add Genre in this page. The Details are stored as a seperate collection in MongoDb. The list of Genres are also provided with edit and delete option.

https://github.com/shibilamjad/usePopcorn/assets/144805618/c562e841-6262-491d-8afd-a7a1b7aa9253

## Features of Users

## Home Page

User can watching homepage user must be login or signUp .Home page filter in genre and ratings

https://github.com/shibilamjad/usePopcorn/assets/144805618/6e715887-c783-4f21-983e-8e0f499cbf58

## Watch Later Page

Users can add movies to watch later page. A watch button on dashboard when clicked add movies to watch later list and you can view watch later movie list in this page. Users can remove watch later movies by clicking delete button in the watch later page.

https://github.com/shibilamjad/usePopcorn/assets/144805618/c0ea3592-3ec6-482c-a008-539bab0904b1

## Pagination in Prefetching

Tanstack/react-query library using this feature .if page reload fetching current page and also fetch next page, and go to next page and prefetching 3rd page

## Register

Users can register to usePopcorn🍟 application using email. Once registered you can access the site using your email and password.
The hashed-password created using bcrypt and user email are stored in user collection.

![signup](https://github.com/shibilamjad/usePopcorn/assets/144805618/283950ba-fea9-4bb6-b4c1-604f94941b48)

## Login

Users can login to usePopcorn🍟 application using email and password. JWT is used for authentication.

![sign](https://github.com/shibilamjad/usePopcorn/assets/144805618/dc6a199a-68d7-4d20-ad3a-06a2d5141039)

## Installation

- Clone the repository from GitHub.
- Install Node.js and MongoDB on your system if you haven't already.

```bash
  npm install

```

in the root directory to install the required dependencies.

- Configure the MongoDB connection string in the server configuration file.
- Set up Cloudinary account and obtain necessary credentials for image hosting.

```bash
  npm run dev

```

## In .env file inside server, put

```bash
 MONGO_URL = your mongodb url
PORT =3006
CLOUDINARY_NAME= cloud_name
CLOUDINARY_API_KEY = api_key
CLOUDINARY_API_SECRET = api_key
CLOUDINARY_URL=cloudinary:CLOUDINARY_URL
ACCESS_TOKEN_SECRET=jwt-usePopcorn
REFRESH_TOKEN_SECRET=jwt-usePopcorn


```
