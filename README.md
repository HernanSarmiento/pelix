# PELIX
pelix is a full-stack "movies and series" app, simulating a streaming platform.

## Technologies
- For the frontend
  + ReactJS - used for developing gui
  + Tailwindcss - used for styling gui
  + React-Router-Dom - used for routing and providing spa experience
- For the backend:
  + ExpressJs - used to develop rest api
  + JWT
  + Bcrypt - for encrypting user sensitive information
  + MongoDB - as a non relational database
 
even though you can't create a movie or serie page from the frontend you can do it in the backend and then see it in the browser

## How to use it
  - First on the terminal, while on pelix directory `cd src` to move into the src directory and then `npm install` to get all the client dependencies to run the reactJS app.
  - Second, on the terminal use cd to move to server and then run `npm install` like we did in the client side, in order to download  the necessary dependecies to run the project.
  - Finally you have to run both  side in different terminals, run the backend to add some movies/series, to do so go to server folder and run `npm start`, add some movies/series to later see in the front-end
  - after adding some movies/series you can now, run the client (remember to have backend server on a different terminal), to do so move to `client/src` and run npm run dev.
  - That's it!

