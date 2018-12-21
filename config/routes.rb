Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :boards, except: [:new, :edit]
    resources :pins, only: [:create, :destroy, :show, :index]
    resources :board_pins, only: [:create, :destroy]
  end

  root "static_pages#root"

  get 'api/users/:user_id/pins', to: 'api/pins#all_pins_for_user'
end
