# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    validates :username, :session_token, presence:true, uniqueness:true
    validates :password_digest, presence:true
    validates :password, length: { minimum: 6 }

    attr_reader :password
    after_initialize :ensure_session_token
    # before_validation :ensure_session_token # does the same thing as above for our purposes

    # S:                self.find_by_credentials
    # P:                password=
    # I:                is_password?
    # R:                reset_session_token!
    # E:                ensure_session_token

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
    
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    has_many :goals,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Goal

end
