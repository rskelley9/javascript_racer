class CreateRounds < ActiveRecord::Migration
  def change
    create_table :rounds do |t|
      t.integer :player_id
      t.integer :game_id
      t.boolean :win 
      t.timestamps
    end
  end
end
