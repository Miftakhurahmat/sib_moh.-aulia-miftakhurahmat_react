import { useEffect, useState } from 'react';
import  axios from 'axios';
import { NavLink } from 'react-router-dom';

function Home(props) {
	const [base, setBase] = useState([]);
	const [currencies, setCurrencies] = useState([]);
	const [identifier, setIdentifier] = useState(1);
	const [loading, setLoading] = useState(false);

	const getCurrency = async () => {
		setLoading(true)
		try {
			let response = await axios.get(`https://api.currencyfreaks.com/latest?apikey=7853f4e1f6094bf492a3213a6ee5e381`)
			// https://api.currencyfreaks.com/latest?apikey={API_KEY}&symbols=CAD,EUR,IDR,JPY,CHF,GBP
			setBase(response.data.base);
			setCurrencies([
				{
					name: 'CAD',
					rate: (response.data.rates.CAD),
				},
				{
					name: 'IDR',
					rate: (response.data.rates.IDR),
				},
				{
					name: 'JPY',
					rate: (response.data.rates.JPY),
				},
				{
					name: 'CHF',
					rate: (response.data.rates.CHF),
				},
				{
					name: 'EUR',
					rate: (response.data.rates.EUR),
				},
				{
					name: 'GBP',
					rate: (response.data.rates.GBP),
				}
			])
			

			setLoading(false)
		} catch(e) {
			setLoading(true)
			console.log(e.message);
		}
	}

	useEffect(() => {
		getCurrency();
	}, [identifier])

	return (
		<div className='py-5 flex'>
			<div className='container mx-auto'>
				<h1 className='md:text-4xl text-center'>Display Currency Rates</h1>
				<div className="form-control pb-10">
					<label className="label">
						<span className="label-text">Enter amount</span>
					</label>
					<label className="input-group">
						<input type="text" className="input input-bordered" name='identifier' value={identifier} onChange={(e) => setIdentifier(e.target.value)}/>
						<span>{base}</span>
					</label>
				</div>
				{
					loading ? <div>Loading .... </div> :
					<div className='overflow-x-auto mb-5'>
						<table className='table table-zebra w-full'>
							<thead>
								<tr>
									<th className='md:text-lg'>Currency</th>
									<th className='md:text-lg'>We Buy</th>
									<th className='md:text-lg'>Exchange Rate</th>
									<th className='md:text-lg'>We Sell</th>
								</tr>
							</thead>
							<tbody  className='overflow-x-auto' >
								{
									currencies.map((currency, index) => {
										let currencyRate = parseFloat(currency.rate)
										let valueRate = currencyRate * parseFloat(identifier)
										let valueBuy = valueRate + 0.05 * currencyRate * parseFloat(identifier)
										let valueSell = valueRate - 0.05 * currencyRate * parseFloat(identifier)
										return (
											<tr key={index}>
												<th>{currency.name}</th>
												<td>{valueBuy}</td>
												<td>{valueRate}</td>
												<td>{valueSell}</td>
											</tr>
										)
									})
								}
							</tbody>
						</table>
					</div>
				}
				<div className='flex'>
					<button className="btn btn-primary mx-auto"><NavLink to='/About'>About Me</NavLink></button>
				</div>
			</div>
			
		</div>
		
	);
}

export default Home;