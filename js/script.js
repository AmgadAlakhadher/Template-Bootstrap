// varbales

//Events


//functions


//function save id Post

function saveIdPost(id){
    localStorage.setItem('idPost',id);
    setTimeout(() => {
        window.location = "blog-details.html";
    },2000);
}

//btn come back up
$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() <= 200){
            $('.btnToUp').hide();
        }else{
            $('.btnToUp').show();
        }
    })

    $('#index-btnToUp').click(function(){
        $('html,body').animate({
            scrollTo: 0
        },1000);
    });
});