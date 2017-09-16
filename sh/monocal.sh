#!/bin/bash

M=(UNUM DUOM TRES QUATTR QUINT SEX SEPT OCT NON DEC UNDEC DUDEC TREDEC)

N=$(date +"%j")
S=$(($N/28))
P=$(($N%28))
F=$S

if [ $P -lt 0 ]; then F=$(($F-1))
fi

C=$S

if [ $P -gt 0 ]; then C=$(($C+1))
fi

echo "$(($N-(28*$F)-1)) ${M[$C-1]} $(date +"%y")"
