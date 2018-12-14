class BoardFollow < ApplicationRecord
  validates :board_id, :user_id, presence: true

  belongs_to :board
  belongs_to :user
end
