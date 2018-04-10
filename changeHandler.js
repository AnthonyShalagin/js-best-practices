module.exports = {

	getAmount: function(coinType) {
		// COINS:
		// [p]enny
		// [n]ickel
		// [d]ime
		// [q]uarter

			if (coinType == 'p') {
				return 1;
			} else if (coinType == 'd') {
				return 10;
			} else if (coinType == 'q') {
				return 25;
			} else {
				throw new Error(`Unrecognized coin ${  coinType}`);
			}
	},

	convertToChange: function(change) {
		const result = [];
		let remaining = change;

		while (remaining >= 25) {
			remaining -= 25;
			result.push('q');
		}

		while (remaining >= 10) {
			remaining -= 10;
			result.push('d');
		}
		while (remaining >= 5) {
			remaining -= 5;
			result.push('n');
		}

		while (remaining >= 1) {
			remaining -= 1;
			result.push('p');
		}

		return result;

	}
};



/*
 var coins = {
      'p': 1,
      'n': 5,
      'd': 10,
      'q': 25
    };

    var coinsByAmount = ['q', 'd', 'n', 'p'];

    module.exports = {
      convertToChange: function(amount) {
        var change = [];
        for(var i in coinsByAmount){
          var coinType = coinsByAmount[i];
          var coinValue = coins[coinType];

          while(amount >= coinValue){
            change.push(coinType);
            amount -= coinValue;
          }
        }
        return change;
      }
    };


*/

