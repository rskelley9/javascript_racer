class Round < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :player
  belongs_to :game


end
