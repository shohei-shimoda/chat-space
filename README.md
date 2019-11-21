# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|mail|string|index: true, null: false, unique: true|
|name|string|null: false, unipue: true|
### Association
 has_many :groups, through: :group_users
 has_many :group_users
 has_many :massages

## massageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string| |
|group_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|
### Association
 belongs_to :group
 belongs_to :user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false, unipue: true|
### Association
 has_many :users, through: :group_users
 has_many :group_users
 has_many :messages

## group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group|integer|index: true, foreign_key: true, null: false|
|user|integer|index: true, foreign_key: true, null: false|
### Association
- belongs_to :group
- belongs_to :user