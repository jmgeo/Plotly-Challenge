// Define the function for plotting
function getPlots(id) {
    //Use the d3 to read the json
    d3.json("samples.json").then (sampledata =>{
        console.log(sampledata)
    })
}