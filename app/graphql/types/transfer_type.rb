# frozen_string_literal: true

module Types
  class TransferType < Types::BaseObject
    field :trace_id, ID, null: false
    field :snapshot_id, String, null: true
    field :amount, Float, null: false
    field :memo, String, null: true
    field :transfer_type, String, null: false
    field :asset_id, String, null: false
    field :opponent_id, String, null: true
    field :wallet_id, String, null: true
    field :processed_at, GraphQL::Types::ISO8601DateTime, null: true

    field :recipient, Types::UserType, null: true

    def recipient
      BatchLoader::GraphQL.for(object.opponent_id).batch do |opponent_ids, loader|
        User.where(mixin_uuid: opponent_ids).each { |recipient| loader.call(recipient.mixin_uuid, recipient) }
      end
    end
  end
end
