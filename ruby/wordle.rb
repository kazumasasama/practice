# Build wordle in terminal!
# feature list
# (user story)
#   user can type in 5 letters
#   only get 6 tries
#   display the empty spaces
#   gives feedback after each guess
#     gives back 5 squares
#       each square is either grey/yellow/green
#   user guess has to be a word (too difficult)
#   tells you if you got it correct
#   copy paste into text/twitter/whatever
#   need a real answer for that day
# MVP
# user can type in 5 letters
# gives feedback after each guess
#     gives back 5 squares
#       each square is either grey/yellow/green
# tells you if you got it correct
# need a real answer for that day

answer = ["h", "a", "p", "p", "y"]
flame= ["-", "-", "-", "-", "-"]
p flame.join

6.times do
  print "Guess the word (5 characters): "
  user_guess = gets.chomp
  if user_guess == 5
    user_guess = user_guess.split(//)
    i = 0
    
    while i < answer.length
      if user_guess[i] == answer[i]
        flame[i] = answer[i]
      end
      i += 1
    end
    p flame.join
    
    if user_guess == answer
      flame = user_guess
      puts "Your got it!"
      break
    end
  else
    puts "Should be 5 digits. Try Again!"
  end

end
