$("document").ready(function()
{
        // Mansi :- added a loop through the images array using jQuery DOM methods
        var webimage = document.getElementsByClassName("gallery");
        for(i=0;i<= images.length-1; i++) 
        webimage[0].innerHTML += `<img src="./images/square/${images[i].path}" alt="${images[i].title}"/>`;

        // Mansi:- added the handlers for Mouse enter, Mouse leave and Mouse move events of the square images
        $(".gallery img").mouseenter(function(event)
        {
            $(this).addClass('gray');
           
        // Mansi: Added the div element with class Preview
            var src=$(this).attr("src");
            var alt=$(this).attr("alt");
            var snippet;
           
            src = src.replace("square","medium");
        //add div tag with id preview
            snippet ="<div id='preview'>";
            snippet+=`<img src="${src}"/>`;

            for(eachObject of images)
            {
                if(eachObject.title == alt)
                    snippet+=`<p>${alt}<br><i>${eachObject.city},${eachObject.country} [${eachObject.taken}]</i></p>`;
            }
            snippet+=`</div>`;
        //append the snippet to body tag
            $("body").append(snippet);
            $("#preview").css("left",event.pageX+30);
            $("#preview").css("top",event.pageY);
            $("#preview").fadeIn(1000); 
        });
 
        $(".gallery img").mousemove(function(event){  
            $("#preview").css("left",event.pageX+30);
            $("#preview").css("top",event.pageY);
          
        });
        
        $(".gallery img").mouseleave(function(){
            $("#preview").remove();
            $(this).removeClass("gray");
        }); 
});