//wrap all code in document.ready event.
$("document").ready(function()
{     
    //add click event listener to thumbbox
    $("#thumbBox").click(function(e){
        var imgSrc = e.target.src;
        //replace the small with medium in the src.
        imgSrc = imgSrc.replace("small","medium");
        //assign updated src to the img element using attr function.
        $("figure img").attr("src",imgSrc);
        //get the title and alt information 
        var artist = e.target.title;
        var caption = e.target.alt;
        //display above information in the figcaption element using html function of jquery.
        $("figure figcaption").html(`<em>${caption}</em><br>${artist}`);
    });
    
    $(":input").change(function(e)
    {
    //reset the filterName 
    filterName = "";
    
    //store the filter in a string as filterName,replace slider with empty string from the id string
    var filterName = e.target.id.replace("slider","").toLowerCase();
    
    //store the value of the clicked filter
    var filterValue = e.target.value;
    
    
    switch(filterName)
    {
        case "blur": 
            filterValue +="px"; 
            break;
        case "gray":
            filterName+="scale";   
            break;
        case "hue":
            filterName +="-rotate";
            filterValue +="deg";
            break;
        case "saturation":
            filterName = "saturate";
            filterValue +="%";
            break; 
        default:
            filterValue +="%";
            break;     
    }
    //prepare the filtervalue string for the css
    var valueString = `${filterName}(${filterValue})`;
    
    //change the filter css property of the large image
    $("figure img").css("filter",valueString);

    //change the span element value.
    e.target.nextElementSibling.innerHTML = filterValue;
    });

    $("button").click(function(){
        $("input").reset();
    });
});
