Rails.application.routes.draw do
  resources :notifications
  resources :users
  resources :donation_activities
  resources :user_engagements
  resources :messages
  
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  resources :donors,  except: [:new, :edit]
  resources :donations, except: [:destroy]
  resources :stories,  except: [:new, :edit]
  resources :events, except: [:new, :edit]

  resources :organisations, except: [:new, :edit] do
    resources :beneficiaries, only: [:index]
    resources :inventories, only: [:index]
    resources :donations, only: [:index]
  end

  resources :notifications, only: [:index, :new, :create, :destroy]
  resources :beneficiaries, except: [:new, :edit]
  resources :inventories, except: [:new, :edit]
  resources :transactions,  except: [:new, :edit]
  resources :reminders,  except: [:new, :edit]
  resources :admins,  except: [:new, :edit]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post "/login", to: "sessions#create"
  post "/logout", to: "sessions#destroy"

  # Defines the root path route ("/")
  root "home#index"
end
