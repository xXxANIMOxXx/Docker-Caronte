#!/bin/bash
set -e

source /root/admin/base/mainuser/mainuser.sh
source /root/admin/base/mainssh/mainssh.sh

main(){
    touch /root/logs/informe.log
    newUser
    configurar_ssh
    configurar_sudo
    tail -f /dev/null
}

main