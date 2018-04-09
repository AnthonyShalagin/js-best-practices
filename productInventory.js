module.exports = {
	getProducts: function() {
		return products;
    },

	getProduct: function(productId) {
		const product = products.find(function(p) { return p.id === productId; });
		return product;
    }
};
