# Capstone Project

#### By: Sandra Tena

#### A road trip planning website. 

## Technologies Used: 
*_React_
*_Node_
*_Google Maps API_
*_.Net_
*_C#_
*_HTML_
*_JSX_

#### A website where the user will be able view Haunted locations on a map to help them plan out their road trip to include exploring haunted locations. 

## Project Research and Planning Log
### 9/16/22
<ul>
<li>8:30am - 9am create github and create Readme to log activity. Start readme and brain storm what I need to do(mvp goals, what research I need to do)
<li> 9am to 10amResearch on how to write a project proposal: https://www.scribbr.com/dissertation/research-proposal/#:~:text=Like%20your%20dissertation%20or%20thesis%2C%20the%20proposal%20will,Your%20supervisor%E2%80%99s%20name%204%20The%20institution%20and%20department
<li> 10am to 11am: Research on how to use C#, React and API's in one project (previewed in order to pick and find one to watch in its entirety): https://youtu.be/gpfP60KjmZU, https://youtu.be/NemyDIUcC64, https://youtu.be/2ayNDsqtjHs, 
<li> Break
<li> 11:15am to 12pm: Research on using azure (previewed in order to pick and find one to watch in its entirety): https://youtu.be/_TUaTNc8czU. Decided not to use azure. 
<li> Research on google maps api (overview in order to pick and find one to use): https://developers.google.com/maps/apis-by-platform, https://developers.google.com/maps,(need to make account in google cloud) https://youtu.be/9e-5QHpadi0, https://youtu.be/iP3DnhCUIsE
<li> 12pm to 12:30pm: To start building use https://youtu.be/gpfP60KjmZU. Start watching at 14 minutes. (skip the installation stuff and the setup for the API. Will probably have to look at this later if you end up having to build your own API for the haunted locations.) I think I want to try using visual studio 2019 instead of vscode.
<li> 12:30pm to 1:30pm: Research for haunted loications API: Will need geocoding to make it work with the google maps API? Google images for the background. 
<li> 1:30pm to 2:30pm: write out MVP goals (had previously just been thingking about them in order to know what I would need to research. After my research I have now made decisions and have a basic idea of what I will be able to do.), personal goals, and stretch goals. Start watching video at 14 minutes. I did not see ASP .net core when creating my project so I have to go in to modify it in the installer and needed to install an update. 
<li> 2:30pm - 2:45pm: Update the log. 
<li> break. 
<li>3pm to 4pm: created project in visual studio for C# backend. Created project in VSCode for react front end. Started trying to test a fetch call.
<li> 4pm to 5pm: Debug code to test api fetch call, read google maps platform info, create a google cloud account and create a google maps API Key. 
<li> 5pm to 5:03pm: Update log. 
<li> 5:03pm to 5:30pm:  https://youtu.be/9e-5QHpadi0 follow this tutorial to use google maps api. Left video at 3:40. Will pick up tomorrow on debugging the map display in the browser. 
<br>

### 9/23
*_7:00am: Start planning for the day(organizing thoughts on paper)_
*_7:30am: Transfer written to-do list to Readme_
<details>
<summary>To-do List</summary>
<ul>
<li>Finish following the google API tutorial. 
<li>Test in Browser. 
<li>Debug if not working. 
<li>Look-up how to add functionality for it to display locations in a certain area. 
<li>Try one more time to find a haunted locations API. 
<li>Figure out how to use/implement that API. 
<li>Create my own haunted locations API if necessary.
<li>Connect the two APIs to work together in the project. 
<li>If I need a break from the API work, look up how to make my own logo, add bootstrap to react project, add bootstrap styling (if I'm able to see the project in the browser). 
<br>
</details>

*_7:35am: Find where I left off in the tutorial and get starteds on that again._
*_8:13: Commit, update log and open project in browser._
*_8:26 - 9:15: Project won't open in browser. Debugging: googled error, browser is up, map not showing, Debugging for map: rewatched video to double check code, google the error, read through comments in video tutorial._
*_9:15: Break_
*_9:30am - 10:15am: logged into google account, entered new API key, error message in dobegguer: "google is not defined", displaying "Loading..." in browser which means API key is not loading. Continue debugging._ 
*_10:15am - 11am: Google the error, read through resources in google account, read through https://react-google-maps-api-docs.netlify.app/._ 
*_11am: Lunch_
*_12pm: Continue reading through https://react-google-maps-api-docs.netlify.app/. Billing is for sure enabled in my google account._
*_1pm - 2pm: Following this tutorial https://youtu.be/iP3DnhCUIsE. Still doesn't work. Debugging. Map shows with "For development purposes only" over it as well as a message saying "This page can't load google maps correctly". Double checked billing, account setup, API key all are good but map still not working. Map displays when API key is directly put into code._
*_2:05pm - 2:25: Break_
*_2:25pm - 3:25pm: lookup how to make a logo. Put logo into project_
*_3:25pm - 4pm: Install bootstrap and add some bootstrap styling._

### 9/30
*_8:10am: Start planning for the day(organizing thoughts on paper)_
*_8:35am: Transfer written to-do list to Readme_
<details>
<summary>To-do List</summary>
<ul>
<li>Fix bug of storing API key properly. 
<li>Test in Browser. 
<li>Debug if not working. 
<li>Look-up how to add more functionality to the map:  display locations in a certain area, display route.  
<li>Try one more time to find a haunted locations API. 
<li>Figure out how to use/implement that API. 
<li>Create my own haunted locations API if necessary.
<li>Connect the two APIs to work together in the project. 
<li>If I need a break from the API work, add more bootstrap styling (if I'm able to see the project in the browser). 
<br>
</details>

*_8:35: Fix bug of storing API key properly._
*_9:40: Finish following the google API tutorial._
*_10:40: Continue with tutorial._
*_10:45: Break_
*_11:00: Continue with tutorial._
*_11:40: Debug added code. Some things are not defined. Probably need to be imported from somewhere like bootstrap or react._
*_12:40: Debug_
*_12:45: Lunch_
*_1:45: Debug_
*_2:25: Continued with tutorial. Marker is no longer displaying and the inputs for location and destination are not displaying. Continue with tutorial and will try to debug at the end._
*_3:45: Break_
*_4:00: Continue tutorial_
*_4:29 - 5:10pm: Finished tutorial, but the origin and destination inputs are still not displaying. Found the github repo and will comb through it to see if I made any mistakes. Found a few missing UI things. It's displaying now._

### 10/3
*_2:10pm: Start planning for the day(organizing thoughts on paper)_
*_2:30pm: Transfer written to-do list to Readme_
<details>
<summary>To-do List</summary>
<ul>
<li> Look up how to add functionality to the API to display locations within a radius of a certain location or route.  
<li> Try to add it. 
<li> Test in browser
<li> Debug
<li> Start to make hounted locations API. 
<li> Connect this API to React project to display a list
<li> Test in Browser
<li> Debug
<li> Add functionality to connect it to the maps API so that those locations are displayed in the map. 
<li> 
<li>
<br>
</details>



## Setup and Installation Requirements

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Known Bugs

* 

## License



Copyright (c) 2022 Sandra Tena 

## Contact Information
_If you have any questions or concerns, please feel free to reach out to me [via email at: sandratena06@gmail.com](mailto:sandratena06@gmail.com) or request to make a contribution. Thank you!_ 
