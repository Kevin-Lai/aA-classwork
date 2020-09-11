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
require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  let(:incomplete_user) { User.new(username:'', password:'password') }

  subject(:porkchop) { User.create(username:'porkchop', password:'password') }
  # class UsersController     
  #   def create

  #   end
  # end

  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }
  it { should validate_uniqueness_of(:username) }

  describe "session_token" do
    it "assigns a session_token if none given" do
      expect(FactoryBot.build(:user).session_token).not_to be_nil
    end
  end

  describe "password encryption" do
    it "does not save passwords to the database" do
      FactoryBot.create(:user, username: "Harry Potter", password: "password")
      user = User.find_by(username: "Harry Potter")
      expect(user.password).not_to eq("password")
    end

    it "encrypts password using BCrypt" do
      expect(BCrypt::Password).to receive(:create).with("abcdef")
      FactoryBot.build(:user, password:"abcdef")
    end
  end

  describe "user associations" do
    it { should have_many(:goals) }
  end

end
