Rails.application.routes.draw do

  get  'main_pages/home'
  
  root 'main_pages#home'

  get 'portfolio/larrabee'

   get    'portfolio'   => 'portfolio#larrabee'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
