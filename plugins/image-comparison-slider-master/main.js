// jQuery(document).ready(function($){
//     var dragging = false,
//         scrolling = false,
//         resizing = false;
//     //cache jQuery objects
//     var imageComparisonContainers = $('.cd-image-container');
//     //check if the .cd-image-container is in the viewport 
//     //if yes, animate it
//     checkPosition(imageComparisonContainers);
//     $(window).on('scroll', function(){
//         if( !scrolling) {
//             scrolling =  true;
//             ( !window.requestAnimationFrame )
//                 ? setTimeout(function(){checkPosition(imageComparisonContainers);}, 100)
//                 : requestAnimationFrame(function(){checkPosition(imageComparisonContainers);});
//         }
//     });
    
//     //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
//     imageComparisonContainers.each(function(){
//         var actual = $(this);
//         drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
//     });

//     //upadate images label visibility
//     $(window).on('resize ', function(){
//         if( !resizing) {
//             resizing =  true;
//             ( !window.requestAnimationFrame )
//                 ? setTimeout(function(){checkLabel(imageComparisonContainers);}, 100)
//                 : requestAnimationFrame(function(){checkLabel(imageComparisonContainers);});
//         }
//     });

//     function checkPosition(container) {
//         container.each(function(){
//             var actualContainer = $(this);
//             if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
//                 actualContainer.addClass('is-visible');
//             }
//         });

//         scrolling = false;
//     }

//     function checkLabel(container) {
//         container.each(function(){
//             var actual = $(this);
//             updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
//             updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
//         });

//         resizing = false;
//     }

//     //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
//     function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
//         dragElement.on("mousedown vmousedown  touchstart", function(e) {
//             dragElement.addClass('draggable');
//             resizeElement.addClass('resizable');

//             var dragWidth = dragElement.outerWidth(),
//                 xPosition = dragElement.offset().left + dragWidth - e.pageX,
//                 containerOffset = container.offset().left,
//                 containerWidth = container.outerWidth(),
//                 minLeft = containerOffset + 10,
//                 maxLeft = containerOffset + containerWidth - dragWidth - 10;

//                 $(window).on('resize', function()
//                 {
//                     containerOffset = container.offset().left;
//                     containerWidth = container.outerWidth();
//                     minLeft = containerOffset + 10,
//                     maxLeft = containerOffset + containerWidth - dragWidth - 10;
//                 }); 
            
//             dragElement.parents().on("mousemove vmousemove touchmove", function(e) {
//                 if( !dragging) {
//                     dragging =  true;
//                     ( !window.requestAnimationFrame )
//                         ? setTimeout(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);}, 100)
//                         : requestAnimationFrame(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);});
//                 }
//             }).on("mouseup vmouseup touchend", function(e){
//                 dragElement.removeClass('draggable');
//                 resizeElement.removeClass('resizable');
//             });
//             e.preventDefault();
//         }).on("mouseup vmouseup touchend", function(e) {
//             dragElement.removeClass('draggable');
//             resizeElement.removeClass('resizable');
//         });
//     }

//     function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
//         var leftValue = e.pageX + xPosition - dragWidth;   
//         //constrain the draggable element to move inside his container
//         if(leftValue < minLeft ) {
//             leftValue = minLeft;
//         } else if ( leftValue > maxLeft) {
//             leftValue = maxLeft;
//         }

//         var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
//         var widthVal = (100-(leftValue + dragWidth/2 - containerOffset)*100/containerWidth)+'%';
        
//         $('.draggable').css('left', widthValue).on("mouseup vmouseup touchend", function() {
//             $(this).removeClass('draggable ');
//             resizeElement.removeClass('resizable ');
//         });

//         $('.resizable').css('width', widthVal); 

//         updateLabel(labelResizeElement, resizeElement, 'left');
//         updateLabel(labelContainer, resizeElement, 'right');
//         dragging =  false;
//     }

//     function updateLabel(label, resizeElement, position) {
//         if(position == 'left') {
//             ( label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
//         } else {
//             ( label.offset().left > resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
//         }
//     }
// });



(function() {

    var elsH = document.querySelectorAll(".image-spliter .mover");
    var i = elsH.length;
    while (i--) {
        var moverWidth = elsH[i].getBoundingClientRect().width;
        var imgLeft = elsH[i].nextElementSibling;
        var width = imgLeft.getBoundingClientRect().width;
        var height = imgLeft.getBoundingClientRect().height;
        elsH[i].style.left = width / 2 - moverWidth / 2 + 'px';
        //imgLeft.style.clip = "rect(0px, " + width / 2 + "px, " + height + "px, 0px)";
        imgLeft.style.clip = "rect(0px, " + width / 2 + "px, 999px, 0px)";
        var mouseDownX = 0;
        var X;
        elsH[i].addEventListener("mousedown", function(e) {
            X = e.clientX;
            mouseDownX = 1;
        });
        elsH[i].addEventListener("mouseup", function(e) {
            mouseDownX = 0;
        });
        elsH[i].addEventListener("mouseout", function(e) {
            mouseDownX = 0;
        });

        elsH[i].addEventListener("touchstart", function(e) {
            X = e.touches[0].clientX;
            mouseDownX = 1;
        });
        elsH[i].addEventListener("touchend", function(e) {
            mouseDownX = 0;
        });

        elsH[i].addEventListener("mousemove", function(e) {
            if (mouseDownX) {
                this.style.left = parseInt(this.style.left) + (event.clientX - X) + "px";
                X = event.clientX;
                this.nextElementSibling.style.clip = "rect(0px, " + (this.getBoundingClientRect().width / 2 + parseInt(this.style.left)) + "px, " + this.getBoundingClientRect().height + "px, 0px)";
            }
        });

        elsH[i].addEventListener("touchmove", function(e) {
            if (mouseDownX) {
                this.style.left = parseInt(this.style.left) + (e.touches[0].clientX - X) + "px";
                X = e.touches[0].clientX;
                this.nextElementSibling.style.clip = "rect(0px, " + (this.getBoundingClientRect().width / 2 + parseInt(this.style.left)) + "px, " + this.getBoundingClientRect().height + "px, 0px)";
            }
        });

    }


    window.addEventListener("resize", function(f) {
        var elsHre = document.querySelectorAll(".image-spliter .mover");
        var ii = elsHre.length;
        while (ii--) {
            var moverWidth = elsHre[ii].getBoundingClientRect().width;
            var imgLeft = elsHre[ii].nextElementSibling;
            var width = imgLeft.getBoundingClientRect().width;
            var height = imgLeft.getBoundingClientRect().height;
            elsHre[ii].style.left = width / 2 - moverWidth / 2 + 'px';
            imgLeft.style.clip = "rect(0px, " + width / 2 + "px, " + height + "px, 0px)";
        }
    });

})();