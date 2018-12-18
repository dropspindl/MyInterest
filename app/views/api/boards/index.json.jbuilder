json.boards do
  @boards.each do |board|
    json.set! board.id do
      json.extract! board, :id, :title, :user_id, :description, :created_at
      # json.photoUrl url_for(post.photo)
    end
  end

end
