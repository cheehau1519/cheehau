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

function homeOnClick(){
    window.location="home.html";
}

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

function btnSearch(){
  
    input2=$('.inputcode').val();
    input1=$('.dropdown').val();
    

    // both input empty
    if(input1 == "" && input2 == ""){
        //alert("Please enter a search value.")
        
        navigator.notification.alert(
            'Please enter a search value / 请输入搜寻内容',  // message
            alertDismissed,         // callback
            'Alert',            // title
            'OK'                  // buttonName
        );
    }
    // both input have value
    else if(input1!="" && input2!=""){
        loading.startLoading();
        
          $(".app").append("<div class='PwdBg2'><div class='PwdContent'><div class='PwdHeader'><button class='PwdTitle'>Search Result / 搜寻结果</button><button class='PwdCloseBtn' onclick='closePwd2();'><img src='img/close.png'/></button></div><div class='PwdDetails'><div class='ccontent'><br><div class='content'><div class='pageone'><div class='wrapper'><div class='scroll-content' id='scroll-content'><ul class='scrollul' id='scroll-content'></ul></div></div></div></div></div></div></div>");
        
    dbmanager.initdb();
    dbmanager.searchAll(function(returnData){

   for (y=0;y<returnData.rows.length;y++){      
    var item_group='"'+returnData.rows.item(y).item_group+'"';
    var item_code='"'+returnData.rows.item(y).item_code+'"';
    var type='"'+returnData.rows.item(y).type+'"';
    var desc='"'+returnData.rows.item(y).desc+'"';
    var desc2='"'+returnData.rows.item(y).desc2+'"';
    var UOM='"'+returnData.rows.item(y).UOM+'"';
    var price1='"'+returnData.rows.item(y).PRICE1+'"';
    var price2='"'+returnData.rows.item(y).PRICE2+'"';
    var price_min='"'+returnData.rows.item(y).PRICE_MIN+'"';
    var balanceqty='"'+returnData.rows.item(y).BALANCEQTY+'"';
    var last_price='"'+returnData.rows.item(y).last_price+'"';
    
        
     $(".ccontent ul").append("<li onclick='contentOnClick("+item_group+","+item_code+","+type+","+desc+","+desc2+","+UOM+","+price1+","+price2+","+price_min+","+balanceqty+","+last_price+");'><div class='contentdiv'><div class='contentt1'><button class='buttondata'><span>ITEM GROUP / 物品组</span></button></div><div class='contentt2'><button class='buttondata'><span>"+returnData.rows.item(y).item_group+"</span></button></div><div class='contentt3'><button class='buttondata'><span>ITEM CODE / 物品代码</span></button></div><div class='contentt4'><button class='buttondata'><span>"+returnData.rows.item(y).item_code+"</span></button></div><div class='contentt5'><button class='buttondata'><span>DESCRIPTION / 描述</span></button></div><div class='contentt6'><button class='buttondata'><span>"+returnData.rows.item(y).desc+"</span></button></div></div></div></li>");  
   
    }
    })
    loading.endLoading();
    }
    // input 2 empty
    else if(input2=="" && input1.length>0){
        loading.startLoading();
    $(".app").append("<div class='PwdBg2'><div class='PwdContent'><div class='PwdHeader'><button class='PwdTitle'>Search Result / 搜寻结果</button><button class='PwdCloseBtn' onclick='closePwd2();'><img src='img/close.png'/></button></div><div class='PwdDetails'><div class='ccontent'><br><div class='content'><div class='pageone'><div class='wrapper'><div class='scroll-content' id='scroll-content'><ul class='scrollul' id='scroll-content'></ul></div></div></div></div></div></div></div>");
        
    dbmanager.initdb();
    dbmanager.searchData(function(returnData){

   for (y=0;y<returnData.rows.length;y++){      
    var item_group='"'+returnData.rows.item(y).item_group+'"';
    var item_code='"'+returnData.rows.item(y).item_code+'"';
    var type='"'+returnData.rows.item(y).type+'"';
    var desc='"'+returnData.rows.item(y).desc+'"';
    var desc2='"'+returnData.rows.item(y).desc2+'"';
    var UOM='"'+returnData.rows.item(y).UOM+'"';
    var price1='"'+returnData.rows.item(y).PRICE1+'"';
    var price2='"'+returnData.rows.item(y).PRICE2+'"';
    var price_min='"'+returnData.rows.item(y).PRICE_MIN+'"';
    var balanceqty='"'+returnData.rows.item(y).BALANCEQTY+'"';
    var last_price='"'+returnData.rows.item(y).last_price+'"';
    
        
     $(".ccontent ul").append("<li onclick='contentOnClick("+item_group+","+item_code+","+type+","+desc+","+desc2+","+UOM+","+price1+","+price2+","+price_min+","+balanceqty+","+last_price+");'><div class='contentdiv'><div class='contentt1'><button class='buttondata'><span>ITEM GROUP / 物品组</span></button></div><div class='contentt2'><button class='buttondata'><span>"+returnData.rows.item(y).item_group+"</span></button></div><div class='contentt3'><button class='buttondata'><span>ITEM CODE / 物品代码</span></button></div><div class='contentt4'><button class='buttondata'><span>"+returnData.rows.item(y).item_code+"</span></button></div><div class='contentt5'><button class='buttondata'><span>DESCRIPTION / 描述</span></button></div><div class='contentt6'><button class='buttondata'><span>"+returnData.rows.item(y).desc+"</span></button></div></div></div></li>");  
   
    }
    })
    loading.endLoading();
    }
    //input 1 empty
    else if(input1=="" && input2.length>0){
        
        loading.startLoading();
        
        $(".app").append("<div class='PwdBg2'><div class='PwdContent'><div class='PwdHeader'><button class='PwdTitle'>Search Result / 搜寻结果</button><button class='PwdCloseBtn' onclick='closePwd2();'><img src='img/close.png'/></button></div><div class='PwdDetails'><div class='ccontent'><br><div class='content'><div class='pageone'><div class='wrapper'><div class='scroll-content' id='scroll-content'><ul class='scrollul' id='scroll-content'></ul></div></div></div></div></div></div></div>");
        
        
    dbmanager.initdb();
    dbmanager.searchCode(function(returnData){

  for (y=0;y<returnData.rows.length;y++){      
    var item_group='"'+returnData.rows.item(y).item_group+'"';
    var item_code='"'+returnData.rows.item(y).item_code+'"';
    var type='"'+returnData.rows.item(y).type+'"';
    var desc='"'+returnData.rows.item(y).desc+'"';
    var desc2='"'+returnData.rows.item(y).desc2+'"';
    var UOM='"'+returnData.rows.item(y).UOM+'"';
    var price1='"'+returnData.rows.item(y).PRICE1+'"';
    var price2='"'+returnData.rows.item(y).PRICE2+'"';
    var price_min='"'+returnData.rows.item(y).PRICE_MIN+'"';
    var balanceqty='"'+returnData.rows.item(y).BALANCEQTY+'"';
    var last_price='"'+returnData.rows.item(y).last_price+'"';
    
        
     $(".ccontent ul").append("<li onclick='contentOnClick("+item_group+","+item_code+","+type+","+desc+","+desc2+","+UOM+","+price1+","+price2+","+price_min+","+balanceqty+","+last_price+");'><div class='contentdiv'><div class='contentt1'><button class='buttondata'><span>ITEM GROUP / 物品组</span></button></div><div class='contentt2'><button class='buttondata'><span>"+returnData.rows.item(y).item_group+"</span></button></div><div class='contentt3'><button class='buttondata'><span>ITEM CODE / 物品代码</span></button></div><div class='contentt4'><button class='buttondata'><span>"+returnData.rows.item(y).item_code+"</span></button></div><div class='contentt5'><button class='buttondata'><span>DESCRIPTION / 描述</span></button></div><div class='contentt6'><button class='buttondata'><span>"+returnData.rows.item(y).desc+"</span></button></div></div></div></li>");  
            
   
    }
    })
        loading.endLoading();
}}

function alertDismissed() {
            // do something
    }

function contentOnClick(item_group, item_code, type, desc, desc2, UOM, price1, price2, price_min, balanceqty,last_price){

    window.location="detail.html?item_group="+item_group+"&item_code="+item_code+"&type="+type+"&desc="+desc+"&desc2="+desc2+"&uom="+UOM+"&price1="+price1+"&price2="+price2+"&price_min="+price_min+"&balanceqty="+balanceqty+"&last_price="+last_price;
    
}
