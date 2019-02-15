const sifr = (function() {
    var INDEX = 0; 
    sifr("#chat-submit").click(function(e) {
      e.preventDefault();
      var msg = sifr("#chat-input").val(); 
      if(msg.trim() === ''){
        return false;
      }
      generate_message(msg, 'self');
      var buttons = [
          {
            name: 'Existing User',
            value: 'existing'
          },
          {
            name: 'New User',
            value: 'new'
          }
        ];
      setTimeout(function() {      
        generate_message(msg, 'user');  
      }, 1000)
      
    })
    
    function generate_message(msg, type) {
      INDEX++;
      var str="";
      str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
      str += "          <span class=\"msg-avatar\">";
      str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
      str += "          <\/span>";
      str += "          <div class=\"cm-msg-text\">";
      str += msg;
      str += "          <\/div>";
      str += "        <\/div>";
      sifr(".chat-logs").append(str);
      sifr("#cm-msg-"+INDEX).hide().fadeIn(300);
      if(type == 'self'){
       sifr("#chat-input").val(''); 
      }    
      sifr(".chat-logs").stop().animate({ scrollTop: sifr(".chat-logs")[0].scrollHeight}, 1000);    
    }  
    
    function generate_button_message(msg, buttons){    
      /* Buttons should be object array 
        [
          {
            name: 'Existing User',
            value: 'existing'
          },
          {
            name: 'New User',
            value: 'new'
          }
        ]
      */
      INDEX++;
      var btn_obj = buttons.map(function(button) {
         return  "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\""+button.value+"\">"+button.name+"<\/a><\/li>";
      }).join('');
      var str="";
      str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
      str += "          <span class=\"msg-avatar\">";
      str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
      str += "          <\/span>";
      str += "          <div class=\"cm-msg-text\">";
      str += msg;
      str += "          <\/div>";
      str += "          <div class=\"cm-msg-button\">";
      str += "            <ul>";   
      str += btn_obj;
      str += "            <\/ul>";
      str += "          <\/div>";
      str += "        <\/div>";
      sifr(".chat-logs").append(str);
      sifr("#cm-msg-"+INDEX).hide().fadeIn(300);   
      sifr(".chat-logs").stop().animate({ scrollTop: sifr(".chat-logs")[0].scrollHeight}, 1000);
      sifr("#chat-input").attr("disabled", true);
    }
    
    sifr(document).delegate(".chat-btn", "click", function() {
      var value = sifr(this).attr("chat-value");
      var name = sifr(this).html();
      sifr("#chat-input").attr("disabled", false);
      generate_message(name, 'self');
    })
    
    sifr("#chat-circle").click(function() {    
      sifr("#chat-circle").toggle('scale');
      sifr(".chat-box").toggle('scale');
    })
    
    sifr(".chat-box-toggle").click(function() {
      sifr("#chat-circle").toggle('scale');
      sifr(".chat-box").toggle('scale');
    })
    
  })