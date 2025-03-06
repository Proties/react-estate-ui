import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "./map.scss"
import "leaflet/dist/leaflet.css"

function Map(items){
    return (
        <MapContainer center={[52.4797, -1.90269]} zoom={7} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution= '&copy; <a href="www.openstreetmap.org/#map=6/-28.68/24.68">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
    )
}

export default Map