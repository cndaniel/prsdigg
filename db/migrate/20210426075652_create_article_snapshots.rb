class CreateArticleSnapshots < ActiveRecord::Migration[6.1]
  def change
    create_table :article_snapshots do |t|
      t.uuid :article_uuid
      t.json :raw
      t.string :signature
      t.string :file_hash
      t.integer :block_number
      t.text :file_content

      t.timestamps
    end

    add_index :article_snapshots, :block_number, unique: true
    add_index :article_snapshots, :article_uuid
  end
end
