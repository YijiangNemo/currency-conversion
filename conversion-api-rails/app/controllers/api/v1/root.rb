module API
  module V1
    class Root < Grape::API
      prefix 'api'
      format :json
      version 'v1', using: :path

      rescue_from :all, backtrace: true
      get ""  do
        'root'
      end
      mount API::V1::Currency
    end
  end
end