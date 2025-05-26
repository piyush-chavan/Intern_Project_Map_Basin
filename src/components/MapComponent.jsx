import React, { useEffect, useState } from 'react'
import './styles.css'
import { MapContainer, Marker, Popup, TileLayer, useMap, CircleMarker, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import { indianStates } from './states.js'
import { NarmadaStations } from './stations.js'
import Footer from './Footer.jsx'
// import { ShapefileLayer } from './ShapefileLayer.jsx'
import { ZoomToLayer } from './ShapefileLayer.jsx'
import shp from 'shpjs';
import { GeoJSON } from 'react-leaflet';
import { NarmadaGeoJson } from './output (1)/NarmadaGeoJson.js'
import { basins } from './basins.js'
import ExcelChartFromFile from './Excel.jsx'
import { indisGeojson } from './output (1)/india_st.js'

const keralaGeoJson = {
  "type": "Feature",
  "properties": { "name": "Kerala" },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [74.0195, 12.7761],
        [75.1355, 12.7066],
        [75.9696, 11.8065],
        [76.1300, 10.5721],
        [76.6413, 9.2021],
        [76.5005, 8.8992],
        [76.2999, 8.5042],
        [75.8362, 8.6602],
        [75.0940, 10.0732],
        [74.8469, 11.0083],
        [74.5389, 11.8884],
        [74.0411, 12.7388],
        [74.0195, 12.7761]
      ]
    ]
  }
};

function ChangeCenter({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom); // Set both center and zoom level
  return null;
}

function ZoomControlledDots({ coordinates, clickhandle }) {
  const map = useMap();
  const [visible, setVisible] = useState(map.getZoom() >= 7);


  useEffect(() => {
    const handleZoom = () => {
      const zoomLevel = map.getZoom();
      setVisible(zoomLevel >= 7);
    };

    map.on('zoomend', handleZoom);
    return () => map.off('zoomend', handleZoom);
  }, [map]);

  const handleClick = (point) => {
    const clickedStation = NarmadaStations.filter((item) => item.name === point.name)[0]
    // setStation(clickedStation.name)
    // setPopup(true)
    clickhandle(clickedStation)
    // alert(`You clicked on: ${point.name}`);
    // You can also perform navigation, data loading, etc. here.
  };

  return (
    <>
      {visible &&
        coordinates.map(({ name: name, position: [lat, lng] }, index) => (
          <CircleMarker
            style={{ zIndex: 999 }}
            key={index}
            center={[lat, lng]}
            radius={10}
            pane="markerPane"
            pathOptions={{ color: '#ff5722', fillColor: '#ff5722', fillOpacity: 0.8 }}
            eventHandlers={{
              click: () => handleClick({ name: name, position: [lat, lng] })
            }}
          >
            <Tooltip direction="top" offset={[0, -5]} opacity={1} sticky>
              {name}
            </Tooltip>
          </CircleMarker>
        ))}
    </>
  );
}

