# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Users
user_1 = User.create(email: 'app_academy@gmail.com')
user_2 = User.create(email: 'hackerrank@gmail.com')

#Shortened_Url

url_1 = ShortenedUrl.create(long_url: 'https://www.appacademy.io', short_url: '', user_id: user_1.id)
url_2 = ShortenedUrl.create(long_url: 'https://www.hackerrank.com/', short_url: '', user_id: user_2.id)
