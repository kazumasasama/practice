require 'date'
# require 'time'

# puts Date.today # 2022-04-21

# # to_sでstring型に変更できる
# puts Date.today.to_s # 2022-04-21

# puts Date.today.class # Date
# puts Date.today.to_s.class # String

# puts Time.now # 2022-04-21 12:10:21 -0400

# puts DateTime.now # 2022-04-21T12:11:22-04:00


# time = Time.now.strftime('%H:%M').split(":").map{|t| t.to_i}
# if time[1] < 30
#   time[1] = 30
# elsif time[1] > 30
#   time[1] = 0
#   time[0] += 1
# end

# p time


# puts 33.round(-2)
# puts 3.round(-1)

# p "11:00".split(":")


# p Time.new(Date.).strftime('%H:00')



# p today = Date.today
# puts today = today + 30
# p today.class
# p today.year
# p today.mon
# p today.day

# puts today_2 = DateTime.new(today.year, today.mon, today.day, 11)


puts Time.now
puts Date.today
puts TimeZone.now

# 1. タイムゾーンの設定　ENV['TZ']
# https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

2. デフォルトのタイムゾーンを設定（システムと環境変数とは別）
# application.rb
config.time_zone = 'Tokyo' # || New_York
https://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html