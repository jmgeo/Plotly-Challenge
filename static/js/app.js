// Define the function for plotting
function getPlots(id) {
    //Use the d3 to read the json
    d3.json("../../samples.json").then (sampledata =>{
        console.log(sampledata)

        var otuIds = sampledata.samples[0].otu_ids;
        console.log(otuIds)

        var sampleValues =  sampledata.samples[0].sample_values.slice(0,10).reverse();
        console.log(sampleValues)

        var otuLabels =  sampledata.samples[0].otu_labels.slice(0,10);
        console.log (`OTU Labels: ${otuLabels}`)

        //Select the top 10 otuIds for the OTU plot, and reverse them
        var topOtuIds = sampledata.samples[0].otu_ids.slice(0,10).reverse();
        //adjust them to set up for plotting
        var otuIdsMap = topOtuIds.map(d => "OTU" + d);
        console.log(`OTU IDs: ${otuIdsMap}`)

        //Bar chart coding
        var trace1 = {
            x: sampleValues,
            y: otuIdsMap,
            text: otuLabels,
            marker: {
                color: "green"
            },
            type: "bar",
            orientation: "h"

        };
        //create the data variable
        var data = [trace1]
        //Set the layouts for the plot
        var layout = {
            title: "The Top 10 OTUs",
            yaxis:{
                tickmode: "linear",
            },
            margin: {
                l: 125,
                r: 125,
                t: 125,
                b: 75
            }
        };
    //create the bar plot
    Plotly.react("bar", data, layout)

    //set up the bubble plot
    var trace2 = {
        x: sampledata.samples[0].otu_ids,
        y: sampledata.samples[0].sample_values,
        mode: "markers",
        marker:{
            size: sampledata.samples[0].sample_values,
            color: sampledata.samples[0].otu_ids
        },
        text: sampledata.samples[0].otu_labels
    };

    var data2 = [trace2];
    var layout2= {
        title: "OTU Counts per Patient",
        xaxis: {title: "OTU ID"},
        height: 500,
        width: 1000
    };

    // create bubble plot
    Plotly.react("bubble", data2, layout2);

    })
}

getPlots(940)