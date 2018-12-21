json.set! @pin.id do
  json.extract! @pin, :id, :title, :description, :user_id, :description, :created_at
  json.photo url_for(@pin.photo)
end
