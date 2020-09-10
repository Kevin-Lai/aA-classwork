class UsersController < ApplicationController

    # user routes: create, new, show

    def new
        @user = User.new
        render :new
    end

    
    def show
        render :show
    end

    def create
        @user = User.new(user_params)
        if @user.save
            # redirect to show
            redirect_to user_url

        else
            render :new
        end
    end

    def user_params
        params.require(:user).permit(:email)
    end
end
# before_action :require_logged_in, only: [:index,:show,:edit,:update,:delete]

# def new 
#     @user = User.new
#     render :new
# end

# def edit 
#     @user = User.find(params[:id])
#     render :edit
# end

# def index
#     @users = User.all # get all users from DB and store in users variable
#     render :index
# end

# def show
#     # just one user
#     @user = User.find(params[:id])
#     # render json: user
#     render :show
#     # not necessary - implicit render of the same action name
# end

# def create
#     @user = User.new(user_params)
#     if @user.save
#       login!(@user)
#       redirect_to cats_url
#     else
#       flash.now[:errors] = @user.errors.full_messages
#       render :new
#     end
# end

# def update
#     @user = User.find(params[:id])
#     if @user.update(user_params)
        
#         redirect_to users_url(@user)
#     else
#         render json: @user.errors.full_messages, status: 422
#     end
# end

# def destroy
    
#     @user = User.find(params[:id])
#     @user.destroy
#     redirect_to users_url
# end

# private

# def user_params
#     params.require(:user).permit(:user_name,:password_digest)
# end