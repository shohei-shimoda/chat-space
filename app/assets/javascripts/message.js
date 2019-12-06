$(function(){

  function buildHTML(message){
 
    image = (message.image) ? `<img class="lower-message__image" src=${message.image}>` : "";

      var html =  `<div class="messages" data-message-id = "${message.id}">
                   <div class="mainmessages__namedata">
                    <div class="mainmessages__name">
                      ${message.user_name}
                    </div>
                    <div class="mainmessages__data">
                      ${message.date}
                    </div>   
                    </div>  
                    <div class="mainmessages__message">
                    <p class="lower-message__content">
                    ${message.content}
                    </p>
                    ${image}
                    </div>
                  </div>`
                  
    return html
  }
  
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
       var html = buildHTML(message);
       $(".mainmessages").append(html);
       console.log(html)
       $('.mainmessages').animate({ scrollTop: $('.mainmessages')[0].scrollHeight});
       $('#new_message')[0].reset();
       $('.mainform__btn').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $('.mainform__btn').prop('disabled', false);
    })
  })

    var reloadMessages = function () {
      var last_message_id = $('.messages:last').data("message-id");
      var href = 'api/messages'
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      $.ajax({
        url: href,
        type: 'get',
        data: {id: last_message_id},
        dataType: 'json'
      })
      .done(function(messages) {
        var insertHTML = '';
        messages.forEach(function(message){
          insertHTML = buildHTML(message)
          $('.messages').append(insertHTML);
        })
        $('.mainmessages').animate({scrollTop: $('.mainmessages')[0].scrollHeight}, 'fast');
      })
      .fail(function() {
        alert('メッセージ送信に失敗しました');
      });
    };
  }
    setInterval(reloadMessages, 7000);
})
