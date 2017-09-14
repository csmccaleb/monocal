#!/usr/bin/ruby -w

# MONOCAL in Ruby
# Josh Avanier

time  = Time.new
yday  = time.yday  # day of year
month = time.month # 1 - 12
date  = time.day   # 1 - 31
day   = time.wday  # 0 = Sunday

months = ["Unumium", "Duomium", "Tresium", "Quattrium", "Quintium", "Sexium", "Septium", "Octium", "Nonium", "Decium", "Undecium", "Dudecium", "Tredecium"]
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
year_day = "Chomsky Day"
leap_day = "Leap Day"
quarters = ["i.", "ii.", "iii.", "iv."]
quarters_alt = ["air", "water", "fire", "earth"]

# get day

def day()
  days[day]
end

# get date

def dat(nth)
  number = nth - (28 * Math.floor(nth / 28))

  if number == 0
    number = 28
  end

  number
end

# get week

def wek(nth)
  Math.floor(nth / 7)
end

# get month

def mon(nth)
  number = Math.ceil(nth / 28)
  puts months[number]
end

# get quarter

def qua(nth)
  number = Math.floor(wek(nth) / 13)
  puts quarters[number]
end

# get alt quarter

def aqu()
  number = Math.floor(wek(nth) / 13)
  puts quarters_alt[number]
end

# convert

def convert()

end
