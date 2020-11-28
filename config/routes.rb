Rails.application.routes.draw do
  get 'home/home'
  get 'home/webform'
  get 'home/restable'
  get 'home/game'
  resources :cats
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#home'
  get 'addcat', to: 'home#webform'
  get 'allcats', to: 'home#restable'
end
