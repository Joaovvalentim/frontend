export const bitcoinProcessor = (data) => {
    return [
        {key : 'Coinbase' ,label: 'Coinbase', value: data.usd},
        {key : 'BitcoinTrade' ,label: 'BitcoinTrade', value: data.brl},
    ]
}
export const currencyProcessor = (data) => {
    console.log(data)
    return [
        {key : 'USD' ,label: 'USD', value: data.usd},
        {key : 'CAD' ,label: 'CAD', value: data.cad},
        {key : 'EUR' ,label: 'EUR', value: data.eur},
    ]
}