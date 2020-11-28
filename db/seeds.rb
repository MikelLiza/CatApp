# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Cat.create(name: "Alice", breed:"Ragdoll", age:5,owner_email: "alice@myemail.com")
Cat.create(name: "Bob", breed:"Siamese", age:15,owner_email: "bob@myemail.com")
Cat.create(name: "Charles", breed:"Russian Blue", age:7,owner_email: "charles@myemail.com")
Cat.create(name: "Diane", breed:"Bengal", age:7,owner_email: "diane@myemail.com")
