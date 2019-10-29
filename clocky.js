 //Saber la hora con el ángulo que forma la manecilla de las horas del reloj.
var whatTimeIsIt = function(angle) {
  let hour=Math.floor(angle/30);
  if (hour === 0 || angle === 0) 
    {hour=12}; 
  let minute = Math.floor((angle%30)*2); 
  //let minute = Math.floor((angle%30)*2); 
    return `${('0'+String(hour)).slice(-2)}:${('0'+String(minute)).slice(-2)}`;
  }  