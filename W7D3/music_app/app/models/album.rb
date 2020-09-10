class Album < ApplicationRecord

    belongs_to :band,
    class_name: 'band',
    foreign_key: :band_id,
    primary_key: :id

end
