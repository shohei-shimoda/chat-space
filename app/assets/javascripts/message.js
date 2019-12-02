$(function(){
  function buildHTML(message){
    // 「もしメッセージに画像が含まれていたら」という条件式
    if (message.image) {
      var html =  `<div class="message">
                    <div class="mainmessages__namedata">
                    <div class="mainmessages__name">
                      ${message.name}
                    </div>
                    <div class="mainmessages__data">
                      ${message.date}
                    </div>   
                    </div>  
                    <div class="mainmessages__message">
                    <p class="lower-message__content">
                    ${message.content}
                    </p>
                    <img class="lower-message__image" src=${message.image}>
                    </div>
                  </div>`
                  
    } else {
      var html =  `<div class="message">
                    <div class="mainmessages__namedata">
                    <div class="mainmessages__name">
                      ${message.name}
                    </div>
                    <div class="mainmessages__data">
                      ${message.date}
                    </div>   
                    </div>  
                    <div class="mainmessages__message">
                    <p class="lower-message__content">
                    ${message.content}
                    </p>
                    </div>
                  </div>`
    }
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
       $('.mainmessages').animate({ scrollTop: $('.mainmessages')[0].scrollHeight});
       $('#new_message')[0].reset();
       $('.mainform__btn').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  })
})