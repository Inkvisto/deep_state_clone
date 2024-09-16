// --- (1), (2) & (3): install and import ---
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// --- ---------------------------------- ---

export function App() {
  const position = [48.51, 31.38];

  const fillBlueOptions = { fillColor: "blue" };

  return (
    <div>
      <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={position} pathOptions={fillBlueOptions} radius={400} />
      </MapContainer>
    </div>
  );
}

export default App;
