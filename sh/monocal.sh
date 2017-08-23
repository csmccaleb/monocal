#!/bin/bash

Y=$(date +"%y")
N=$(date +"%j")
F=$(($N/28))

if [ $(($N%28)) -lt 0 ]; then
  F=$((F - 1))
fi

X=$(expr 28 \* $F)
D=$(expr $N - $X - 1)
C=$(($N/28))

if [ $(($N%28)) -gt 0 ]; then
  C=$(($C + 1))
fi

if [ $C = 1 ]; then M="UNUM"
elif [ $C = 2 ]; then M="DUOM"
elif [ $C = 3 ]; then M="TRES"
elif [ $C = 4 ]; then M="QUATTR"
elif [ $C = 5 ]; then M="QUINT"
elif [ $C = 6 ]; then M="SEX"
elif [ $C = 7 ]; then M="SEPT"
elif [ $C = 8 ]; then M="OCT"
elif [ $C = 9 ]; then M="NON"
elif [ $C = 10 ]; then M="UNDEC"
elif [ $C = 11 ]; then M="DUDEC"
elif [ $C = 12 ]; then M="TREDEC"
fi

echo "$D $M $Y"
