## Code Structure
To make this project more scalable, flexible and can be gracefully modified when needed, 
I decompose the structure into 4 level(from top to bottom): `Application`, `Modules`, `Views`, `Components`.

#### Application
Use Router to control the different pages(`RakeTask` and `RateDisplay`) with `send_request()` to fetch the data and render with `Modules`
.

#### Module
Including Class Component `<RakeTask/>`. For `<RateDisplay/>`,  As required, fetch and store data only happen in `RakeTask` page and `RateDisplay` can only delete data.
related data will pass by Router history to dynamic render the view(`Views` and `Components` level) at `<RateDisplay/>`. 

#### Views
I decompose the module into `<List/>` and `<Table/>` are 2 view level component according to 
the area and different type of UI. Use a callback function `getData(data)` to pass the
setting to previous level.

#### Components
`Button` `AlertMsg` `Textfield` are the basic element for the UI, use stateless
Function Component to make it easier to modify or replace.


### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

