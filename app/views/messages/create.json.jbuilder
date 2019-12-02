json.content @message.content
json.name @message.user.name
json.user_id @message.user_id
json.date @message.created_at.strftime("%Y/%m/%d %H:%M")
json.image @message.image.url