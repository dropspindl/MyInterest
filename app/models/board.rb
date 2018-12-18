class Board < ApplicationRecord
  validates :title, :user_id, presence: true

  belongs_to :user

  has_many :board_pins
  has_many :board_follows

  has_many :followers,
    through: :board_follows,
    source: :user

  has_many :pins,
    through: :board_pins,
    source: :pin


end
