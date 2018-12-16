class User < ApplicationRecord

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :boards
  has_many :pins
  has_many :board_follows

  has_many :followed_boards,
    through: :board_follows,
    source: :board

  has_one_attached :photo


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = generate_token
    save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end








end
