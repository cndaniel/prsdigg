# frozen_string_literal: true

class DailyStatisticGenerateWorker
  include Sidekiq::Worker
  sidekiq_options queue: :low, retry: false

  def perform
    DailyStatistic.generate Time.current.yesterday
  end
end
