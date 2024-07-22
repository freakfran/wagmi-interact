

export async function connect(){
    if (typeof window.okxwallet == 'undefined') {console.log('OKX is not installed!');}
    return await okxwallet.bitcoin.connect()
}