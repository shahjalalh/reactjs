## 12. On We Go...To Redux!
12:2 (off time off)

-----------------------------------------------------------
-----------------------------------------------------------
-----------------------------------------------------------

## 17. Handling Authentication with React

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

## 20 REST-Based React Apps

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

```
$ npm install --save axios redux-thunk
```

create new folder and file apis/streams.js

update apis/streams.js

update actions/index.js

update components/streams/StreamCreate.js

update src/index.js

Now submit form and check Console>Network>XHR

Now check api/db.json if it is updating.

update actions/types.js

create reducers/streamReducer.js and update

```
$ npm install --save lodash
```

update components/streams/StreamList.js

now go to localhost:3000 and check in DevTools>state how many streams are created

create and update /src/history.js

update /src/components/App.js

update /components/streams/StreamEdit.js

update /components/streams/StreamForm.js

20: 32
