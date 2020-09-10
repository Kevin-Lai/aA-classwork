class SessionsController < ApplicationController
    # resource :session, only: [:new, :create, :destroy]
    def new
        render :new
    end

    def create
        # SessionsController#create should re-set the appropriate user's session_token and session[:session_token].
        # For now just redirect them to a UsersController#show page which simply displays that user's email.
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        @user.reset_session_token!
        redirect_to user_url
    end

    def destroy
      
    end
    


end
