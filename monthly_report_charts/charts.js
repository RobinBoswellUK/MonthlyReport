
    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawChart);


    function drawChart() {
        buildComboChart( 'chartDry', parseData(failedDry) , getOptionsComboChart())
        buildComboChart( 'chartWet', parseDataWet(failedWet) , getOptionsComboChart())
    }


    function getOptionsComboChart(){
        var options = {
            chart: {
              title: 'Test'
            },
            width: 600,
            height: 300,
			chartArea: {
				},
            seriesType: "line",
            series: {0: {type: "bars"}},
            lineWidth: 3,
            bar: { groupWidth: 0 },
            axes: {
              x: {
                0: {side: 'bottom'}
              }
            },
            hAxis: {
              gridlines: {color: 'transparent'}
            },
            vAxis: {
              viewWindow: {min: 60, max: 100},
              gridlines: {color: 'grey'}
            },

            chartArea: { backgroundColor: '#E4E4E4',
              width: 'auto',
              left:  '5%',
			  height: '80%'
            }
        };

        return options
    }


    function buildComboChart(target, data, options){

      var chart = new google.visualization.ComboChart(document.getElementById(target));

      chart.draw(data, options);
    }


    function perc(n, total){
    val = 100.0*(total-n)/total
    //console.log("in "+ n+ "tot "+ total+ "val "+ val)
        return val
    }

   function parseData( inputData ){
     var data = new google.visualization.DataTable();
     data.addColumn('date',   inputData[0].date );
     data.addColumn('number', inputData[0].events );
     data.addColumn('number', inputData[0].pc2 );
     data.addColumn('number', inputData[0].pc3 );
     data.addColumn('number', inputData[0].cal );

     for(i=1; i<inputData.length; i++){
		console.log("data set" + inputData[i])
            pc2_number=     56
            pc3_number=     56
            calcoil_number= 77
            pf1=            78
		data.addRow([
			inputData[i].date,
                        inputData[i].events,
			perc(inputData[i].pc2,    pc2_number),
			perc(inputData[i].pc3,    pc3_number),
			perc(inputData[i].cal,    calcoil_number)
		  ])
	 }
      return data
    }
    function parseDataWet( inputData ){
      var data = new google.visualization.DataTable();
      data.addColumn('date',   inputData[0].date );
      data.addColumn('number', inputData[0].events );
      data.addColumn('number', inputData[0].pf1 );
      data.addColumn('number', inputData[0].pf3 );
      data.addColumn('number', inputData[0].pf4 );
      data.addColumn('number', inputData[0].pf5 );


	  for(i=1; i<inputData.length; i++){
		console.log("data set" + inputData[i])
            pf1_number=            78
		  data.addRow([
			inputData[i].date,
                        inputData[i].events,
			perc(inputData[i].pf1,    pf1_number),
			perc(inputData[i].pf3,    pf1_number),
			perc(inputData[i].pf4,    pf1_number),
			perc(inputData[i].pf5,    pf1_number)
		  ])
	  }
      return data
    }


