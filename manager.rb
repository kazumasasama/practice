# Create a new file called manager.rb. Paste in the code: https://gist.github.com/peterxjang/628b90b89bd7f61f8cff9319a7f3d59d
# Create a method in the Manager class called give_all_raises that loops through each of the manager’s employees and gives them a raise (using the give_annual_raise method). Demonstrate how it works.
# Create a method in the Manager class called fire_all_employees that loops through each of the manager’s employees and changes their active status to false.
  # create a method fire_all_employees in Manager
  # loops all the employees
  # change their status to false

# Bonus: What happens when you define a method in the Employee and Manager class with the same name? Read more about method overriding here: http://rubylearning.com/satishtalim/ruby_overriding_methods.html. Then try to use super on a method other than initialize!

  # manager use the instance method in Manager class,
  # employee use the instance method in Employee class.

  # Able to override the method in super class(Manager class) from subclass (Employee class)

  # If there is no overriding in the subclass, subclass use the method in the super class

class Employee
  attr_reader :first_name, :last_name, :active
  attr_writer :active

  def initialize(input_options)
    @first_name = input_options[:first_name]
    @last_name = input_options[:last_name]
    @salary = input_options[:salary]
    @active = input_options[:active]
  end

  def print_info
    puts "#{@first_name} #{@last_name} makes #{@salary} a year."
  end

  def give_annual_raise
    p "employee ===="
    p @salary = 1.05 * @salary
  end
end

employee1 = Employee.new({first_name: "Majora", last_name: "Carter", salary: 80000, active: true})
employee2 = Employee.new(first_name: "Danilo", last_name: "Campos", salary: 70000, active: true)
# employee1.print_info
# employee2.print_info

class Manager < Employee
  attr_accessor :employees
  def initialize(input_options)
    super
    @employees = input_options[:employees]
  end

  def send_report
    puts "Sending email..."
    # use email sending library...
    puts "Email sent!"
  end

  def give_all_raises
    @employees.each do |employee|
      p employee.give_annual_raise
    end
  end

  def fire_all_employees
    @employees.each do |employee|
      employee.active = false
    end
  end

end

manager = Manager.new(first_name: "Saron", last_name: "Yitbarek", salary: 100000, active: true, employees: [employee1, employee2])
# manager.print_info
# manager.send_report
# manager.give_all_raises
manager.give_annual_raise
employee1.give_annual_raise
# manager.fire_all_employees


# Bonus

# # https://www.javadrive.jp/ruby/inherit/index2.html
# class Car
#   def accele
#     puts "アクセルを踏みました"
#   end

#   def brake
#     puts "ブレーキを踏みました"
#   end
# end

# class Soarer < Car
#   def openRoof
#     puts "ルーフを開けました"
#   end

#   def accele
#     puts "アクセルを踏んで加速しました"
#   end
# end

# class Crown < Car
#   def reclining
#     puts "シートをリクライニングしました"
#   end
# end

# soarer = Soarer.new
# # call accele method in the Soarer class
# # result == "アクセルを踏んで加速しました"
# soarer.accele

# crown = Crown.new
# # call accele method in the Car class
# # result == "アクセルを踏みました"
# crown.accele