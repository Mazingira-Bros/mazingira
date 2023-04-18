Rails.application.routes.draw do
  resources :donors, only: [:index]
  resources :organisations
  resources :donations
  resources :beneficiaries
  resources :stories
  resources :transactions
  resources :reminders 
  resources :admins
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"
end
