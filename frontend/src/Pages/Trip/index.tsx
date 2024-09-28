import React from "react";
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table } from "@/components/ui/table";
import { LatLngExpression } from "leaflet";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // For back arrow icon
import pathLogo from '../../../public/assets/speedoLogo.svg';

function Trip() {
  const polyline: LatLngExpression[] = [
    [35.2271, -80.8431], // Charlotte, NC
    [35.2301, -80.8452],
    [35.2281, -80.8412],
  ];

  const stoppedMarkers = [
    { position: [35.2271, -80.8431] as LatLngExpression, label: "Stopped for 10 Mins" },
    { position: [35.2301, -80.8452] as LatLngExpression, label: "Idle for 10 Mins" },
  ];

  return (
    <div>
      <nav className="w-full py-4 bg-white shadow-md flex items-center justify-start px-8">
        <div className="flex items-center">
          <img
            src={pathLogo}
            alt="Speedo Logo"
          />
        </div>
      </nav>

      <Link to="/" className="flex items-center m-4">
        <ArrowLeft />
      </Link>

      <div className="mb-6">
        <div className="flex items-center space-x-4">
          <Input placeholder="Colaba" className="w-1/3" />
          <Button>New</Button>
        </div>
      </div>

      <MapContainer center={[35.2271, -80.8431]} zoom={13} scrollWheelZoom={false} className="h-80 w-full rounded-lg mb-6">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Polyline positions={polyline} color="blue" />
        {stoppedMarkers.map((marker, index) => (
          <Marker position={marker.position} key={index}>
            <Popup>{marker.label}</Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="grid grid-cols-5 gap-4 mb-6">
        <div className="text-center">
          <p className="text-xl font-bold">63 KM</p>
          <p>Total Distanced Travelled</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">1Hr 36 Mins</p>
          <p>Total Travelled Duration</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">41 Mins</p>
          <p>Over Speeding Duration</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">20.3 KM</p>
          <p>Over Speeding Distance</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">41 Mins</p>
          <p>Stopped Duration</p>
        </div>
      </div>

      <Table className="w-full">
        <thead>
          <tr>
            <th>Time</th>
            <th>Point</th>
            <th>Ignition</th>
            <th>Speed</th>
            <th>Travel Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11:30:24 PM</td>
            <td>48.7128° N, 74.0060° W</td>
            <td>ON</td>
            <td>28.5 KM/H</td>
            <td>Travel Duration: 20 Mins</td>
          </tr>
          <tr>
            <td>11:30:24 PM</td>
            <td>48.7128° N, 74.0060° W</td>
            <td>ON</td>
            <td>28.5 KM/H</td>
            <td>Stopped for: 10 Mins</td>
          </tr>
          <tr>
            <td>11:30:24 PM</td>
            <td>48.7128° N, 74.0060° W</td>
            <td>ON</td>
            <td>28.5 KM/H</td>
            <td>Overspeeding Duration: 20 Minutes</td>
          </tr>
        </tbody>
      </Table>

      <div className="flex justify-center mt-4">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
      </div>
    </div>
  );
}

export default Trip;