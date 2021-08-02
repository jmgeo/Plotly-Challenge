// Define the function for plotting
function getPlots(id) {
    //Use the d3 to read the json
    d3.json("samples.json").then (sampledata =>{
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

    })
}