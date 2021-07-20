$(document).ready(function(){
    $('#submit').on('click',function(){
        
        var todoData = { iteam: $('#add').val()}

        $.ajax({
            type : "POST",
            url : '/todo',
            data : todoData,
            success : function(data){
                // console.log("data sucess" + data);
                // $('ul').append()
                location.reload();
            }
        })

        return false;
    })
});
