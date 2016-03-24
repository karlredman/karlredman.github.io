# Heorot website 

## site update checklist
1. Update Code
  1. checkin code
  1. tag code if necessary
  ```
  git tag -a v0.8.7 -m "prepared site for google search tools and analytics"
  ```
  1. push code 
  1. (as root) pull code in /var/www/html/site_heorot
  
1. update blog as root
  1. chown -R ghost:ghost /var/www/html/site_heorot/ghost
1. add the passwords back into the blog code /var/www/html/site_heorot/ghost/config.js
