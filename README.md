# A React Web App that integrates with the JSON-server

## Hooks

Hooks are not used in this app but the app could be modified to use hooks with functional components instead of classes. More information on hooks are available [here](https://reactjs.org/docs/hooks-overview.html).

JavaScript [array destruction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax might also be useful to learn when developping and viewing code related to hooks.

You need to learn hooks to understand some code on the internet like the online explaining how to create [React transitions for animations](http://reactcommunity.org/react-transition-group/transition).

## Using the code in this repo

1. Installations:

    a. Make sure [Node.js](https://nodejs.org/en/) is installed.

    b. Make sure yarn in installed. If not, run the below command after :

    ```[bash]
    npm install -g yarn 
    ```

    c. Make sure the json-server is installed. If not, run the below command:

    ```[bash]
    npm install -g json-server
    ```

2. In a folder of your choice, run the following command:

    ```[bash]
    git clone https://github.com/JBakouny/React
    ```

3. Run the json-server by running commands:

    ```[bash]
    cd React/json-server
    json-server --watch db.json -p 3001 -d 2000
    ```

4. Open a new terminal or command line window and use yarn to install your dependencies by running the below commands in the folder where you cloned your repo:

    ```[bash]  
    cd React
    yarn
    ```

5. Run the following command to start the web app:

    ```[bash]
    HOST=localhost
    yarn start
    ```

## Creating the Initial React App

This first section is part of the ESIB course, it explains how to create your initial react app with Yarn.

1. Install yarn using globally:

    ```[bash]
    npm install -g yarn
    ```

2. Create your initial react app using yarn:

    ```[bash]
    yarn add create-react-app
    yarn create-react-app conFusion
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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
