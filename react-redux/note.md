
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

Authorized javascript plugin: http://localhost:3000

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



17:11
