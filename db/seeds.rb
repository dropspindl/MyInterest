# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Board.delete_all

erica = User.create!(username: 'Erica', password: 'myinterest')
anneke = User.create!(username:'Anneke', password: 'asdfasdf')
natasha = User.create!(username: 'Natasha', password: 'asdfasdf')
blake = User.create!(username: 'Blake', password: 'asdfasdf')

scribal = Board.create!(
  title: 'Scribal',
  user_id: erica.id,
  description: 'medieval calligraphy and illumination'
  )

sewing = Board.create!(
  title: 'Sewing',
  user_id: erica.id,
  description: 'Anything involving a needle and thread'
)

decor = Board.create!(
  title: 'Decor',
  user_id: erica.id
)

misc = Board.create!(
  title:'Other',
  user_id: erica.id,
  description: "Everything else"
)

testing = Board.create!(
  title: "You shouldn't see this",
  user_id: blake.id,
  description: "This board belongs to Blake and should not be on Erica's page"
)
