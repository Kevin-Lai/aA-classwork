require 'sqlite3'
require 'singleton'

class QuestionsDatabase < SQLite3::Database
    include Singleton
    def initialize
        super("./questions.db")
        self.type_translation = true
        self.results_as_hash = true
    end
end

class User
    attr_accessor :id, :fname, :lname
    def self.find_by_id(id)
        db = QuestionsDatabase.instance.execute(<<-SQL,id)
            SELECT *
            FROM users
            WHERE 
            id = ?
            SQL
        db.map{|data| User.new(data)}
    end
    def self.find_by_name(fname,lname)
        db = QuestionsDatabase.instance.execute(<<-SQL,fname,lname)
            SELECT *
            FROM users
            WHERE 
            fname = ? AND lname = ?
            SQL
        db.map{|data| User.new(data)}
    end
    def initialize(data)
        @id = data["id"]
        @fname = data["fname"]
        @lname = data["lname"]   
    end
    def authored_questions
        raise "user not in database" if self.id.nil?
        Question.find_by_user_id(self.id)
    end
    def authored_replies
        raise "user not in database" if self.id.nil?
        Reply.find_by_user_id(self.id)
    end

    def followed_questions
        raise "user not in database" if self.id.nil?
        QuestionsFollow.followed_questions_for_user_id(self.id)
    end

    def liked_questions
        raise "user not in database" if self.id.nil?
        QuestionLike.liked_questions_for_user_id(self.id)
    end

    def average_karma
        db = QuestionsDatabase.instance.execute(<<-SQL, self.id)
            SELECT
                (CAST(COUNT(question_likes.question_id) AS FLOAT) / COUNT(DISTINCT(questions.id))) AS average
            FROM
                questions
            LEFT OUTER JOIN
                question_likes
            ON  questions.id = question_likes.question_id
            WHERE
                questions.user_id = ?
            SQL
        db[0]["average"]
    end
    
    def save
        raise "already in database" unless self.id.nil?
        QuestionsDatabase.instance.execute(<<-SQL, self.fname, self.lname)
            INSERT INTO users(fname,lname)
            VALUES (?,?)
        SQL
        self.id = QuestionsDatabase.instance.last_insert_row_id
    end

    def update
        raise "not in database" if self.id.nil?
        QuestionsDatabase.instance.execute(<<-SQL,self.fname, self.lname,self.id)
            UPDATE users
            SET fname = ?, lname = ?
            WHERE id = ?
        SQL
    end
end

class Question
    attr_accessor :id, :title, :body, :user_id
    def self.find_by_id(id)
        db = QuestionsDatabase.instance.execute(<<-SQL,id)
            SELECT *
            FROM questions
            WHERE 
            id = ?
            SQL
        db.map{|data| Question.new(data)}
    end
    def self.find_by_title(title)
        db = QuestionsDatabase.instance.execute(<<-SQL,title)
            SELECT *
            FROM questions
            WHERE 
            title = ?
            SQL
        db.map{|data| Question.new(data)}
    end
    def self.find_by_user_id(user_id)
        db = QuestionsDatabase.instance.execute(<<-SQL,user_id)
            SELECT *
            FROM questions
            WHERE 
            user_id = ?
            SQL
        db.map{|data| Question.new(data)}
    end
    def self.most_followed(n)
        QuestionsFollow.most_followed_questions(n)
    end

    def self.most_liked(n)
        QuestionLike.most_liked_questions(n)
    end

    def initialize(data)
        @id = data["id"]
        @title = data["title"]
        @body = data["body"]
        @user_id  = data["user_id"]
    end
    def author
        User.find_by_id(user_id)
    end

    def replies
        raise "question not in database" if self.id.nil?
        Reply.find_by_question_id(self.id)
    end

    def followers
        raise "question not in database" if self.id.nil?
        QuestionsFollow.followers_for_question_id(self.id)
    end

    def likers 
        raise "question not in database" if self.id.nil?
        QuestionLike.likers_for_question_id(self.id)
    end

    def num_likes 
        raise "question not in database" if self.id.nil?
        QuestionLike.num_likes_for_question_id(self.id)
    end

    def save
        raise "already in database" unless self.id.nil?
        QuestionsDatabase.instance.execute(<<-SQL, self.title, self.body, self.user_id)
            INSERT INTO questions(title,body,user_id)
            VALUES (?,?,?)
        SQL
        self.id = QuestionsDatabase.instance.last_insert_row_id
    end

    def update
        raise "not in database" if self.id.nil?
        QuestionsDatabase.instance.execute(<<-SQL,self.title, self.body, self.user_id, self.id)
            UPDATE questions
            SET title = ?, body = ?, user_id = ?
            WHERE id = ?
        SQL
    end

