function generateSeries(a) {
      let result = [];
      for (let i = 0; i < a; i++) {
        result.push(2 * i + 1); // odd number formula
      }
      return result.join(", ");
    }

    function showSeries() {
      const a = document.getElementById("num").value;
      if (a <= 0) {
        document.getElementById("series").innerText = "Please enter a positive number.";
        return;
      }
      document.getElementById("series").innerText = `Series: ${generateSeries(a)}`;
    }