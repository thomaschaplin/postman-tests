var jsonData = {};
jsonData = JSON.parse(responseBody);

var value = jsonData.response.json;
postman.setEnvironmentVariable("value", value);

console.log("The value is " + value);
