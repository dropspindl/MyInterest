class CreateBoardPins < ActiveRecord::Migration[5.2]
  def change
    create_table :board_pins do |t|
      t.integer :board_id, null: false
      t.integer :pin_id, null: false
      t.timestamps
    end
    add_index :board_pins, :board_id
    add_index :board_pins, :pin_id
  end
end
