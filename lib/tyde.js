(function() {
  var colors = ["#ccfff2","#99ffe6","#66ffd9","#33ffcc","#00ffbf","#00cc99","#009973","#008060","#00664d","#004d39"]
  var target = document.getElementById("tyde")

  var i = 0;
  function warp() {
    function go() {
      i++;
      function play() {
        if(i<=9 && !!target)  {
          target.style.color = colors[i];
        }
      }
      play();
      setTimeout(go,200);
    }
    go();
  };
  warp();
  if( !!target ){
    var s = target.style;
    s.opacity = 1;
  }
  (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,200)})();
})();
