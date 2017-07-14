#!/bin/bash

# super-rudimentary implementation of
# MONOCAL in bash
#
# Josh Avanier

YEAR=$(date +"%y")
NTH=$(date +"%j")

# calculate date

FLOOR=$(($NTH/28))

if [ $(($NTH%28)) -lt 0 ]; then
  FLOOR=$((FLOOR - 1))
fi

MULTIPLIER=$(expr 28 \* $FLOOR)
MONODATE=$(expr $NTH - $MULTIPLIER - 1)

# calculate month

CEIL=$(($NTH/28))

if [ $(($NTH%28)) -gt 0 ]; then
  CEIL=$(($CEIL + 1))
fi

if [ $CEIL = 1 ]; then
  MONOMOTH="UNUM"
elif [ $CEIL = 2 ]; then
  MONOMONTH="DUOM"
elif [ $CEIL = 3 ]; then
  MONOMONTH="TRES"
elif [ $CEIL = 4 ]; then
  MONOMONTH="QUATTR"
elif [ $CEIL = 5 ]; then
  MONOMONTH="QUINT"
elif [ $CEIL = 6 ]; then
  MONOMONTH="SEX"
elif [ $CEIL = 7 ]; then
  MONOMONTH="SEPT"
elif [ $CEIL = 8 ]; then
  MONOMONTH="OCT"
elif [ $CEIL = 9 ]; then
  MONOMONTH="NON"
elif [ $CEIL = 10 ]; then
  MONOMONTH="UNDEC"
elif [ $CEIL = 11 ]; then
  MONOMONTH="DUDEC"
elif [ $CEIL = 12 ]; then
  MONOMONTH="TREDEC"
fi

echo "$MONODATE $MONOMONTH $YEAR"
