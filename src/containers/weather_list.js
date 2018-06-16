import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMaps from '../components/googlemap';

class WeatherList extends Component{

    renderWeather(cityData){
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;
        return( 
        <tr key= {cityData.city.name }>
            <td ><GoogleMaps lan={lon} lat={lat } /></td>
            <Chart data={temps} color='green' unit='K'/>
            <Chart data={pressure} color='black' unit='hPA'/>
            <Chart data={humidity} color='red' unit='%'/>
            
        </tr>  
        ) 
    }

    render(){
        return (
            <table className="table  table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(k)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                     {this.props.weather.map(this.renderWeather)}
                </tbody>
               

             </table>
        )
    }
}

function mapStateToProps({weather}){
    console.log(weather)
    return {weather}
}


export default connect(mapStateToProps)(WeatherList);