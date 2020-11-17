var count = 0;

function cc(card) {
  // Only change code below this line
  let decArr = [10, 'J', 'Q', 'K', 'A']
  if (card > 1 && card < 7)
    count++
  else if (decArr.includes(card))
    count--


  return count>0?`${count} Bet`:`${count} Hold`;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
