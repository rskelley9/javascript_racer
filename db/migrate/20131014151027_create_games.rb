class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :elapsed_time
      t.timestamps 
    end
  end
end
