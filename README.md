# Resonate Coding Test: Pramish Luitel

## How to run the application

1. Clone the application using `git clone https://github.com/pramish/resonate-technical-test.git`
2. On the root folder, we have two files i.e., `remove_duplicates.js` and `string-permutation.js`. To run these two file, simply run `node file-name`. If you want to pass the custom data into these file, please provide the datas into the respective function.
3. To start web application, please go inside the `resonate-tweets` folder and run or `npm install` to install all of the dependencies for the server.
4. Now `npm run dev` from `resonate-tweets` folder to start the server.
5. Now to run the client folder, from `resonate-tweets` go inside the `client` folder and run `npm install` or `yarn install` to install the client dependencies.
6. Run `yarn start` or `npm start` to start the client.
7. If both server and client are up and running, go to localhost:3000 to see recent Tweets.

## Tokens Required

1. Please make sure you have the `bearer token` from the [Twitter Developer API](https://developer.twitter.com/en/portal/apps/new). And create a new file called .env on the root folder of `resonate-tweets` and have `BEARER_TOKEN= your bearer token`

Questions and Answers

1. How important is logging in an application?
   ```
   To understand, logging helps developers to understand what events occured on the application. It can helps us to track down the errors or bugs on our program. Some logging library for NodeJS are Winston, Bunyan and npmlog.
   ```
2. When do you think use of global variables is appropriate?
   ```
   At first, using global variables is a bad practice. The problem with global variables is that every function has access to it and it becomes hard to debug which function actually read or write the global variables. But if our application store the value which cannot be immutable, then we can use global variables. The only time I use global variables is in the form of public static fields which are immutable
   ```
3. Name 3 DO’s and 3 DON’Ts around Exception Handling

   ```
   DO's

   1. Use a try/catch block around the code if that generates an exceptions. It also makes our code readable.

   2. Catch all the possible exceptions and return those exception in one place.

   3. Have an important code on the finally block such as closing a file or closing a database connection.

   DONT's

   1. Catching the exception and not fixing the issues.
    For example:
        function openFile(filePath){
            try{
                // Perform some action
            }
            catch(error){

            }
        }
    2. Never throw an exception and the log the errors. This will cause confusion while looking at the application logs.

    3. Never throw an exception under finally block. Finally block is used to return the result if all the exceptions are thrown.
   ```
