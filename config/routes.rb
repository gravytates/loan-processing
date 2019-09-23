

Rails.application.routes.draw do
  resources :loan_application
  get 'loan_application/index'
  root to: 'loan_application#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
