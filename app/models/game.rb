class Game < ActiveRecord::Base
  # Remember to create a migration!
  has_many :rounds
  has_many :players, through: :rounds

end
