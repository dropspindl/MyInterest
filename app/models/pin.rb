class Pin < ApplicationRecord
  validates :title, :user_id, presence: true

  belongs_to :user
  has_many :board_pins

  has_many :boards,
    source: :board_pins,
    through: :board

  has_one_attached :photo
end
