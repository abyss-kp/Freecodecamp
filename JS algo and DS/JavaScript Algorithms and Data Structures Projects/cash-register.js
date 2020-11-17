function checkCashRegister(price, cash, cid) {
  let denominations = { "PENNY": 1, "NICKEL": 5, "DIME": 10, "QUARTER": 25, "ONE": 100, "FIVE": 500, "TEN": 1000, "TWENTY": 2000, "ONE HUNDRED": 10000 }
  let dueChange = cash * 100 - price * 100
  let register = cid.map(itm => [itm[0], itm[1] * 100])
  let registerTotal = register.reduce((sum, val) => {
    sum += val[1]
    return sum
  }, 0)
  if (registerTotal < dueChange)
    return { status: 'INSUFFICIENT_FUNDS', change: [] }
  if (registerTotal === dueChange)
    return { status: 'CLOSED', change: cid }
  let duePaid;
  let newCid = register.reverse().reduce((acc, val) => {
    duePaid = Math.min(val[1], Math.floor(dueChange / denominations[val[0]]) * denominations[val[0]]);
    if (duePaid > 0) {
      dueChange -= duePaid;
      acc.push([val[0], duePaid / 100]);
    } return acc;
  }, [])
  if (dueChange > 0) return { status: 'INSUFFICIENT_FUNDS', change: [] }
  return { status: 'OPEN', change: newCid }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
