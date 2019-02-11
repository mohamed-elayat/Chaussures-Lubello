$(document).ready(function()  {
    $('.fadetoggle').fadeToggle(500);
    });
$(document).ready(function(){
    $('#galerie a').click(function(){
        var galleryHref = $(this).attr('href');
        var galleryAlt = $(this).attr('title');
        $('figure img').attr({ src: galleryHref, alt: galleryAlt });
        $('figcaption').html(galleryAlt);
        return false;
        });
    });