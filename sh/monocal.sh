#!/bin/bash

M=(ENA DYA TRI TET PEN HEX HEP OKT ENI DEK END DOD TRE)

N=$(date +"%j")
S=$(($N/28))
P=$(($N%28))
F=$S
C=$S

if [ $P -lt 0 ]; then F=$(($F-1)); fi
if [ $P -gt 0 ]; then C=$(($C+1)); fi

echo "$(($N-(28*$F)-1)) ${M[$C-1]} $(date +"%y")"
