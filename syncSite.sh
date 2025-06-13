#!/bin/bash
rsync -avz -e "ssh -p7822 -i /mnt/c/Users/jbrel/.ssh/id_rsa_lumensalis" \
    out/*    \
    whackybo@whackyboo.com:public_html/lumensalis.com