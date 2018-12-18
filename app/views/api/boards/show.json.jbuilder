



  json.extract! @board, :id, :title, :user_id, :description
  # json.image_url asset_path(@board.image_url)


# json.pins do
#   @board.pins.each do |item|
#     json.set! pin.id do
#       json.partial! 'api/pins/pin', pin: pin
#     end
#   end
# end
