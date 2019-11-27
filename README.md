# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Association
- has_many :tweets
- has_many :comments

## massageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text| |
|image|string| |
|group_id|reference|null: false, foreign_key: true|
|user_id|reference|null: false, foreign_key: true|
### Association
 belongs_to :group
 belongs_to :user

## group_userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false, unipue: true|
### Association
has_many :users, through: :group_users 
has_many :group_users 
has_many :messages

<!-- # README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... --> 
