#/bin/bash

for file in *.html
do
    vi -s indent.txt $file
done
