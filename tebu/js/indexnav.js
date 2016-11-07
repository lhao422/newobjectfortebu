/* 
* @Author: Marte
* @Date:   2016-10-29 16:29:01
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-29 16:29:27
*/
$(function(){
                var oBtn = $(".nav").find(".navol").find("li");
                var cBtn = $(".nav").find("ul").find("li");
                /*alert(cBtn.length)*/
                var j = 0;
                var timer = null;
                    oBtn.click(function(){

                        oBtn.attr("class","")
                        j = $(this).index();
                        oBtn.eq(j).attr("class","active");
                        cBtn.css("display","none");
                        cBtn.eq(j).css("display","block")
                    });
                    timer=setInterval(function(){
                        j++;
                        if(j ==5){
                            j =0;
                        }
                        oBtn.attr("class","")
                        oBtn.eq(j).attr("class","active");
                        cBtn.css("display","none");
                        cBtn.eq(j).css("display","block")
                    },2500);
                    cBtn.mouseover(function() {
                        /* Act on the event */
                        clearInterval(timer)
                    });
                    cBtn.mouseout(function() {
                        /* Act on the event */
                        timer=setInterval(function(){
                        j++;
                        if(j ==5){
                            j =0;
                        }
                        oBtn.attr("class","")
                        oBtn.eq(j).attr("class","active");
                        cBtn.css("display","none");
                        cBtn.eq(j).css("display","block")
                    },2500);
                    });
            })  