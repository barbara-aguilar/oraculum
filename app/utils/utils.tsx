
export const shuffleCards = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const reorderCards = (array: any[]) => {
  return array.sort((a, b) => {
      const extractNumberA = parseInt(a.image.split('arcano')[1], 10);
      const extractNumberB = parseInt(b.image.split('arcano')[1], 10);
      return extractNumberA - extractNumberB; 
    })
};

