## 01: Introduction 

- https://aneagoie.github.io/keiko-corp
- https://github.com/aneagoie/keiko-corp
- https://github.com/aneagoie/robofriends
- https://github.com/aneagoie/robofriends-redux
- 
- https://github.com/aneagoie/python-cheatsheet
- https://github.com/aneagoie/smart-brain

## 02: SSH

ssh command
```
$ ssh {user}@{host}
```

ssh client for windows: PuTTY

linux has by default. if not then go through - https://www.makeuseof.com/tag/beginners-guide-setting-ssh-linux-testing-setup/
```
$ sudo apt-get install openssh-client
$ sudo apt-get install openssh-server
```

### rsync
go to inside the folder - want to copy to remote server - 
```
$ rsync -av . root@167.99.146.57:~/some-folder

```

3 techniques used in SSH -
1. Symmetrical Encryption: single key
2. Asymmetrical Encryption: public & private key (diffie-hellman key exchange)
3. Hashing: 


### RSA (automatic login without password)
(Don't do it for hosting or remote server. Everytime ask for password is good practice. Do it for github or bitbucket graphical interface)

If does not already have then create .ssh folder-
```
$ mkdir ~/.ssh
$ cd ~/.ssh
$ ls
config      id_rsa      id_rsa.pub      key_backup/     known_hosts
$ 
$ ssh-keygen -C "test@gmail.com"
Enter file in which to save the key: /Users/shah/.ssh/id_rsa_digitalocean
$ ls
config      id_rsa_digitalocean     known_hosts
id_rsa      id_rsa_digitalocean.pub
id_rsa.pub  key_backup/
$ pbcopy < ~/.ssh/id_rsa_digitalocean.pub
$ ssh root@121.121.121.121
root@ubuntu:~# mkdir .ssh
root@ubuntu:~# ls -a
root@ubuntu:~# cd .ssh
root@ubuntu:~# ls
authorized_keys     known_hosts     # if this files does not have, create
root@ubuntu:~# nano authorized_keys
# paste the content in the file
root@ubuntu:~# exit
$ 
```
Close the session and open new terminal - 
```
$ ssh root@121.121.121.121
root@121.121.121.121: Permission denied (publickey).
$
$ cd ~/.ssh
$ ls
config      id_rsa_digitalocean     known_hosts
id_rsa      id_rsa_digitalocean.pub
$
$ ssh-add ~/.ssh/id_rsa_digitalocean
$ ssh root@121.121.121.121
```

But in case, public key is deleted form **authorized_keys** from the remote server, can not be log in with ssh.
```
$ ssh root@121.121.121.121
root@121.121.121.121: Permission denied (publickey).
$ ssh-add ~/.ssh/id_rsa_digitalocean
$ ssh root@121.121.121.121
root@121.121.121.121: Permission denied (publickey).
```
Then use graphical interface to add public key in **authorized_keys**. Digital ocean dashboard > profile > settings > security > Add SSH Key.

> Keep in mind that, you cannot use the control panel in Digital Ocean to add keys to already created droplets. You either have to create a new server after you've added the SSH key on the control panel, or add it manually to the authorized_keys 

Recommended **ssh-keygen** command:
```
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Remove and add identity in ssh - 
```
$ ssh-add -l        # list of all identity
$ ssh-add -D        # remove
$ ssh-add -l        # list of all identity
$ ssh-add ~/.ssh/id_rsa_digitalocean
$
$ ssh-add -l        # list of all identity
```

Tunneling with ssh
```
$ ssh -tt pi@10.2.1.12 ssh -tt pi@10.2.1.13 .......
```

### reference:
- https://www.ostechnix.com/how-to-use-pbcopy-and-pbpaste-commands-on-linux/
- https://help.ubuntu.com/community/AptGet/Howto
- https://www.tecmint.com/rsync-local-remote-file-synchronization-commands/
- https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-16-04
- https://www.youtube.com/watch?v=NmM9HA2MQGI
- https://www.youtube.com/watch?v=Yjrfm_oRO0w
- https://www.youtube.com/watch?v=vsXMMT2CqqE&t=
- https://www.youtube.com/watch?v=NF1pwjL9-DE
- https://github.com/antonykidis/Setup-ssh-for-github/blob/master/Setup-ssh-on-github.pdf
 
02: class done and practical done

## 03: Performance Part 1

### Keys to performance

1. **Frontend:** critical render path, optimized code, progressive web app
2. **In the wire:** minimize files, minimize delivery
3. **Backend:** CDNs, caching, load balancing, DB Scaling, GZIP 

<img src="./images/1-performance-optimization.png">

Step - 1
- Minimize Text (use UglifyJS - https://github.com/mishoo/UglifyJS2)
- Minimize Images ()

**JPG:** big pictures or images with many colors
**PNG:** logos with less colors
**GIF:** support transparency
**SVG:** vector graphics with few colors

### Minimize Images
- Transparency: use a PNG
- Animations: use GIF
- Colourful images: use a JPG
- Simple icons, logos, and illustrations: use SVGs
- Reduce PNG with TinyPNG (or, Gimp)
- Reduce JPEG with JPEG-Optimizer (or, Gimp)
- Try to choose simple illustrations over highly detailed photographs
- Always lower JPEG image quality (30-60%)
- Resize image based on size it will be displayed
- Display different sized images for different backgrounds. (use media query)
- Use CDNs like imgix
- Remove image metadata (http://www.verexif.com/en/ or, Gimp)

> To check the fastness of the site with Chrome Dev Tools > Network > Disable cache (check mark), Throttling (drop down),  <img src="./images/2-web-loading-test-in-slow-net.jpg"/>

### Network Optimizations
1. Minimize all text
2. Minimize images with Gimp
3. Media Queries
4. Minimize number of files (css, js etc.)

### Rule of thumbs
#### HTML
1. Load ```<style>``` in ```<head>```
2. Load ```<script>``` right before ```</body>```
#### CSS
3. Load only what is needed
4. Above the fold loading
5. Media attributes (media query)
6. Less specificity
#### JS
7. Load scripts asynchronously (if core functionality requires JS, use ```<script async>```. Third party scripts)
8. Defer loading of scripts (if core functionality does not requires JS, use ```<script defer>```. Third party scripts)
9. Minimize DOM manipulation
10. Avoid long running Javascript

<img src="./images/3-loading-third-party-javascript.png">

### Test a website's performance
- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [Test a website's performance](https://www.webpagetest.org/)
- [Pingdom Website Speed Test](https://tools.pingdom.com/)
- [Mobile Site Test](https://www.thinkwithgoogle.com/feature/testmysite)
- [See How Images Affect Your Page Speed](https://pageweight.imgix.com/)
- [Security. Performance. Compatibility. SEO](https://passmarked.com/)


### Exercise: Dev Tools: 
<li><a href="https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#activities" rel="nofollow">View main thread activities in a table</a> to sort activities based on which ones took up the most time.</li><li><a href="https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#fps" rel="nofollow">Analyze frames per second (FPS)</a> to measure whether your animations truly run smoothly.</li><li><a href="https://developers.google.com/web/updates/2017/11/devtools-release-notes#perf-monitor" rel="nofollow">Monitor CPU usage, JS heap size, DOM nodes, layouts per second, and more</a> in real-time with the Performance Monitor.</li><li><a href="https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#screenshots" rel="nofollow">Capture screenshots while recording</a> to play back exactly how the page looked while the page loaded, or an animation fired, and so on.</li><li><a href="https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#interactions" rel="nofollow">View interactions</a> to quickly identify what happened on a page after a user interacted with it.</li><li><a href="https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#scrolling-performance-issues" rel="nofollow">Find scroll performance issues in real-time</a> by highlighting the page whenever a potentially problematic listener fires.</li><li><a href="https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#paint-flashing" rel="nofollow">View paint events in real-time</a> to identify costly paint events that may be harming the performance of your animations.<br><br><a href="https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#main" rel="nofollow">View main thread activity</a> to view every event that occurred on the main thread while you were recording.</li>


### Resource:
- https://99designs.com/blog/tips/image-file-types/
- https://pageweight.imgix.com/
- https://www.sitepoint.com/gif-png-jpg-which-one-to-use/
- http://www.bsidestudios.com/blog/media-queries-common-sizes-cheat-sheet
- https://css-tricks.com/snippets/css/media-queries-for-standard-devices/
- https://stackoverflow.com/questions/985431/max-parallel-http-connections-in-a-browser
- https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/
- https://developers.google.com/web/tools/lighthouse/
- https://developers.google.com/web/fundamentals/performance/http2/



03: class done and practical done

## 04: React + Redux + Module Bundling

Install [create-react-app](https://www.npmjs.com/package/create-react-app) with npm - 
```
$ sudo npm install -g create-react-app
$ create-react-app robofriends
$ npm start
```

Updating create-react-app in a certain project. Open package.json file and change the version of "react-scripts" in the "dependencies" and then run ```npm install```
```
"dependencies": {
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-scripts": "2.0.1",
    "tachyons": "^4.9.0"
  },
```

And, run - 
```
$ npm install
$ npm start
$ npm install tachyons
```

Keep only /src/index.css index.js and registerServiceWorker.js and delete the rest.

Create and update /src/components/Card.js

Update /src/index.js

https://robohash.org/

https://robohash.org/any-text?size=200x200

Create and update /src/robots.js

Create and update /src/components/CardList.js

Create and update /src/containers/App.js

Create and update /src/components/SearchBox.js

> **Props** never changes

> **State** may change

Create and update /src/containers/App.css

Create and update /src/components/Scroll.js

```build``` command will build folder inside the project folder

```
$ npm run build
```

Create and update /src/components/ErrorBoundary.js

### React-Redux
<img src="./images/4-react-redux-workprocess.png">

All the ```actions``` come -> one ```reducer``` -> whole app one ```store``` -> ```make changes``` in front end. 

04: 22