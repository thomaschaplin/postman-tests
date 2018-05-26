var jsonData = {};
jsonData = JSON.parse(responseBody);

pm.test("JSON Response Matches Environment Variable", function () {
    var jsonData = jsonData.response.json;
    pm.expect(jsonData.response.json).to.eql(postman.getEnvironmentVariable('value'));
});
