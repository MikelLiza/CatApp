json.extract! cat, :id, :name, :breed, :age, :owner_email, :created_at, :updated_at
json.url cat_url(cat, format: :json)
