Scroll = {
  sL:function(o){return o!=window?o.scrollLeft:document.body.scrollLeft||document.documentElement.scrollLeft},
  sT:function(o){return o!=window?o.scrollTop:document.body.scrollTop||document.documentElement.scrollTop},  
  anim:function(p){function d(p){return Math.pow(p,3)};if(p<0.5){return d(2*p)/2;}else{return (2-d(2*(1-p)))/2;}}, // рассчет анимации
  animator:[], /* массив с анимируемыми объектами */
  anielems:0, /* счетчик анимируемых объектов */
  to: function(obj,values,time,callback){
  // перебираем параметры и значения
  for(key in values){anima(key,values[key])}
  function anima(param,to){
  // проверяем и останавливаем предыдущие анимации
  for(key in Scroll.animator){if(Scroll.animator[key].o==obj&&Scroll.animator[key].p==param){clearInterval(Scroll.animator[key].timer)}}
  var aID=Scroll.anielems,
  result,
  now,
  progress,
  w=obj==window?1:0,
  param=param=='x'?1:0,
  from=param?Scroll.sL(obj):Scroll.sT(obj);
  Scroll.animator[aID] = {
  start: new Date().getTime(),
  timer: setInterval(function(){
  now=(new Date().getTime())-Scroll.animator[aID].start;
  progress=now/time;
  result=(to-from)*Scroll.anim(progress)+from;
  if(param){
  if(w){window.scrollTo(result,Scroll.sT(obj))}
  else{obj.scrollLeft=result}
  }else{
  if(w){window.scrollTo(Scroll.sL(obj),result)}
  else{obj.scrollTop=result}
  }
  if(progress>=1){
  clearInterval(Scroll.animator[aID].timer);
  if(param){
  if(w){window.scrollTo(to,Scroll.sT(obj))}
  else{obj.scrollLeft=to}
  }else{
  if(w){window.scrollTo(Scroll.sL(obj),to)}
  else{obj.scrollTop=to}
  }
  if(callback){callback()}
  }
  },10)
  }
  Scroll.anielems++;
  }
  }
  };