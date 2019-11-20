class CreateConversions < ActiveRecord::Migration[6.0]
  def change
    create_table :conversions do |t|
      t.string :currency1
      t.string :currency2
      t.float :rate

      t.timestamps
    end
  end
end
