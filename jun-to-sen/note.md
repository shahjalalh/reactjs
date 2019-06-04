# Senior Web Developer Roadmap (2019)

## 01: Introduction 

https://aneagoie.github.io/keiko-corp/

https://github.com/aneagoie/python-cheatsheet

https://github.com/aneagoie/smart-brain

https://github.com/aneagoie/robofriends

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

03: 01

