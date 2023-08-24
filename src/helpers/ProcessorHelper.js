export const bitcoinProcessor = (data) => {
    return [
        {key : 'Coinbase' ,label: 'Coinbase', value: data.usd},
        {key : 'BitcoinTrade' ,label: 'BitcoinTrade', value: data.brl},
    ]
}
export const currencyProcessor = (data) => {
    return [
        {key : 'USD' ,label: 'USD', value: data.usd},
        {key : 'CAD' ,label: 'CAD', value: data.cad},
        {key : 'EUR' ,label: 'EUR', value: data.eur},
    ]
}

export const bovespaProcessor = (data) => {
    return data.map(item => {
        const {code, price} = item
        return {key : code , label: code, value: price}
    })
}

export const googleTrendsProcessor = (data) => {
    return data.map(item => {
        const {name, volume} = item
        return {key : name , label: name, value: volume}
    })
}