export default function MapComponent() {
  const [center, setCenter] = useState([20.5937, 78.9629])

  const cities = [
    { name: 'Latur', lat: 18.4088, lng: 76.5604 },
    { name: 'Delhi', lat: 28.6139, lng: 77.2090 },
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
    { name: 'Pune', lat: 18.5204, lng: 73.8567 },
    { name: 'Hyderabad', lat: 17.3850, lng: 78.4867 },
    { name: 'Roorkee', lat: 29.8543, lng: 77.8880 },
  ];

  const points = [
    {
      name: "Mohgaon",
      position: [22.7658, 80.6234]
    },
    {
      name: "Baramghat",
      position: [23.0309, 79.0156]
    },
    {
      name: "Hoshangabad",
      position: [22.7561, 77.7328]
    },
    {
      name: "Handia",
      position: [22.4916, 76.9936]
    },
    {
      name: "Mandleshwar",
      position: [22.1684, 80.6234]
    },
    {
      name: "Garudeshwar",
      position: [21.8847, 73.6544]
    }
  ];

  const mapBackgrounds = [
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png",
    "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
  ]

  const [state, setState] = useState('');
  const [basin, setBasin] = useState('');
  const [station, setStation] = useState('Mohgaon');
  const [plot, setPlot] = useState('');
  const [stationary, setStationary] = useState("Stationary");
  const [or, setOr] = useState("or")
  const [univariate, setUnivariate] = useState("Univariate");
  const [plotNum, setPlotNum] = useState(1);
  const [popup, setPopup] = useState(false)
  const [modeshape, setModeShape] = useState(null)
  const [stationShape, setStationShape] = useState(null)
  const [mode, setMode] = useState("State")
  const [mapurl, setMapurl] = useState(0)
  const [zoom, setZoom] = useState(5)
  const [show, setShow] = useState(false);


  const handleStationPointClick = (station) => {
    setStation(station.name)
    setPopup(true)
  }

  const handleStateChange = (event) => {
    const value = event.target.value;
    const text = event.target.options[event.target.selectedIndex].text;
    setState(text)
    const currentState = indianStates.filter((item) => item.name === text);
    setCenter([currentState[0].latitude, currentState[0].longitude])
    setZoom(6)
  };
  const handleBasinChange = (event) => {
    const value = event.target.value;
    var text = event.target.options[event.target.selectedIndex].text;
    text = basins.filter((item) => item.name === text)[0]
    if (text) {
      setBasin(text.name);
      setModeShape(text.geojson);
    }
  };
  const handleStationChange = (event) => {
    const value = event.target.value;
    var text = event.target.options[event.target.selectedIndex].text;
    text = NarmadaStations.filter((item) => item.name === text)[0]
    const point = points.filter((item) => item.name === text.name)[0]
    if (text) {
      setStation(text.name);
      setStationShape(text.geoJson);
      setCenter(point.position)
      setZoom(9)
    }
    const currentStation = NarmadaStations.filter((item) => item.name === text);
  };
  useEffect(() => {
    if (univariate === "Univariate") {
      setPlot(`/graph_xl_files/${station}_${univariate}_${stationary}_${plotNum}.xlsx`)
    }
    else {
      setPlot(`/graph_xl_files/${station}_${or}_${univariate}_${plotNum}.xlsx`)
    }
  }, [station, stationary, or, univariate, plotNum])

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div className='menuContainer' >

          {/* <div class="form-check"> */}
          <input onChange={(e) => setMode(e.target.value)} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="State" checked={mode === "State"} />
          <label style={{ margin: '2px 40px 2px 2px', fontSize: '18px' }} class="form-check-label" for="exampleRadios1">
            State
          </label>
          {/* </div> */}

          {/* <div class="form-check"> */}
          <input onChange={(e) => setMode(e.target.value)} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Basin" checked={mode === "Basin"} />
          <label style={{ margin: '2px 40px 2px 2px', fontSize: '18px' }} class="form-check-label" for="exampleRadios1">
            Basin
          </label>
          {/* </div> */}

          <br /><br />
          {
            mode === "State" ?
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">State</label>
                <select class="form-select" id="inputGroupSelect01" onChange={handleStateChange} >
                  <option selected>Choose...</option>
                  {
                    indianStates.map((unitState) =>
                      <option value={unitState.id}>{unitState.name}</option>
                    )
                  }
                </select>
              </div>
              : null
          }

          {
            mode === "Basin" ?
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">Basin</label>
                <select class="form-select" id="inputGroupSelect01" onChange={handleBasinChange}>
                  <option selected>Choose...</option>
                  <option value="1">Narmada</option>
                  <option value="2">Godavari</option>
                  {/* <option value="3">Krishna</option> */}
                </select>
              </div>
              : null
          }

          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Station</label>
            <select class="form-select" id="inputGroupSelect01" onChange={handleStationChange}>
              <option selected>Choose...</option>
              {
                NarmadaStations.map((unitStation) =>
                  <option>{unitStation.name}</option>
                )
              }
            </select>
          </div>

          <button onClick={() => setMapurl((mapurl + 1) % (mapBackgrounds.length))} style={{ marginRight: '20px' }} className='btn btn-warning'> <i class="fa-solid fa-map-location-dot"></i> Map {mapurl + 1}</button>
          <button onClick={() => setPopup(true)} className='btn btn-dark'> <i class="fa-solid fa-eye"></i> See Plots</button>

        </div>
        <MapContainer center={center} zoom={6} >
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            // url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            url={mapBackgrounds[mapurl]}
          />
          {/* <ShapefileLayer shapefileUrl={'./godavari_shapefile.zip'} /> */}
          <GeoJSON data={indisGeojson} style={{ color: 'green', weight: 2 }} />
          {modeshape && <GeoJSON key={basin} data={modeshape} style={{ color: 'purple', weight: 2 }} />}
          {/* {stationShape && <GeoJSON key={station} data={stationShape} style={{ color: 'green', weight: 2 }} />} */}
          <ZoomToLayer geojson={modeshape} />
          <ChangeCenter center={center} zoom={zoom} />
          <ZoomControlledDots coordinates={points} clickhandle={handleStationPointClick} />

          {/* {cities.map((city, idx) => (
            <Marker key={idx} position={[city.lat, city.lng]}>
              <Popup>{city.name}</Popup>
            </Marker>
          ))} */}
        </MapContainer>
        <div className='dataContainer' style={popup ? null : { display: 'none' }} >
          <i onClick={() => setPopup(false)} style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '30px', cursor: 'pointer' }} class="fa-solid fa-xmark"></i>
          <p style={{ fontSize: "26px", textAlign: "start", fontWeight: "bolder" }}>{station === 'Madleshwar' ? "Mandleshwar" : station}</p>
          <div style={{ position: 'absolute',top:200,right:60, display: 'inline-block' }}>
            <span
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              style={{ cursor: 'pointer', fontSize: '20px' }}
            >
              <i class="fa-solid fa-circle-info"></i>
            </span>

            {show && (
              <div style={{
                position: 'absolute',
                top: '120%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#333',
                color: '#fff',
                padding: '6px 10px',
                borderRadius: '4px',
                fontSize: '12px',
                whiteSpace: 'nowrap',
                zIndex: 100
              }}>
                RL : Return Level <br />
                RP : Return Period <br />
                CI : Confidence Interval <br />
              </div>
            )}
          </div>
          {
            station ?
              <>
                <ul class="nav nav-underline">
                  <li class="nav-item">
                    <a class={univariate === "Univariate" ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => { setUnivariate("Univariate"); setStationary("Stationary") }} href="#">Univariate</a>
                  </li>
                  <li class="nav-item">
                    <a class={univariate === "Bivariate" ? "nav-link active" : "nav-link"} onClick={() => { setUnivariate("Bivariate"); setOr("or") }} href="#">Bivariate</a>
                  </li>
                </ul>
                {univariate === "Univariate" ?
                  <ul class="nav nav-underline">
                    <li class="nav-item">
                      <a class={stationary === "Stationary" ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setStationary("Stationary")} href="#">Stationary</a>
                    </li>
                    <li class="nav-item">
                      <a class={stationary === "Non-Stationary" ? "nav-link active" : "nav-link"} onClick={() => setStationary("Non-Stationary")} href="#">Non Stationary</a>
                    </li>
                  </ul> : null}

                {univariate === "Bivariate" ?
                  <ul class="nav nav-underline">
                    <li class="nav-item">
                      <a class={or === "or" ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setOr("or")} href="#">Conditional Probability</a>
                    </li>
                    <li class="nav-item">
                      <a class={or === "and" ? "nav-link active" : "nav-link"} onClick={() => setOr("and")} href="#">Join Probability</a>
                    </li>
                  </ul> : null}

                {univariate === "Univariate" ?
                  <ul class="nav nav-underline">
                    <li class="nav-item">
                      <a class={plotNum === 1 ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setPlotNum(1)} href="#">RL(Discharge) Vs RP</a>
                    </li>
                    <li class="nav-item">
                      <a class={plotNum === 2 ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setPlotNum(2)} href="#">RL(Duration) Vs RP</a>
                    </li>
                    <li class="nav-item">
                      <a class={plotNum === 3 ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setPlotNum(3)} href="#">RL(Volume) Vs RP</a>
                    </li>
                  </ul> : null}

                {univariate === "Bivariate" ?
                  <ul class="nav nav-underline">
                    <li class="nav-item">
                      <a class={plotNum === 1 ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setPlotNum(1)} href="#">Duration vs Peak</a>
                    </li>
                    <li class="nav-item">
                      <a class={plotNum === 2 ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setPlotNum(2)} href="#">Volume vs Peak</a>
                    </li>
                    <li class="nav-item">
                      <a class={plotNum === 3 ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setPlotNum(3)} href="#">Volume vs Duration</a>
                    </li>
                  </ul> : null}

                {plot ?
                  <>
                    {/* {stationary}
                    {univariate}
                    {plotNum} */}

                    <ExcelChartFromFile fileUrl={plot} plot_no={plotNum} />

                    <p>{plot}</p>
                  </>
                  : null}
              </>
              : null
          }
        </div>



      </div>
      <Footer />
    </>
  )
}
