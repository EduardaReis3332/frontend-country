const apiUrl = "https://restcountries.com/v3.1"
const container = document.querySelector( '[data-container=""]' )
const template = `
<div class="country">
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png"
        alt="flag"
        class="country-img"
    />
    <div class="country-info">
        <p class="country-title">Brazil</p>
        <p class="country-text">Popultion: <span>5.023.344.223</span></p>
        <p class="country-text">Região: <span>América</span></p>
        <p class="country-text">Capital: <span>Brasília</span></p>
    </div>
</div>
`

function getAllCountries () {
    // função de callback
    return fetch( `${apiUrl}/all` ).then( function ( res ) {
        return res.json()
    } ).then( function ( data ) {
        return data
    } )
}


function renderCountires () {
    const div = document.createElement( 'div' )
    console.log( container )

    getAllCountries().then( countries => {
        countries.forEach( function ( country ) {
            console.log( country )
            div.innerHTML = template
            container.appendChild( div )
        } )
    } )
}

renderCountires()