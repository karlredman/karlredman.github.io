# Personal Website of Karl N. Redman

## Project Index
* NA

## Standards

### Commit message semantics for change logs
* ticket references example: ticket #88
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


### check html5 code and beautify using tidy
```
tidy --config ~/mbin/tidy.conf index.html >test.html
```

### indent code
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

### generating site maps
1. get a zip file of all maps from [xml-sitemaps.com](https://www.xml-sitemaps.com/)
1. explode the zip file in the production directory
1. overwrite the xml sitemap with a subdomain following version from [web-site-map.com](http://www.web-site-map.com/)

### updating changelog

```
cd [repo toplevel]
git changelog -a -p
pandoc -f markdown -t html -o production/changelog.html History.md
gitcommit
git push
git tag -a v1.0.2 -m "@Release: added more resume document formats. @fixed: documents. @Added resume"
git push --tags
```
