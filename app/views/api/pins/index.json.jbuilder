json.pins do
  @pins.each do |pin|
    json.set! pin.id do
      json.extract! pin, :id, :title, :description, :user_id, :description, :created_at
      json.photoUrl url_for(pin.photo)
    end
  end

end
