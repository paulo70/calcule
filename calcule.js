(function() {
  const arr = [3,4,90,6,10,-5,80,100];

  const getArray = arr.map((item) => item);
  const valueMax = getArray.reduce((a,b)=> Math.max(a,b));
  const valueMin = getArray.reduce((a,b)=> Math.min(a,b));
  const size = arr.length;
  const media = getArray.reduce((a,b)=> a + b / size);

  console.log(valueMax);
  console.log(valueMax);
  console.log(size);
  console.log(media);
  
})();