import React, { useEffect, useState } from 'react'
import './styles.css'
import { MapContainer, GeoJSON, Marker, Popup, TileLayer, useMap, CircleMarker, Tooltip } from 'react-leaflet'
import { indianStates } from '../assets/data/states.js'
import { Stations } from '../assets/data/stations.js'
import Footer from './Footer.jsx'
import { ZoomToLayer } from './ShapefileLayer.jsx'
import { basins } from '../assets/data/basins.js'
import ExcelChartFromFile from './Excel.jsx'
import { indisGeojson } from '../assets/ShapeGeoJSON data/india_st.js'
import { Navigate } from 'react-router-dom'
import ContourPlot from './ContourPlot.jsx'



function ChangeCenter({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom); // Set both center and zoom level
  return null;
}

function ZoomControlledDots({ coordinates = [], clickhandle }) {
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
    const clickedStation = Stations.filter((item) => item.name === point.name)[0]
    // setStation(clickedStation.name)
    // setPopup(true)
    clickhandle(clickedStation)
    // alert(`You clicked on: ${point.name}`);
    // You can also perform navigation, data loading, etc. here.
  };

  return (
    <>
      {visible &&
        coordinates?.map((item, index) => (
          <CircleMarker
            style={{ zIndex: 999 }}
            key={index}
            center={item.position}
            radius={10}
            pane="markerPane"
            pathOptions={{ color: '#ff5722', fillColor: '#ff5722', fillOpacity: 0.8 }}
            eventHandlers={{
              click: () => handleClick({ name: item.name, position: item.position })
            }}
          >
            <Tooltip direction="top" offset={[0, -5]} opacity={1} sticky>
              {item.name}
            </Tooltip>
          </CircleMarker>
        ))}
    </>
  );
}

