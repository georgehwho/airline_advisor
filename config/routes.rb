Rails.application.routes.draw do
  get 'pages/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'pages#index'

  namespace :api do
    namespace :v1 do
      #the params statement makes the slug the primary id
      resources :airlines, param: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end

  # this is a catch-all so random extra routes don't interfere with the react-router
  get '*path', to: 'pages#index', via: :all
end
