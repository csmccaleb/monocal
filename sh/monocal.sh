#!/bin/bash

M=(UNUM DUOM TRES QUATTR QUINT SEX SEPT OCT NON UNDEC DUDEC TREDEC)

N=$(date +"%j")
F=$(($N/28))

if [ $(($N%28)) -lt 0 ]; then
  F=$(($F - 1))
fi

C=$(($N/28))

if [ $(($N%28)) -gt 0 ]; then
  C=$(($C + 1))
fi

echo "$(($N - (28 * $F) - 1)) ${M[$C - 1]} $(date +"%y")"
