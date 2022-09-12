function evolution1(){

	const apexChart = "#evolution1";

	$.get("/evolution1",  {}, function (data) {

		var count = [];
		var date = [];
		for (var i = 0; i < data.length; i++) {
			count.push(data[i].count);
			date.push(data[i].date);
        }

		var options = {
			series: [{
				name: "Somme",
				data: count
			}],
			chart: {
				height: 350,
				type: 'line',
				zoom: {
					enabled: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth',
			},
			grid: {
				row: {
					colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
					opacity: 0.5
				},
			},
			xaxis: {
				categories: date,
			},
			colors: ["#feb019"]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();

	});
}
