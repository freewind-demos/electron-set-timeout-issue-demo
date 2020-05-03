function show(line) {
  document.getElementById("content").innerHTML += `<div>${line}</div>`;
}

function slowTask(ms) {
  const start = Date.now();
  while (Date.now() - start <= ms) {
  }
}

function testTimeout(delay) {
  const start = Date.now()
  setTimeout(() => {
    const now = Date.now();
    if (delay === 10) {
      slowTask(5000);
    }
    show(`start: ${start}, now: ${now}, expected delay: ${delay}, real delay: ${now - start}`)
  }, delay);
}

for (let i = 0; i < 10000; i += 10) {
  testTimeout(i);
}