export default function MapComponent() {

  const [center, setCenter] = useState([20.5937, 78.9629])


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
  const [availableStations, setavailableStations] = useState(null)


  const handleStationPointClick = (station) => {
    setStation(station.name)
    setPopup(true)
  }

  const handleStateChange = (event) => {
    const value = event.target.value;
    const text = event.target.options[event.target.selectedIndex].text;
    var dropdownStations = Stations.filter((item) => item.state === text)
    if (text) {
      setState(text)
      setavailableStations(dropdownStations)
      const currentState = indianStates.filter((item) => item.name === text);
      setCenter([currentState[0].latitude, currentState[0].longitude])
      setZoom(6)
    }
  };
  const handleBasinChange = (event) => {
    const value = event.target.value;
    var text = event.target.options[event.target.selectedIndex].text;
    text = basins.filter((item) => item.name === text)[0]
    var dropdownStations = Stations.filter((item) => item.basin === text.name)
    if (text) {
      setBasin(text.name);
      setModeShape(text.geojson);
      setavailableStations(dropdownStations);
    }
  };
  const handleStationChange = (event) => {
    const value = event.target.value;
    var text = event.target.options[event.target.selectedIndex].text;
    text = Stations.filter((item) => item.name === text)[0]
    if (text) {
      setStation(text.name);
      // setStationShape(text.geoJson);
      setCenter(text.position)
      setZoom(9)
    }
  };
  useEffect(() => {
    if (univariate === "Univariate") {
      setPlot(`${process.env.PUBLIC_URL}/graph_xl_files/${station}_${univariate}_${stationary}_${plotNum}.xlsx`)
    }
    else {
      setPlot(`${process.env.PUBLIC_URL}/graph_xl_files/${station}_${or}_${univariate}_${plotNum}.xlsx`)
    }
  }, [station, stationary, or, univariate, plotNum])

  const isAuthenticated = localStorage.getItem("auth");
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div className='menuContainer' >

          {/* <div class="form-check"> */}
          <input onChange={(e) => setMode(e.target.value)} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="State" checked={mode === "State"} />
          <label style={{ margin: '2px 40px 2px 2px', fontSize: '18px', color: '#F8F4E1' }} class="form-check-label" for="exampleRadios1">
            State
          </label>
          {/* </div> */}

          {/* <div class="form-check"> */}
          <input onChange={(e) => setMode(e.target.value)} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Basin" checked={mode === "Basin"} />
          <label style={{ margin: '2px 40px 2px 2px', fontSize: '18px', color: '#F8F4E1' }} class="form-check-label" for="exampleRadios1">
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
                  {
                    basins.map((unitBasin) =>
                      <option>{unitBasin.name}</option>
                    )
                  }
                  {/* <option value="3">Krishna</option> */}
                </select>
              </div>
              : null
          }

          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Station</label>
            <select class="form-select" id="inputGroupSelect01" onChange={handleStationChange}>
              <option selected>Choose...</option>
              {availableStations ?
                availableStations.map((unitStation) =>
                  <option>{unitStation.name}</option>
                )
                : null
              }
            </select>
          </div>

          <button onClick={() => setMapurl((mapurl + 1) % (mapBackgrounds.length))} style={{ marginRight: '20px' }} className='btn btn-warning'> <i class="fa-solid fa-map-location-dot"></i> Map {mapurl + 1}</button>
          <button onClick={() => setPopup(true)} className='btn btn-dark'> <i class="fa-solid fa-eye"></i> See Plots</button>

        </div>
        <MapContainer center={center} zoom={6} >
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url={mapBackgrounds[mapurl]}
          />
          <GeoJSON data={indisGeojson} style={{ color: 'green', weight: 2 }} />
          {modeshape && mode === "Basin" && <GeoJSON key={basin} data={modeshape} style={{ color: 'purple', weight: 2 }} />}
          {/* {stationShape && <GeoJSON key={station} data={stationShape} style={{ color: 'green', weight: 2 }} />} */}
          <ZoomToLayer geojson={modeshape} />
          <ChangeCenter center={center} zoom={zoom} />
          <ZoomControlledDots coordinates={availableStations} clickhandle={handleStationPointClick} />

        </MapContainer>
        <div className='dataContainer' style={popup ? null : { display: 'none' }} >
          <i onClick={() => setPopup(false)} style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '30px', cursor: 'pointer' }} class="fa-solid fa-xmark"></i>
          <p style={{ fontSize: "26px", textAlign: "start", fontWeight: "bolder" }}>{station}</p>
          <div style={{ position: 'absolute', top: 200, right: 60, display: 'inline-block' }}>
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
                transform: 'translateX(-80%)',
                backgroundColor: '#333',
                color: '#fff',
                padding: '6px 10px',
                borderRadius: '4px',
                fontSize: '12px',
                whiteSpace: 'nowrap',
                zIndex: 100
              }}>
                <b style={{color:'yellow',fontWeight:'500'}}>Univariate Graphs : </b> <br/>
                RL : Return Level <br />
                RP : Return Period <br />
                CI : Confidence Interval <br />
                <b style={{color:'yellow',fontWeight:'500'}}>Bivariavte Graphs : </b> <br/>
                red line : Non-Stationary<br/>
                black line : Stationary <br/>
              </div>
            )}
          </div>
          {
            station ?
              <>
                <ul class="nav nav-underline">
                  <li class="nav-item">
                    <a style={{ cursor: 'pointer' }} class={univariate === "Univariate" ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => { setUnivariate("Univariate"); setStationary("Stationary") }} >Univariate</a>
                  </li>
                  <li class="nav-item">
                    <a style={{ cursor: 'pointer' }} class={univariate === "Bivariate" ? "nav-link active" : "nav-link"} onClick={() => { setUnivariate("Bivariate"); setOr("or") }} >Bivariate</a>
                  </li>
                </ul>
                {univariate === "Univariate" ?
                  <ul class="nav nav-underline">
                    <li class="nav-item">
                      <a style={{ cursor: 'pointer' }} class={stationary === "Stationary" ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setStationary("Stationary")} >Stationary</a>
                    </li>
                    <li class="nav-item">
                      <a style={{ cursor: 'pointer' }} class={stationary === "Non-Stationary" ? "nav-link active" : "nav-link"} onClick={() => setStationary("Non-Stationary")} >Non Stationary</a>
                    </li>
                  </ul> : null}

                {univariate === "Bivariate" ?
                  <ul class="nav nav-underline">
                    <li class="nav-item">
                      <a style={{ cursor: 'pointer' }} class={or === "or" ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setOr("or")} >Conditional Probability</a>
                    </li>
                    <li class="nav-item">
                      <a style={{ cursor: 'pointer' }} class={or === "and" ? "nav-link active" : "nav-link"} onClick={() => setOr("and")} >Joint Probability</a>
                    </li>
                  </ul> : null}

                {univariate === "Univariate" ?
                  <ul class="nav nav-underline">
                    <li class="nav-item">
                      <a style={{ cursor: 'pointer' }} class={plotNum === 1 ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setPlotNum(1)} >RL(Discharge) Vs RP</a>
                    </li>
                    <li class="nav-item">
                      <a style={{ cursor: 'pointer' }} class={plotNum === 2 ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setPlotNum(2)} >RL(Duration) Vs RP</a>
                    </li>
                    <li class="nav-item">
                      <a style={{ cursor: 'pointer' }} class={plotNum === 3 ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setPlotNum(3)} >RL(Volume) Vs RP</a>
                    </li>
                  </ul> : null}

                {univariate === "Bivariate" ?
                  <ul class="nav nav-underline">
                    <li class="nav-item">
                      <a style={{ cursor: 'pointer' }} class={plotNum === 1 ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setPlotNum(1)} >Duration vs Peak</a>
                    </li>
                    <li class="nav-item">
                      <a style={{ cursor: 'pointer' }} class={plotNum === 2 ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setPlotNum(2)} >Volume vs Peak</a>
                    </li>
                    <li class="nav-item">
                      <a style={{ cursor: 'pointer' }} class={plotNum === 3 ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setPlotNum(3)} >Volume vs Duration</a>
                    </li>
                  </ul> : null}

                {plot ?
                  <>
                    {/* {stationary}
                    {univariate}
                    {plotNum} */}
                    {
                      univariate === "Univariate" ?

                        <ExcelChartFromFile fileUrl={plot} plot_no={plotNum} />
                        :
                        <ContourPlot 
                        filePath={`${process.env.PUBLIC_URL}/bivariate data/${station}_Surf.xlsx`} 
                        ScatterPath={`${process.env.PUBLIC_URL}/bivariate data/${station}_Scatter.xlsx`} 
                        plot_no={plotNum}
                        orand={or==="or"?0:1}
                        
                        />
                    }


                    {/* <p>{plot}</p> */}
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