end


class Reply
    attr_accessor :id, :question_id, :body, :user_id, :reply_id
    def self.find_by_id(id)
        db = QuestionsDatabase.instance.execute(<<-SQL,id)
            SELECT *
            FROM replies
            WHERE 
            id = ?
            SQL
        db.map{|data| Reply.new(data)}
    end
    def self.find_by_user_id(user_id)
        db = QuestionsDatabase.instance.execute(<<-SQL,user_id)
            SELECT *
            FROM replies
            WHERE 
            user_id = ?
            SQL
        db.map{|data| Reply.new(data)}
    end
    def self.find_by_question_id(question_id)
        db = QuestionsDatabase.instance.execute(<<-SQL,question_id)
            SELECT *
            FROM replies
            WHERE 
            question_id = ?
            SQL
        db.map{|data| Reply.new(data)}
    end
    def initialize(data)
        @id = data["id"]
        @question_id = data["question_id"]
        @body = data["body"]
        @user_id  = data["user_id"]
        @reply_id = data['reply_id']
    end
    def author
        User.find_by_id(user_id)
    end
    def question
        Question.find_by_id(question_id)
    end
    def parent_reply
        raise "this is 1st comment" if reply_id.nil?
        Reply.find_by_id(reply_id)
    end
    def child_replies
        db = QuestionsDatabase.instance.execute(<<-SQL,id)
            SELECT *
            FROM replies
            WHERE reply_id = ?
        SQL
        db.map{|data| Reply.new(data)}
    end
    
    def save
        raise "already in database" unless self.id.nil?
        QuestionsDatabase.instance.execute(<<-SQL, self.question_id, self.user_id, self.body, self.reply_id)
            INSERT INTO replies(question_id,user_id,body,reply_id)
            VALUES (?,?,?,?)
        SQL
        self.id = QuestionsDatabase.instance.last_insert_row_id
    end

    def update
        raise "not in database" if self.id.nil?
        QuestionsDatabase.instance.execute(<<-SQL,self.question_id, self.user_id, self.body, self.reply_id, self.id)
            UPDATE replies
            SET question_id = ?, user_id = ?, body = ?, reply_id = ?
            WHERE id = ?
        SQL
    end

end


