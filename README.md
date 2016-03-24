# Heorot website 

## site update checklist
1. if working on blog checkin the blog database (as root)
```
# CAUTION!!!! DO NOT DO git add -A
# do not checking ghost/config.js
git add ghost/content/data/ghost.d
git commit "updating db in repo"
git push
```
1. Update Code
    1. checkin code
    1. tag code if necessary
        ```
        git tag -a v0.8.7 -m "prepared site for google search tools and analytics"
        ```
    1. push code 
    1. (as root) pull code in /var/www/html/site_heorot
1. update blog as root
    ```
    chown -R ghost:ghost /var/www/html/site_heorot/ghost
    ```
1. add the passwords back into the blog code /var/www/html/site_heorot/ghost/config.js

## adding a theme to ghost
* [How to Install a Ghost Theme](https://www.allaboutghost.com/how-to-install-a-ghost-theme/)
1. download and expload to ghost/content/themes

