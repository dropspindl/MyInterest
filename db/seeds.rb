# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'


User.delete_all
Board.delete_all
Pin.delete_all
BoardPin.delete_all

erica = User.create!(username: 'Erica', password: 'myinterest')
anneke = User.create!(username:'Anneke', password: 'asdfasdf')
natasha = User.create!(username: 'Natasha', password: 'asdfasdf')
blake = User.create!(username: 'Blake', password: 'asdfasdf')
liz = User.create!(username: 'Liz', password: 'asdfasdf')

scribal = Board.create!(
  title: 'Scribal',
  user_id: erica.id,
  description: 'medieval calligraphy and illumination'
  )

paper = Board.create!(
  title: 'Paper Cutting',
  user_id: erica.id,
  description: 'pretty paper'
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

wire = Board.create!(
  title:'Wireworking',
  user_id: erica.id,
  description: "All Things Wire"
)

testing = Board.create!(
  title: "You shouldn't see this",
  user_id: blake.id,
  description: "This board belongs to Blake and should not be on Erica's page"
)

glowballs = Pin.create!(
  title: "Twine Balls with Fairy Lights",
  user_id: erica.id,
  description: "Great holiday decor or low level lighting"
)
glowballs_photo = open('https://s3-us-west-1.amazonaws.com/myinterest-dev/7dJ7u6n5j3CJvv8AcpT71crF')
glowballs.photo.attach(io: glowballs_photo, filename: 'glowballs.jpg')

fox = Pin.create!(
  title: "Fox Papercutting",
  user_id: erica.id,
  description: "Four layers of overlayed paper cutting"
)
fox_photo = open('https://s3-us-west-1.amazonaws.com/myinterest-dev/9vcn21t2kgbudV61jUbRZ8PL')
fox.photo.attach(io: fox_photo, filename: 'fox.jpg')


late_rus = Pin.create!(
  title: "Late period Russian",
  user_id: erica.id
)
late_rus_photo = open('https://s3-us-west-1.amazonaws.com/myinterest-dev/8hMTDK747TWBfZTHCQLY6DQu')
late_rus.photo.attach(io: late_rus_photo, filename: 'late_rus.jpg')

unto_all = Pin.create!(
  title: "10th C Briton",
  user_id: erica.id
)
unto_all_photo = open('https://s3-us-west-1.amazonaws.com/myinterest-dev/untoall.jpg')
unto_all.photo.attach(io: unto_all_photo, filename: 'unto_all.jpg')

white_vine = Pin.create!(
  title: "Whitevine work",
  user_id: erica.id
)
white_vine_photo = open('https://s3-us-west-1.amazonaws.com/myinterest-dev/white_vine.jpg')
white_vine.photo.attach(io: white_vine_photo, filename: 'white_vine.jpg')

prowess = Pin.create!(
  title: "10th C Briton",
  user_id: erica.id
)
prowess_photo = open('https://s3-us-west-1.amazonaws.com/myinterest-dev/prowess.jpg')
prowess.photo.attach(io: prowess_photo, filename: 'prowess.jpg')

interlock = Pin.create!(
  title: "Russian Geometric",
  user_id: erica.id
)
interlock_photo = open('https://s3-us-west-1.amazonaws.com/myinterest-dev/rus_interlocking.jpg')
interlock.photo.attach(io: interlock_photo, filename: 'interlock.jpg')

french_actually = Pin.create!(
  title: "Actually French, believe it or not",
  user_id: erica.id
)
french_actually_photo = open('https://s3-us-west-1.amazonaws.com/myinterest-dev/actually_french.jpg')
french_actually.photo.attach(io: french_actually_photo, filename: 'french_actually.jpg')

wessex = Pin.create!(
  title: "Standard Bar and Vines",
  user_id: erica.id
)
wessex_photo = open('https://s3-us-west-1.amazonaws.com/myinterest-dev/wessex.jpg')
wessex.photo.attach(io: wessex_photo, filename: 'wessex.jpg')

whitework = Pin.create!(
  title: "Medieval whitework practice",
  user_id: erica.id
)
whitework_photo = open('https://s3-us-west-1.amazonaws.com/myinterest-dev/med_white.jpg')
whitework.photo.attach(io: whitework_photo, filename: 'whitework.jpg')

floral_blank = Pin.create!(
  title: "Small Medieval Floral",
  user_id: erica.id
)
floral_blank_photo = open('https://s3-us-west-1.amazonaws.com/myinterest-dev/small_med_flower_blank.jpg')
floral_blank.photo.attach(io: floral_blank_photo, filename: 'floral_blank.jpg')

mid_rus = Pin.create!(
  title: "Mid period Russian",
  user_id: erica.id
)
mid_rus_photo = open('https://s3-us-west-1.amazonaws.com/myinterest-dev/1vqDy13Rg3NEDLFQthG3Mdzo')
mid_rus.photo.attach(io: mid_rus_photo, filename: 'mid_rus.jpg')

# early_rus = Pin.create!(
#   title: "Early Eastern Europe",
#   user_id: erica.id
# )
# early_rus_photo = open('https://s3-us-west-1.amazonaws.com/myinterest-dev/68T7eJ2uYzRV9ZvdmL4QghhD')
# early_rus.photo.attach(io: early_rus_photo, filename: 'early_rus.jpg')

# mid_french = Pin.create!(
#   title: "Medieval French",
#   description: "Blue wavy",
#   user_id: erica.id
# )
# mid_french_photo = open('https://s3-us-west-1.amazonaws.com/myinterest-dev/4J74s6vmt3Hd7AE33mwRqZPV')
# mid_french.photo.attach(io: mid_french_photo, filename: 'mid_french.jpg')

# first_quill = Pin.create!(
#   title: "Early Briton",
#   description: "My first attempt at calligraphy with a quill pen",
#   user_id: erica.id
# )
# first_quill_photo = open('https://s3-us-west-1.amazonaws.com/myinterest-dev/4pvL2HuJgoHJVWiUynTysxS5')
# first_quill.photo.attach(io: first_quill_photo, filename: 'first_quill.jpg')

circus_rus = Pin.create!(
  title: "Moar Russian",
  description: "The circusy looking one",
  user_id: erica.id
)
circus_rus_photo = open('https://s3-us-west-1.amazonaws.com/myinterest-dev/5uTcCW6i1rSkU8M7aLRcjqRP')
circus_rus.photo.attach(io: circus_rus_photo, filename: 'circus_rus.jpg')

contract = Pin.create!(
  title: "Medieval French",
  user_id: erica.id
)
contract_photo = open('https://s3-us-west-1.amazonaws.com/myinterest-dev/7iW1cC6TsNTVAW6SayL1wAkd')
contract.photo.attach(io: contract_photo, filename: 'contract.jpg')





s2 = BoardPin.create!(
  pin_id: late_rus.id,
  board_id: scribal.id
)

s13 = BoardPin.create!(
  pin_id: interlock.id,
  board_id: scribal.id
)

s10 = BoardPin.create!(
  pin_id: french_actually.id,
  board_id: scribal.id
)

s11 = BoardPin.create!(
  pin_id: white_vine.id,
  board_id: scribal.id
)




# s4 = BoardPin.create!(
#   pin_id: mid_french.id,
#   board_id: scribal.id
# )
#
# s3 = BoardPin.create!(
#   pin_id: first_quill.id,
#   board_id: scribal.id
# )

s4 = BoardPin.create!(
  pin_id: circus_rus.id,
  board_id: scribal.id
)

s5 = BoardPin.create!(
  pin_id: contract.id,
  board_id: scribal.id
)

s6 = BoardPin.create!(
  pin_id: unto_all.id,
  board_id: scribal.id
)

s7 = BoardPin.create!(
  pin_id: wessex.id,
  board_id: scribal.id
)

s8 = BoardPin.create!(
  pin_id: whitework.id,
  board_id: scribal.id
)

s9 = BoardPin.create!(
  pin_id: floral_blank.id,
  board_id: scribal.id
)



s12 = BoardPin.create!(
  pin_id: prowess.id,
  board_id: scribal.id
)

s3 = BoardPin.create!(
  pin_id: mid_rus.id,
  board_id: scribal.id
)
#
# s1 = BoardPin.create!(
#   pin_id: early_rus.id,
#   board_id: scribal.id
# )


d1 = BoardPin.create!(
  pin_id: glowballs.id,
  board_id: decor.id
)

p1 = BoardPin.create!(
  pin_id: fox.id,
  board_id: paper.id
)
