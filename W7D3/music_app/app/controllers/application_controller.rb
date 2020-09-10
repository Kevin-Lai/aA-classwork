class ApplicationController < ActionController::Base
    #current_user to return the current user.
    #logged_in? to return a boolean indicating whether someone is signed in.
    #log_in_user!(user) reset the users session token and cookie
    
    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def log_in_user!(user)
        # session hash is a built-in rails method
        session[:session_token] = user.reset_session_token!
    end


    
end
