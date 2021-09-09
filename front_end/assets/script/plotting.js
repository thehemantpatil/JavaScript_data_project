import { region, fetchRegion } from "./fetching.js";

export const regionPopulation = async(region_name) => {
    // argument region_name contain object of regions.
    // here passing url of declare in objects to fetch operation.
    await fetchRegion(region_name.url);

    /* - region contain the fetched json object, it is imported
         from fetching.js
       - converting all the keys into array and assigning it to
         xAxis categories for plotting highcharts.
       - same for values.*/
    region_name.xAxis.categories = Object.keys(region);

    if (region_name.hasOwnProperty('key')) {
        for (const population of Object.values(region)) {
            region_name.series.push({ "showInLegend": false, data: [population] });
        }
    } else {
        region_name.series[0].data = Object.values(region);
    }

    // json object is for storing all the values of object created in object.js
    // file.
    let json = {};
    json.chart = region_name.chart;
    json.title = region_name.title;
    json.subtitle = region_name.subtitle;
    json.tooltip = region_name.tooltip;
    json.xAxis = region_name.xAxis;
    json.yAxis = region_name.yAxis;
    json.series = region_name.series;
    json.plotOptions = region_name.plotOptions;
    json.legend = region_name.legend;
    json.credits = region_name.credits;

    Highcharts.chart('container', json);

};