/**
 * Image SlideShow
 * 
 * Author: Mohamed Yousef
 * Email: modi401@hotmail.com
 * License: free and open source.
 * 
 * www.agashe.pe.hu
 */

$(document).ready(function(){
    let i = 1, max = 4;

    function slideshow(){
        let image, dot;
        
        image = "#i" + i;
        dot = "#d" + i;

        $(".slideshow img").hide();
        $(".dots ul li").css("color", "grey");
            
        $(image).fadeIn();
        $(dot).css("color", "red");
        
        if (i == max)
            i = 1;
        else 
            i++;

        setTimeout(slideshow, 3000);
    }

    slideshow();
});