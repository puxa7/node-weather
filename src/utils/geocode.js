const request = require('request')


const geocode = (address, callback) => {
    
    const url =  'https://api.openweathermap.org/data/2.5/weather?q=' + address + '&appid=c347dad957e0d3e9acaff283b3d1e162&units=metric'
        
    request({ url, json: true},(error, {body}) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if (body.cod === '404') {
            callback('Unable to find location. Try another search', undefined)
        }else{
            //console.log(response.body.coord.lat)
            callback(undefined, {
                latitude: body.coord.lat,
                longitude: body.coord.lon,
                location: body.name
            })
        }
        
        
    }) 
}




module.exports = geocode

