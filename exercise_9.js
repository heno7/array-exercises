// Ex9
// 9. I have 1 object like this:
// 		const order = {
// 			'cart': [
// 				{ id: 1, name: "ao dai", amount: 5, price: 100000 },
// 				{ id: 2, name: "ao coc", amount: 2, price: 200000 },
// 				{ id: 3, name: "quan dai", amount: 3, price: 150000 },
// 				{ id: 4, name: "quan coc", amount: 4, price: 130000 },
// 			],
// 			'customer': 'Name',
// 			'address': '12 Giai Phong Street'
// 		};
// 	Please use only reduce method, and only one time, and return 2 variables: totalOfMoney = 1870000, totalOfAmount = 14;

const order = {
  cart: [
    { id: 1, name: "ao dai", amount: 5, price: 100000 },
    { id: 2, name: "ao coc", amount: 2, price: 200000 },
    { id: 3, name: "quan dai", amount: 3, price: 150000 },
    { id: 4, name: "quan coc", amount: 4, price: 130000 },
  ],
  customer: "Name",
  address: "12 Giai Phong Street",
};

const { totalOfMoney, totalOfAmount } = order.cart.reduce(
  (result, item) => {
    return {
      totalOfMoney: result.totalOfMoney + item.price * item.amount,
      totalOfAmount: result.totalOfAmount + item.amount,
    };
  },
  { totalOfMoney: 0, totalOfAmount: 0 }
);

console.log(totalOfMoney, totalOfAmount);
