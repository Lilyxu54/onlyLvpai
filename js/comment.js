      var content = document.getElementById("content");
      var lis = content.querySelectorAll("li");
      var box = document.getElementById("box");
      var small = document.getElementById("small");

      for (var i = 0; i < lis.length; i++) {
        (function(index) {
          lis[index].onclick = function(e) {
            // console.log(this);
            box.style.display = "block";
            small.style.display = "block";
          };
        })(i);
      }

      small.onclick = function() {
        this.parentNode.style.display = "none";
      };

    //当用户名获取焦点时
    function focus_username(){
      document.getElementById("user_res").innerHTML="<font color='#f00'>请输入用户名</font>";
  }
  //当用户名失去焦点时
  function blur_username(){
      var user_value=document.getElementsByName("username")[0].value;
      if(user_value.length===0){
      document.getElementById("user_res").innerHTML="<font color='#f00'>你没有输入用户名</font>";
              return false;
              //判断其长度是否在5~18之间  如果不在就提示用户
      }else if(user_value.length<5||user_value.length>18)
      {
      document.getElementById("user_res").innerHTML="<font color='#f00'>用户名长度必须在5-18之间</font>";
              
              return false;
      }else if(!checkUser(user_value)){
          //用户名还有特殊符号
      document.getElementById("user_res").innerHTML="<font color='#f00'>用户名含有特殊符号</font>";
              return false;
      }else{
          //用户名合法
      document.getElementById("user_res").innerHTML="<font color='#00f'>用户名合法</font>";
              return true;
      }

  }

  //密码获取焦点时
  function focus_password(){
      document.getElementById("pass_res").innerHTML="<font color='#f00'>请输入密码</font>";
  }
  //密码失去焦点时
  function blur_password(){
    var user_value=document.getElementsByName("password")[0].value;
      if(user_value.length===0){
      document.getElementById("pass_res").innerHTML="<font color='#f00'>你没有输入密码</font>";
              return false;
              //判断其长度是否在5~18之间  如果不在就提示用户
      }else if(user_value.length<5||user_value.length>18)
      {
      document.getElementById("pass_res").innerHTML="<font color='#f00'>用密码长度必须在5-18之间</font>";
              
              return false;
      }else{
          //密码合法
      document.getElementById("pass_res").innerHTML="<font color='#00f'>密码合法</font>";
              return true;
      }
  }

   function checkUser(user){
      var arr=["<",">","#","?","%"];
      var arr_length=arr.length;
      var user_length=user.length;

      for(var i=0;i<arr_length;i++){
          for(var j=0;j<user_length;j++){
              if(arr[i]===user.charAt(j)){
                  return false;
              }
          }
      
      }
      //表示用户名合法
       return true;
   }

   //提交提交表单验证
    function checkForm(){
      var user_flag=blur_username();
      var pass_flag=blur_password();
      if(user_flag && pass_flag){
          alert("提交合法表单");
           return true;
      }else{
      
          alert("输入不合法");
          return false;
      }
    
    }
