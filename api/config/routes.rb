Rails.application.routes.draw do
  resources :donors
  resources :donations, except: [:destroy]
  resources :stories
  resources :organisations, except: [:new, :edit] do
    resources :beneficiaries, only: [:index]
    resources :inventories, only: [:index]
    resources :donations, only: [:index]
  end
  resources :beneficiaries, except: [:new, :edit]
  resources :inventories, except: [:new, :edit]
  resources :transactions
  resources :reminders
  resources :admins
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post "/login", to: "sessions#login"

  # Defines the root path route ("/")
  root "home#index"
end
