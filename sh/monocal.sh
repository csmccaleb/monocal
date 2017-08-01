#!/bin/bash

# MONOCAL.sh
# super-rudimentary implementation of MONOCAL in bash
#
# Josh Avanier
#
# MIT

YEAR=$(date +"%y")
NTH=$(date +"%j")

# calculate date

FLOOR=$(($NTH/28))

if [ $(($NTH%28)) -lt 0 ]; then
  FLOOR=$((FLOOR - 1))
fi

MULTIPLIER=$(expr 28 \* $FLOOR)
DATE=$(expr $NTH - $MULTIPLIER - 1)

# calculate month

CEIL=$(($NTH/28))

if [ $(($NTH%28)) -gt 0 ]; then
  CEIL=$(($CEIL + 1))
fi

if [ $CEIL = 1 ]; then
  MONTH="UNUM"
elif [ $CEIL = 2 ]; then
  MONTH="DUOM"
elif [ $CEIL = 3 ]; then
  MONTH="TRES"
elif [ $CEIL = 4 ]; then
  MONTH="QUATTR"
elif [ $CEIL = 5 ]; then
  MONTH="QUINT"
elif [ $CEIL = 6 ]; then
  MONTH="SEX"
elif [ $CEIL = 7 ]; then
  MONTH="SEPT"
elif [ $CEIL = 8 ]; then
  MONTH="OCT"
elif [ $CEIL = 9 ]; then
  MONTH="NON"
elif [ $CEIL = 10 ]; then
  MONTH="UNDEC"
elif [ $CEIL = 11 ]; then
  MONTH="DUDEC"
elif [ $CEIL = 12 ]; then
  MONTH="TREDEC"
fi

echo "$DATE $MONTH $YEAR"
