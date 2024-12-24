// Get the canvas element and its context
const canvas = document.getElementById('barChart');
const ctx = canvas.getContext('2d');

// Sample data for the bar chart
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Months
    values: [65, 59, 80, 81, 56, 55, 40] // Data values for each month
};

// Chart configuration
const chartWidth = canvas.width;
const chartHeight = canvas.height;
const barWidth = 50;
const barSpacing = 60; // Space between bars

// Function to draw the bar chart
function drawBarChart() {
    // Clear the canvas
    ctx.clearRect(0, 0, chartWidth, chartHeight);
    
    // Draw title
    ctx.fillStyle = '#000';
    ctx.font = '20px Arial';
    ctx.fillText('Monthly Data Visualization', chartWidth / 2 - 100, 30);

    // Draw the bars
    for (let i = 0; i < data.labels.length; i++) {
        const barHeight = data.values[i];
        const x = i * barSpacing + 40; // X position of the bar
        const y = chartHeight - barHeight - 40; // Y position of the bar (bottom of the canvas)

        // Draw the rectangle (bar)
        ctx.fillStyle = '#4CAF50'; // Color of the bar
        ctx.fillRect(x, y, barWidth, barHeight);

        // Draw the labels (months) under the bars
        ctx.fillStyle = '#000';
        ctx.font = '12px Arial';
        ctx.fillText(data.labels[i], x + (barWidth / 2) - 12, chartHeight - 10);
    }

    // Draw axes
    ctx.strokeStyle = '#000';
    ctx.beginPath();
    ctx.moveTo(40, chartHeight - 40);
    ctx.lineTo(chartWidth - 20, chartHeight - 40); // X-axis
    ctx.moveTo(40, chartHeight - 40);
    ctx.lineTo(40, 20); // Y-axis
    ctx.stroke();
}

// Draw the chart when the page loads
drawBarChart();
