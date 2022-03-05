# Use the Faker gem to make 100 new employees and put them into an array. Each employee should have a different name and salary

require 'faker'

class Employee

  attr_accessor :first_name, :last_name, :salary, :active, :email

  def initialize(input_options)
    @first_name = input_options[:first_name]
    @last_name = input_options[:last_name]
    @salary = input_options[:salary]
    @active = input_options[:active]
    @email = input_options[:email]
  end

  def print_info
    puts "#{@first_name} #{@last_name} makes #{@salary} a year."
  end

  def give_annual_raise
    @salary = 1.05 * @salary
  end

  def full_name
    if @last_name.end_with?("s")
      puts "#{@first_name} #{@last_name} , Esquire"
    else
      puts "#{@first_name} #{@last_name}"
    end
  end
  
  def email
    if !@email
      puts "#{@first_name.downcase + @last_name.downcase}@gmail.com"
    else
      puts @email
    end
  end

end

employees = []
employee = {}
i = 0
10.times do
  employee = Employee.new(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    salary: Faker::Number.between(from: 60_000, to: 120_000),
    active: true
  )
  employees << employee
  i += 0
end

p employee
pp employees
employee.print_info