document.getElementById('framework-select').addEventListener('change', function() {
    const selectedFramework = this.value;
    // Lấy dữ liệu và cập nhật kết quả so sánh ở đây
    updateResults(selectedFramework);
});

function updateResults(framework) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p>Kết quả so sánh cho ${framework} sẽ được hiển thị ở đây.</p>`;
    // Logic cho việc lấy và hiển thị dữ liệu sẽ ở đây
}