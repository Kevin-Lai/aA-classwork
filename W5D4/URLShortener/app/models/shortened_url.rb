class ShortenedUrl < ApplicationRecord
    validates :long_url, presence: true
    validates :short_url, presence: true
    validates :user_id, presence: true, uniqueness: true

    def random_code
        SecureRandom.urlsafe_base64
    end

end
