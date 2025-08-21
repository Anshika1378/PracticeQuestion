function generateSeries(a) {
      // if even, reduce by 1
      if (a % 2 === 0) {
        a = a - 1;
      }

      let result = [];
      for (let i = 0; i < a; i++) {
        result.push(2 * i + 1);
      }
      return result.join(", ");
    }

    function showSeries() {
      const a = parseInt(document.getElementById("num").value);
      if (a <= 0 || isNaN(a)) {
        document.getElementById("series").innerText = "Please enter a positive number.";
        return;
      }
      document.getElementById("series").innerText = `Series: ${generateSeries(a)}`;
    }