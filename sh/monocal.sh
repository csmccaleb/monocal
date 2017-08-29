#!/bin/bash

M=(UNUM DUOM TRES QUATTR QUINT SEX SEPT OCT NON UNDEC DUDEC TREDEC)

Y=$(date +"%y")
N=$(date +"%j")
F=$(($N/28))

if [ $(($N%28)) -lt 0 ]; then
  F=$(($F - 1))
fi

X=$(expr 28 \* $F)
D=$(expr $N - $X - 1)
C=$(($N/28))

if [ $(($N%28)) -gt 0 ]; then
  C=$(($C + 1))
fi

echo "$D ${M[$C - 1]} $Y"
