describe("assertView element in iframe", function() {
    it("should capture red square", function() {
        return this.browser
            .url('index.html')
            .frame(0)
            .assertView('red-square', '.item.selected')
    });
});
