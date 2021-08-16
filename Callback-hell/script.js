let container = document.querySelector(".container");

setTimeout(() => {
  container.innerHTML = `<h1> 10 </h1>`;
  setTimeout(() => {
    container.innerHTML = `<h1> 9 </h1>`;
    setTimeout(() => {
      container.innerHTML = `<h1> 8 </h1>`;
      setTimeout(() => {
        container.innerHTML = `<h1> 7 </h1>`;
        setTimeout(() => {
          container.innerHTML = `<h1> 6 </h1>`;
          setTimeout(() => {
            container.innerHTML = `<h1> 5</h1>`;
            setTimeout(() => {
              container.innerHTML = `<h1> 4 </h1>`;
              setTimeout(() => {
                container.innerHTML = `<h1> 3 </h1>`;
                setTimeout(() => {
                  container.innerHTML = `<h1> 2 </h1>`;
                  setTimeout(() => {
                    container.innerHTML = `<h1> 1 </h1>`;
                    setTimeout(() => {
                      container.innerHTML = `<h1> Happy Independence Day!</h1>`;
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
