Rails.application.routes.draw do
  # resources :donors, only: [:index]
  # resources :donations
  # resources :stories
  resources :organisations, except: [:new, :edit]
  resources :beneficiaries, except: [:new, :edit]
  resources :inventories, except: [:new, :edit]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"
end
