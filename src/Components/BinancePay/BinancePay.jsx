import axios from 'axios';
import React, { useState } from 'react';

function BinancePay() {
  const [amount, setAmount] = useState('');
  const [response, setResponse] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://api.binance.com/api/v3/pay/transaction', {
        amount: amount,
        currency: 'USDT',
        merchant_id: 'YOUR_MERCHANT_ID',
        product_detail: 'Product description',
        redirect_url: 'http://localhost:3000/checkout',
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-MBX-APIKEY': 'YOUR_API_KEY',
        },
      });
      setResponse(response.data);
    } catch (error) {
      console.error(error);
      setResponse(error.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input type="text" value={amount} onChange={handleAmountChange} />
        </label>
        <button type="submit">Pay with Binance Pay</button>
      </form>
      <div>
        {response && (
          <pre>{JSON.stringify(response, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

export default BinancePay;
