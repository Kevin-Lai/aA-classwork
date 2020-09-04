class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :title, null:false
      t.string :image_url, null:false
      t.integer :artist_id, null:false

      t.timestamps
    end
    # the artist_id and title combination must be unique.
    # The order does matter in indexing.
    add_index :artworks, [:title, :artist_id], unique: true

    # Add an index on artist_id so that
    # we can quickly get all the artworks for a user.
    add_index :artworks, :artist_id

    add_index :artworks, :image_url, unique: true
  end
end
