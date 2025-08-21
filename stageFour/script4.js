function countMultiples() {
      const arr = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
      const result = {};

      for (let d = 1; d <= 9; d++) {
        let count = 0;
        for (let num of arr) {
          if (num % d === 0) {
            count++;
          }
        }
        result[d] = count;
      }

      document.getElementById("result").innerText = JSON.stringify(result, null, 2);
    }
    