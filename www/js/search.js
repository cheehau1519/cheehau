/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        
        app.receivedEvent('deviceready');
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


var input1;
var input2;
function searchOnClick(){

        
    $(".app").append("<div class='PwdBg'><div class='PwdContent'><div class='PwdHeader'><button class='PwdTitle'>Search / 搜寻</button><button class='PwdCloseBtn' onclick='closePwd();'><img src='img/close.png'/></button></div><div class='PwdDetails'><select class='dropdown'><option value=''></option></select></input><input class='inputcode' placeholder='ITEM CODE / 物品代码'></input><button class=btnSearch onclick='btnSearch();'>Search / 搜寻</button></div></div>");
    
     dbmanager.initdb();
    dbmanager.getAllGroup(function(returnData){

  for (y=0;y<returnData.rows.length;y++){  
    var name=returnData.rows.item(y).item_group;
   $(".dropdown").append($("<option></option>").attr("value",name).text(name));

  
   
    }
    })
    
  

        
}
function closePwd(){
    $(".PwdBg").remove();
}

function closePwd2(){
    $(".PwdBg2").remove();
}

function btnSearch(){
  
    input2=$('ItemCode').val();
    input1=$('ItemGroup').val();

    // both input empty
    if(input1 == "" && input2 == ""){
        navigator.notification.alert(
            'Please enter a search value / 请输入搜寻内容',  // message
            alertDismissed,         // callback
            'Alert',            // title
            'OK'                  // buttonName
        );
        
    }

    // both input have value
    else if(input1!="" && input2!=""){
        window.localStorage.setItem('ItemGroup',input1);
        window.localStorage.setItem('ItemCode',input2);
        window.localStorage.setItem('strOption',2);
        
        window.location="list.html";
    }
    

    // input 2 empty
    else if(input2=="" && input1.length>0){
        window.localStorage.setItem('ItemGroup',input1);
        window.localStorage.setItem('strOption',1);
        
        window.location="list.html";
    
    }
    //input 1 empty
    else if(input1=="" && input2.length>0){
        window.localStorage.setItem('ItemCode',input2);
        window.localStorage.setItem('strOption',0);
        
        window.location="list.html";
        
    }
}

function alertDismissed() {
            // do something
    }

function escapeHtml(text) {
  return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/#/g, "%23")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}