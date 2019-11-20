module API
  module V1
    class Currency < Grape::API
      resource :pairs do
        desc "Return all pairs"
        get "" do
          Conversion.all
        end

        desc "create new pairs"
        post ""  do
          @var = JSON.parse(request.body.read)

          Conversion.create(@var['data'])
        end
        desc "update new pairs"
        put ""  do
          @var = JSON.parse(request.body.read)

          Conversion.upsert_all(@var['data'])
        end
        desc "delete pairs"
        delete "" do
          @var = JSON.parse(request.body.read)
          Conversion.delete(@var['data'])
        end
      end

    end
  end
end
