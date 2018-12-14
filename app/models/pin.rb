class Pin < ApplicationRecord
  validates :title, :user_id, presence: true

  belongs_to :user
  has_many :board_pins

  has :boards,
    source: :board_pins
    through: :board
end
