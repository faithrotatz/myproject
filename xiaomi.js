$(function(){

/*banner特效*/

   function banner(){
   var num=1;
   var a=$(".bg")
   var b=$(".circle")
   var bgi=$(".bgi")
   var btn=$(".zuoyou")

   bgi.hover(function(){
    clearInterval(t)
   },function(){
   	 t=setInterval(move,2000)
   })


   
   	b.each(function(i,obj){
        
   		$(obj).hover(function(){
   	    a.hide();
   	    b.css({background:"#57838b"})
   		a.eq(i).fadeIn();
   		$(obj).css({background:"white"})
   
   },function(){
   	$(obj).css({background:"#57838b"})
   })	})
   function move(){
   	a.hide();
   	b.css({background:"#57838b"})
   	if(num==4){
   		num=0;
   	}
   a.eq(num).fadeIn();
   b.eq(num).css({background:"white"})
    num++;

   }
     btn.click(function(){
      move();
      
   }).hover(function(){
      btn.css({cursor:"pointer",background:"rgba(0,0,0,0.5)"})

   },function(){
     btn.css({background:"rgba(0,0,0,0)"}) 
   })
   var t=setInterval(move,2000)
	}banner();

  /*主导航下拉*/
  function mainbav(){
   var a=$(".zhudao3")
   var b=$(".zd11")
   var c=document.documentElement.clientWidth+"px";
   var d=(parseInt(c)-1226)/2+"px";
   

   b.css({width:c,border:"1px solid #ccc",paddingLeft:d})
     a.hover(function(){
     $(this).next().finish();  
    $(this).next().slideDown("fast");
   
     },function(){
   //$(this).next().finish();
    $(this).next().slideUp("fast")
    //$(this).next().css({display:"none"});   
     })


  }
  mainbav();

  /*侧导航*/
   function lsidebar(){
   var a=$(".ta")

   a.hover(function(){
      $(this).find(".lsubnav").css("display","block")
   },function(){
     $(this).find(".lsubnav").css("display","none") 
   })

   }lsidebar();

   /*小米明星单品*/
   function con(){
      var frag=true;
      var a=$(".content-20");var b=$(".con-3")
      a.hover(function(){
         clearInterval(t)
      },function(){
       t=setInterval(move,3000)  
      })
      b.hover(function(){
         clearInterval(t)
      },function(){
       t=setInterval(move,3000)  
      })
      
      b.first().click(function(){
        a.animate({left:0},1000);
        return;    
      })
      b.last().click(function(){
        a.animate({left:-1226},1000); 
        return;
      })
      function move(){
         var a=$(".content-20");
         var b=$(".con-3")
         if(frag){
         a.animate({left:-1226},1000);
         b.last().css("color","black")
         b.first().css("color","#ccc")
         frag=false
        }
      else{
            a.animate({left:0},1000);
            b.first().css("color","black")
            b.last().css("color","#ccc")
            frag=true;

         }

      }

   var t=setInterval(move,3000)


   }con();
/*搭配的特效*/
function con2(){

var a=$(".zb2-1")
a.append("")

}
con2();
})