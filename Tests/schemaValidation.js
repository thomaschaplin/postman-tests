var request_schema = {}

pm.test("Request Schema is valid", function() {
    var data = JSON.parse(request.data);
    var valid = tv4.validate(data, request_schema, false, true);
    if (valid !== true) {
        console.log(tv4.error);
    }
    pm.expect(valid).to.be.true;
});

var response_schema = {}

pm.test("Response Schema is valid", function() {
    var data = JSON.parse(responseBody);
    var valid = tv4.validate(data, response_schema, false, true);
    if (valid !== true) {
        console.log(tv4.error);
    }
    pm.expect(valid).to.be.true;
});
