# Heorot website 

## Project Index


## Standards
### Commit message semantics for change logs
* references ticket#88
* @Release
  * actual releases
* @Added
  * for new features.
* @Changed
  * for changes in existing functionality.
* @Deprecated
  * for once-stable features removed in upcoming releases.
* @Removed
  * for deprecated features removed in this release.
* @Fixed
  * for any bug fixes.
* @Security
  * to invite users to upgrade in case of vulnerabilities.
* @Test
  * testing out code or building a unit test
* @UnitTest
  * a formal unit test
* @Prototpe
  * Indicates that the commit is a development prototype
* @Update
  * Indicates that a commit is a general interim update
* [no semantic tag]
  * same as @Update
* An '*' within a message indicates that it is a bullet point for the commit.
#### examples
```
git commit -am "@Added: proper google custom search bar functionality. @Added unified menues with correct icons. @Added quicky script to reindent all html files in the directory through vim (for consistancy)"
```



## HOWTO
### update the change log

### site update checklist
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

## Restarting ghost
```
ps -edf |grep "index.js" |awk '{print $2}'|xargs kill -9; service ghost start

```

## check html5 code and beautify using tidy
```
tidy --config ~/mbin/tidy.conf index.html >test.html
```

## indent code
* vim
  ```
  # goto beginning of file
  gg

  # indent from here to end
  =G
  ```
* vim command line
  ```
  echo 'gg=G' > indent.txt
  echo ':wq' >> indent.txt
  vim -s indent.txt fil
  ```
* vim indenting all html files in a directory
  * script
    ```
    #/bin/bash

    for file in *.html
    do
        vi -s indent.txt $file
    done
    ```
  * command file
    ```
    gg=G
    :wq
    ```

## generating site maps
1. get a zip file of all maps from [xml-sitemaps.com](https://www.xml-sitemaps.com/)
1. explode the zip file in the production directory
1. overwrite the xml sitemap with a subdomain following version from [web-site-map.com](http://www.web-site-map.com/)
