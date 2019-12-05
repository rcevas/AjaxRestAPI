$("#chistesBtn").click(function(){
    $.ajax({
        type: 'GET',
        url: 'http://api.icndb.com/jokes/random',
        success: function(key){        
            $("#chistes").html(key.value.joke);
            console.log(key.value.joke);
        }
    });
});



