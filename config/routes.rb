Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :boards, except: [:new, :edit]
    resources :pins, only: [:create, :destroy, :show, :index]
  end

  root "static_pages#root"
end
