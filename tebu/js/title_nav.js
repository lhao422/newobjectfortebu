/* 
* @Author: Marte
* @Date:   2016-10-28 09:34:08
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-28 12:21:11
*/

$().extend("size", function(){
                return this.elements.length;
            })
             $(function(){
                var aBtn = $("#searchright").find("ol").find('li');
                var count = 0;
                var oUl = $("#searchright").find("ul");
                var timer = null;
                var ali = oUl.find("li")

                aBtn.click(function(){
                    count = $(this).index();
                    tab();
                })

                timer = setInterval(function(){
                    count++;
                    tab()
                }, 2500);

                function tab(){
                        aBtn.attr("class","")
                        aBtn.eq(count).attr("class","active"); 
                        if(count ==ali.size()-1){
                            aBtn.eq(0).attr("class","active"); 
                        }
                          
                       oUl.animate({left:-216* count},function(){
                        if(count ==ali.size()-1){
                            count =0;
                            oUl.css("left",0)
                        }
                   });                 
                };
                oUl.hover(function() {
                    /* Stuff to do when the mouse enters the element */
                    clearInterval(timer)
                }, function() {
                    /* Stuff to do when the mouse leaves the element */
                    timer = setInterval(function(){
                    count++;
                    tab()
                    }, 2500);
  
                });
             })