class QuestionsFollow
    attr_accessor :id, :question_id, :user_id
    def self.find_by_id(id)
        db = QuestionsDatabase.instance.execute(<<-SQL,id)
            SELECT *
            FROM questions_follows
            WHERE 
            id = ?
            SQL
        db.map{|data| QuestionsFollow.new(data)}
    end
    def self.find_by_user_id(user_id)
        db = QuestionsDatabase.instance.execute(<<-SQL,user_id)
            SELECT *
            FROM questions_follows
            WHERE 
            user_id = ?
            SQL
        db.map{|data| QuestionsFollow.new(data)}
    end
    def self.find_by_question_id(question_id)
        db = QuestionsDatabase.instance.execute(<<-SQL,question_id)
            SELECT *
            FROM questions_follows
            WHERE 
            question_id = ?
            SQL
        db.map{|data| QuestionsFollow.new(data)}
    end

    def self.followers_for_question_id(question_id)
        db = QuestionsDatabase.instance.execute(<<-SQL,question_id)
            SELECT users.id, users.fname, users.lname
            FROM users
            JOIN
                questions_follows
            ON
                questions_follows.user_id = users.id
            WHERE 
            question_id = ?
            SQL
        db.map{|data| User.new(data)}
    end

    def self.followed_questions_for_user_id(user_id)
        db = QuestionsDatabase.instance.execute(<<-SQL,user_id)
            SELECT *
            FROM questions
            JOIN
                questions_follows
            ON
                questions_follows.question_id = questions.id
            WHERE 
            questions_follows.user_id = ?
            SQL
        db.map{|data| Question.new(data)}
    end

    def self.most_followed_questions(n)
        db = QuestionsDatabase.instance.execute(<<-SQL,n)
            SELECT *
            FROM questions
            JOIN
                questions_follows
            ON
                questions_follows.question_id = questions.id
            GROUP BY
                questions_follows.question_id
            HAVING
                COUNT(questions_follows.question_id)
            ORDER BY
                COUNT(questions_follows.question_id) DESC
            LIMIT
                ?
            SQL
        db.map{|data| Question.new(data)}
    end

    def initialize(data)
        @id = data["id"]
        @question_id = data["question_id"]
        @user_id  = data["user_id"]
    end
end


class QuestionLike
    attr_accessor :id, :question_id, :user_id
    def self.find_by_id(id)
        db = QuestionsDatabase.instance.execute(<<-SQL,id)
            SELECT *
            FROM question_likes
            WHERE 
            id = ?
            SQL
        db.map{|data| QuestionLike.new(data)}
    end
    def self.find_by_user_id(user_id)
        db = QuestionsDatabase.instance.execute(<<-SQL,user_id)
            SELECT *
            FROM question_likes
            WHERE 
            user_id = ?
            SQL
        db.map{|data| QuestionLike.new(data)}
    end
    def self.find_by_question_id(question_id)
        db = QuestionsDatabase.instance.execute(<<-SQL,question_id)
            SELECT *
            FROM question_likes
            WHERE 
            question_id = ?
            SQL
        db.map{|data| QuestionLike.new(data)}
    end
    def self.likers_for_question_id(question_id)
        db = QuestionsDatabase.instance.execute(<<-SQL,question_id)
        SELECT *
        FROM users
        JOIN question_likes
        ON users.id = question_likes.user_id
        WHERE 
        question_id = ?
        SQL
        db.map{|data| User.new(data)}
    end

    def self.num_likes_for_question_id(question_id)
        db = QuestionsDatabase.instance.execute(<<-SQL,question_id)
        SELECT COUNT(question_id)
        FROM question_likes
        WHERE 
        question_id = ?
        SQL
        db[0]["COUNT(question_id)"]
    end

    def self.liked_questions_for_user_id(user_id)
        db = QuestionsDatabase.instance.execute(<<-SQL,user_id)
        SELECT *
        FROM questions
        JOIN question_likes
        ON questions.id = question_likes.question_id
        WHERE 
        question_likes.user_id = ?
        SQL
        db.map{|data| Question.new(data)}
    end

    def self.most_liked_questions(n)
        db = QuestionsDatabase.instance.execute(<<-SQL,n)
            SELECT *
            FROM questions
            JOIN
                question_likes
            ON
                question_likes.question_id = questions.id
            GROUP BY
                question_likes.question_id
            HAVING
                COUNT(question_likes.question_id)
            ORDER BY
                COUNT(question_likes.question_id) DESC
            LIMIT
                ?
            SQL
        db.map{|data| Question.new(data)}
    end

    def initialize(data)
        @id = data["id"]
        @question_id = data["question_id"]
        @user_id  = data["user_id"]
    end
end

