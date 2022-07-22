def valid_anagram(string1, string2)
  i = 0
  valid = []
  base = ""
  if string1.length < string2.length
    base = string2
    target = string1
  else
    base = string1
    target = string2
  end

  while i < base.length
    if target.count(base[i]) == base.count(base[i])
      valid << true
    elsif target.count(base[i]) != base.count(base[i])
      valid << false
    end
    i += 1
  end
  return valid.all?(true)
end


string1 = "aaz"
string2 = "zaa"
p string1.count("a")
p valid_anagram(string1, string2) # => true