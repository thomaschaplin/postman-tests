pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});
