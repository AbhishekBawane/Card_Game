export function generateCards() {
  const nums = new Set();

  while (nums.size < 5) {
    nums.add(Math.floor(Math.random() * 100));
  }

  const values = Array.from(nums);
  
  const row1 = values.map((val, id) =>({
     id: `r1-${id}-${Date.now()}`,
     value: val
  }));
  
  const row2 = [...values].sort(()=>Math.random()-0.5).map((val, id)=>({
     id: `r2-${id}-${Date.now()}`,
     value:val
  }))
  return { row1, row2 };
}


export function shuffle(array) {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}