//wrap all code in onload event.
window.addEventListener("load",function(event)
{
    //get the thumbbox element.
    var thumbBox = document.querySelector("#thumbBox");
    //get the img element of the figure element.
    var largeImage = document.querySelector("figure img");
    //get figCaption element.
    var figCaption = document.querySelector("figure figcaption");
    //get the form element 
    var form = document.querySelector("form");
    
    //add click event listener to thumbnails.
    thumbBox.addEventListener("click",function(e){
        //get the src.
        var imgSrc = e.target.src;
        //replace the small with medium in the src.
        imgSrc = imgSrc.replace("small","medium");
        //assign updated src to the img element.
        largeImage.src=imgSrc;
        //get the title and alt information 
        var artist = e.target.title;
        var caption = e.target.alt;
        //display above information in the figcaption element using innerHTML property.
        figCaption.innerHTML = `<em>${caption}</em><br>${artist}`;
    });
    
    //add event listener to the input element of range sliders using event delegation
    form.addEventListener("input",function(e){
        //alert the id of the inputed range slider, just for confirmation
        alert(e.target.id);
        //change the filter and webkit-filter of the large image.
        
        //add event listener to the reset button , this should remove the filters.
    });


});
