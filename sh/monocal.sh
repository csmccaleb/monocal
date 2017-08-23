#!/bin/bash

# MONOCAL.sh
# super-rudimentary implementation of MONOCAL in bash
#
# Josh Avanier
#
# MIT

Y=$(date +"%y")
N=$(date +"%j")
F=$(($N/28))

if [ $(($N%28)) -lt 0 ]; then
  F=$((F - 1))
fi

X=$(expr 28 \* $F)
MD=$(expr $N - $X - 1)
C=$(($N/28))

if [ $(($N%28)) -gt 0 ]; then
  C=$(($C + 1))
fi

if [ $C = 1 ]; then MM="UNUM"
elif [ $C = 2 ]; then MM="DUOM"
elif [ $C = 3 ]; then MM="TRES"
elif [ $C = 4 ]; then MM="QUATTR"
elif [ $C = 5 ]; then MM="QUINT"
elif [ $C = 6 ]; then MM="SEX"
elif [ $C = 7 ]; then MM="SEPT"
elif [ $C = 8 ]; then MM="OCT"
elif [ $C = 9 ]; then MM="NON"
elif [ $C = 10 ]; then MM="UNDEC"
elif [ $C = 11 ]; then MM="DUDEC"
elif [ $C = 12 ]; then MM="TREDEC"
fi

echo "$MD $MM $Y"
