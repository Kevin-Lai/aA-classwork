class UsersController < ApplicationController
    before_action :if_logged_in, only: [:new, :create]
    
    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            #redirect to show page
            redirect_to cats_url
        else
            render :new
        end
    end

    private

    def user_params
        # only permit user_name and password
        # because we don't want to give access to the user to
        # the password_digest and session
        params.require(:user).permit(:user_name, :password)
    end
end
