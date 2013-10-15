class Player < ActiveRecord::Base
  # Remember to create a migration!
  has_many :games, through: :rounds
  has_many :rounds

end
