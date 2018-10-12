var request_body_first_object = _.first(JSON.parse(request.data))
var request_keys = _.keys(request_body_first_object)
var response_body = (JSON.parse(responseBody))
var response_body_first_object = _.first(response_body.data)

requestValuesMatchResponseValues = function(request_value, response_value, key_name) {
    return pm.test(`Request value ${key_name} matches response value`, pm.expect(request_value).to.eql(response_value))
}

_.map(request_keys, (key) => {
    requestValuesMatchResponseValues(request_body_first_object[key], response_body_first_object[key], key)
})
