//store data to db
var db;
var dbmanager = {
    initdb:function(){
        db = window.sqlitePlugin.openDatabase("Database", "1.0", "MANUFACTURE", 200000);
    },
    

    //select all data
    getData:function(returnData){
        db.transaction(function(tx){
            tx.executeSql('SELECT * FROM DATA', [], function(tx, rs){
                returnData(rs);
          }, this.errorExecuteSQL);
        });
    },
    
    searchData:function(returnData){

       //search data only if item group is provided
        db.transaction(function(tx){
            tx.executeSql("SELECT * FROM DATA WHERE item_group LIKE '"+input1+"' ORDER BY item_code;", [], function(tx, rs){
                returnData(rs);
          }, this.errorExecuteSQL);
        });
        

    },
    
     searchCode:function(returnData){


       //search data only if item code is provided
        db.transaction(function(tx){
            tx.executeSql("SELECT * FROM DATA WHERE item_code LIKE '"+input2+"%' ORDER BY item_code;", [], function(tx, rs){
                returnData(rs);
          }, this.errorExecuteSQL);
        });
        

    },
    
    searchAll:function(returnData){

        //search data if group and code are provided
        db.transaction(function(tx){
            tx.executeSql("SELECT * FROM DATA WHERE item_group LIKE '"+input1+"' AND item_code LIKE '"+input2+"%' ORDER BY item_code;", [], function(tx, rs){
                returnData(rs);
          }, this.errorExecuteSQL);
        });
        

    },
    
     getAllGroup:function(returnData){
         
        //for drop down get all item group
        db.transaction(function(tx){
            tx.executeSql("SELECT item_group from DATA WHERE item_group IS NOT NULL GROUP BY item_group ORDER BY item_group;", [], function(tx, rs){
                returnData(rs);
          }, this.errorExecuteSQL);
        });
        

    },
    
    
    successExecuteSQL:function(){
        //success to executeSQL
    },
    
    errorExecuteSQL:function(err){
        //fail executeSQL
        alert("fail"+err.message);
    },
};


//get url 
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};




//page loading 
var loading = {
    
    //add loading page when calll
    startLoading:function(){
        $(".app").prepend("<div class='loadingPage'><div class='loadingFrame'><img class='loadingIcon' src='img/loading_large.gif'></img></div></div>");
    },
    
    //remove loading page when call
    endLoading:function(){
        $(".loadingPage").remove();
    }
};