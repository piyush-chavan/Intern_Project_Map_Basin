import React from 'react'
import './styles.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L, { Icon } from 'leaflet'

export default function MapComponent() {
  const cities = [
    { name: 'Latur', lat: 18.4088, lng: 76.5604 },
    { name: 'Delhi', lat: 28.6139, lng: 77.2090 },
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
    { name: 'Pune', lat: 18.5204, lng: 73.8567 },
    { name: 'Hyderabad', lat: 17.3850, lng: 78.4867 },
    { name: 'Roorkee', lat: 29.8543, lng: 77.8880 },
  ];
  const customIcon = new L.Icon({
    // iconUrl:"https://cdn-icons-png.flaticon.com/128/5425/5425869.png"
    iconUrl: require("./pin.png")
  })
  return (
    <div style={{display:'flex'}}>
      <div>
        
      </div>
      <MapContainer center={[20.5937, 78.9629]} zoom={5} >
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[20.5937, 78.9629]} >
          <Popup>
            Simple popup
          </Popup>
        </Marker>
        {cities.map((city, idx) => (
          <Marker key={idx} position={[city.lat, city.lng]}>
            <Popup>{city.name}</Popup>
          </Marker>
        ))}
      </MapContainer>

    </div>
  )
}
