module API
  class Base < Grape::API
    mount API::V1::Root
  end
end
