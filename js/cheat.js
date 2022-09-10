var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '(ฅ◑ω◑ฅ)(ฅ◑ω◑ฅ)';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = ' (ฅ´ω`ฅ)(ฅ´ω`ฅ)';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });