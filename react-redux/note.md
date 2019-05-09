## 12: On We Go...To Redux!
12:2 (off time off)

-----------------------------------------------------------
-----------------------------------------------------------
-----------------------------------------------------------

## 17: Handling Authentication with React

search: google oauth scope list

https://developers.google.com/identity/protocols/googlescopes


Google Sign-In: https://developers.google.com/identity/

create a new project in console.developers.google.com

click on project > new project> 

project name: streamy

select "streamy" project from top drop down

Left menu bar Credentials> Oauth consent screen> 

application name: streamy

click "save"

Credentials > credentials (sub menu) 

Create credentials > oauth client id > 

Application type: web application

Authorized javascript origins: http://localhost:3000

click "create"

Oauth client will popup with client id. 

copy the client id and save in new file named client id

in public/index.html add a "script" tag and add the url

check in console "gapi" is loaded in console 

create a new file in components/GoogleAuth.js  

add googleauth in header.js

search for: gapi documentation

https://developers.google.com/api-client-library/javascript/reference/referencedocs

check the function like: signin(), issignedin() signout etc.

update GoogleAuth.js

```
$ npm install --save redux react-redux
```

create src/actions folder 

```
index.js

```

create src/reducers folder

```
index.js
```

update src/index.js 

in reducers folder create

```
reducers/authReducers.js
```

create and update file in

```
actions/types.js
```


17: class done & practical done 

## 18: Redux Dev Tools 

https://github.com/zalmoxisus/redux-devtools-extension

update src/index.js with 1.2 Advanced store setup

browse https://www.airbnb.com/ and open redux-devtools-extension and check

- state
- action

jump - uses to jump to the particular state

Debug sessions with redux dev tools:

Saves all data in Redux Store between refreshes of the page
```
localhost:3000?debug_session=<some_string>
```
like **localhost:3000?debug_session=logged_in** or **localhost:3000?debug_session=logged_out**

after work done don't forget to delete **?debug_session=logged_in**

## 19: Handling Forms with Redux Form

install redux-form
```
$ npm install --save redux-form
```

https://redux-form.com/

go to example section for reference

https://redux-form.com/8.2.0/examples/

check different examples like - 

- wizard form
- synchronous validation example


update reducers/index.js

open **Redux DevTools** and go to localhost:3000/streams/new

in **Redux DevTools** have **form** object in **state**

Now, update components/streams/StreamCreate.js

after give input in the form check the console and DevTools (State>Tree)

onSubmit contains only console.log()

19 class done & practical done 

## 20: REST-Based React Apps

https://www.npmjs.com/package/json-server

```
$ cd streams/
$ ls
client
$ mkdir api
$ ls
client api
$ cd api
$ npm init
$ ls
package.json
$ npm install --save json-server

```

Create a db.json file with some data
```
{
  "streams": []
}
```

update api/package.json and add "start" in scripts 

start the yarn server
```
$ yarn start
```

```
$ cd /streams/client/
$ npm install --save axios redux-thunk
```

create new folder and file src/apis/streams.js 

update apis/streams.js

update actions/index.js

update components/streams/StreamCreate.js

update src/index.js

Now submit form and check Console>Network>XHR

Now check api/db.json if it is updating.

update actions/types.js

```
$ npm install --save lodash
```

create reducers/streamReducer.js and update

update components/streams/StreamList.js

now go to localhost:3000 and check in DevTools>state how many streams are created

create and update /src/history.js 

update /src/components/App.js 

update /components/streams/StreamEdit.js 

update /components/streams/StreamForm.js 

20 class done & practical done 

## 21: Using React Portals

create new file in /components/Modal.js

update Modal.js

update /components/streams/StreamDelete.js

update /src/actions/index.js

21 class done & practical done 

## 22: Implementing Streaming Video 

update components/App.js

update components/streams/StreamList.js

update components/streams/StreamShow.js

```
$ cd ../streams
$ ls
api client
$ mkdir rtmpserver
$ cd rtmpserver
$ npm init
$ 
```
go to https://github.com/illuspas/Node-Media-Server -> npm version (recommended)

```
$ npm install --save node-media-server 
```

create /rtmpserver/index.js 

copy example code in "npm version (recommended)" and update index.js

update /rtmpserver/package.json

To run the server
```
$ npm start
```

Open Broadcaster Software: https://obsproject.com/

Download "Open Broadcaster Software", install and run

Now create a scene in "Scenes" bottom left by clicking (+) and give the name.

Name: Streaming Scene

Now create source in "Sources" next to "Scenes" by clicking (+) and select "Display Capture"

"Create New" selected "Display capture 2"

"Display:" - is the monitor

"Crop: None"  

Adjust the screen into the red border.

Now create new source in "Sources" by clicking (+) and select "Audio Input Capture"

"Create New" selected "Audio Input Capture 3" and "Make source visible" is checked.

"Device" - select from dropdown the microphone and click OK.

"Start Recording" in the right side of the window, will start recording and "Stop Recording" will save a file in local machine.

The saved media file locations click "Settings > Output > Output Mode: Simple" check "Recording Path: "

Now go to https://github.com/illuspas/Node-Media-Server -> "Accessing the live stream"

"http-flv" is a good choice "via flv.js over http-flv" contains the sample code

Now go to https://www.npmjs.com/package/flv.js and install

```
$ npm install --save flv.js
```

update /streams/StreamShow.js

Node-Media-Server configure # From OBS

In OBS "Settings>Stream(left menu)" select -

```
Stream Type: Custom Streaming Server
URL : rtmp://localhost/live
Stream key : 1
```
Stream key 1 is the id of stream. Now click OK.

Click "Start Streaming" and go to the browser (refresh, if not come) and play.

It may have some time-lack in streaming(10-15 sec).

When done click "Stop Streaming" 

22 class done & practical done 

## 23: The Context System with React

create a new project in the workspace

```
$ create-react-app translate
$ cd translate
$ yarn start
```

delete everything inside /src and create index.js

update /src/index.js

create and update /src/components/App.js 

google search "semantic ui cdn" and go to cdn

"Ctrl+F" - in the page "semantic.min" copy the ".css" link and update in /public/index.html

create and update /src/components/UserCreate.js

create and update /src/components/Field.js

create and update /src/components/Button.js

create and update /src/contexts/LanguageContext.js

put console.log inside Button.js -> render() method to see how context effects.

create and update /contexts/ColorContext.js

23 class done & practical done 

## 24: Replacing Redux with Context

update /contexts/LanguageContext.js

update /components/App.js
update /components/LanguageSelector.js

24 class done & practical done 

## 25: Hooks with Functional Components

```
$ create-react-app hooks-simple
$ cd hooks-simple
```

delete everything from /src/ directory

create /src/index.js

update index.js

create /src/components/App.js   

Run the app with simple app -
```
$ yarn start
```

update /src/components/App.js  

create and update /src/components/ResourceList.js

create and update /src/components/useResources.js

create and update /src/components/UserList.js

25 class done & practical done 

## 26: More Fun with Hooks

26 class done & practical done 
