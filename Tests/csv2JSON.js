var responseData = (responseBody);
var responseData_CSV = JSON.parse(csv2JSON(responseData, `;`));

function csv2JSON(csv, delimiter) {
    
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(delimiter);
    
    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(delimiter);
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    return JSON.stringify(result);
}
