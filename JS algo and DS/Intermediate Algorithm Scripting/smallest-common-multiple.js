function smallestCommons(arr) {
  let first = arr[0] < arr[1] ? arr[0] : arr[1]
  let second = arr[0] > arr[1] ? arr[0] : arr[1]
  for (let i = first, j = 0; i <= second; i++)
    arr[j++] = i
  let lcm_of_array_elements = 1;
  let divisor = 2;

  while (true) {
    let counter = 0;
    let divisible = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 0) {
        return 0;
      }
      else if (arr[i] < 0) {
        arr[i] = arr[i] * (-1);
      }
      if (arr[i] == 1) {
        counter++;
      }
      if (arr[i] % divisor == 0) {
        divisible = true;
        arr[i] = arr[i] / divisor;
      }
    }
    if (divisible) {
      lcm_of_array_elements = lcm_of_array_elements * divisor;
    }
    else {
      divisor++;
    }
    if (counter == arr.length) {
      return lcm_of_array_elements;
    }
  }
}


smallestCommons([1, 5]);
