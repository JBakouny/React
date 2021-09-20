# A React Web App that integrates with the Node.js Express MongoDB backend

## Running the Integrated Application

1. Installations:

    a. Make sure [Node.js](https://nodejs.org/en/) is installed.

    b. Make sure yarn in installed. If not, run the below command after :

    ```[bash]
    npm install -g yarn 
    ```

    c. Make sure MongoDB is installed on your local machine.

2. Make sure the MongoDB database is up and running on the path specified in [config.js](https://github.com/JBakouny/NodeBackend/blob/react-client-integration/config.js) in the backend-code. To run MongoDB locally, execute the below command in a folder containing a directory named "data" :

    ```[bash]
    mongod --dbpath=data --bind_ip 127.0.0.1
    ```

3. Get the back-end's code from [the GitHub branch "react-client-integration"](https://github.com/JBakouny/NodeBackend/tree/react-client-integration) and run the Node.js REST API by executing the below command in the NodeBackend directory that will sync from GitHub:

    ```[bash]
    git clone https://github.com/JBakouny/NodeBackend
    git checkout react-client-integration
    cd NodeBackend
    npm install
    npm start
    ```

4. In another folder of your choice, open a new terminal or command line window and clone the front-end code then use yarn to install your dependencies by running the below commands in the folder where you cloned your repo:

    ```[bash]
    git clone https://github.com/JBakouny/React
    cd React
    yarn
    ```

5. Run the following command to start the web app:

    ```[bash]
    HOST=localhost
    yarn start
    ```

    If yarn asks you if it should run on another port, reply with "Y" to have it run on port 3001 instead of port 3000. This conforms with the [CORS](https://github.com/JBakouny/NodeBackend/blob/react-client-integration/routes/cors.js) configurations in the backend's code where the whitelist contains "http://localhost:3001".  

## Routing

The [React router](https://reactrouter.com/) enables you to navigate through pages, it also gives you three important props match, location and history as explained [here](https://www.freecodecamp.org/news/hitchhikers-guide-to-react-router-v4-4b12e369d10/).

## Deploying your Mobile First Web Site on the cloud

Here are some cloud providers that ease the deployment of each of the three parts of full stack application:

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for the database deployment

- [Heroku](https://www.heroku.com/nodejs) for the Node.js/Express back-end which constitutes a REST API

- The [React deployment guide](https://create-react-app.dev/docs/deployment/) would be useful to chose a server that can deliver your Single Page Application (SPA) front-end. Notably, [GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages) is a good free choice if you plan to make your code publicly available. Another option uses [Heroku](https://blog.heroku.com/deploying-react-with-zero-configuration) and is also detailed [here](https://create-react-app.dev/docs/deployment/#heroku).

## Hooks

Hooks are not used in this app but the app could be modified to use hooks with functional components instead of classes. More information on hooks are available [here](https://reactjs.org/docs/hooks-overview.html).

JavaScript [array destruction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax might also be useful to learn when developping and viewing code related to hooks.

You need to learn hooks to understand some code on the internet like the online explaining how to create [React transitions for animations](http://reactcommunity.org/react-transition-group/transition).

## Creating the Initial React App

This first section is part of the ESIB course, it explains how to create your initial react app with Yarn.

1. Install yarn using globally:

    ```[bash]
    npm install -g yarn
    ```

2. Create your initial react app using yarn:

    ```[bash]
    yarn add create-react-app
    yarn create-react-app confusion
    ```

    You should commit your ```yarn.lock``` in git, do not add it to [.gitignore](.gitignore)

3. Make sure the HOST variable in the terminal (or command line) is set to ```localhost```.

    ```[bash]
    HOST=localhost
    ```

    Then install the following dependencies:

    ```[bash]
    yarn add bootstrap@4.0.0
    yarn add reactstrap@5.0.0
    yarn add react-popper@0.9.2
    ```

4. Run the below commands to start your application:

    ```[bash]
    yarn start
    ```

    Your react application can now be consulted on [http://localhost:3000/](http://localhost:3000/)

5. Modify [src/App.js](https://github.com/JBakouny/React/commit/6c8c6a9316068be38928b31de1580194f98cf8fd#diff-3d74dddefb6e35fbffe3c76ec0712d5c416352d9449e2fcc8210a9dee57dff67) and [src/index.js](https://github.com/JBakouny/React/commit/6c8c6a9316068be38928b31de1580194f98cf8fd#diff-bfe9874d239014961b1ae4e89875a6155667db834a410aaaa2ebe3cf89820556) in accordance with the [Configure React](https://github.com/JBakouny/React/commit/6c8c6a9316068be38928b31de1580194f98cf8fd) commit.

    View the changes by refreshing [http://localhost:3000/](http://localhost:3000/)
    
## Progressive Web Apps (PWA)

PWAs enable the implementation of of Mobile and Web apps that the same code:

- https://create-react-app.dev/docs/making-a-progressive-web-app/
- https://blog.logrocket.com/from-create-react-app-to-pwa/
- https://www.codica.com/blog/how-to-create-pwa-with-react/

## Official Documentation: Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
