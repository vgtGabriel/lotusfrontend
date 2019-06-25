import React from "react";
import MapStyle from '../components/Map/MapStyle'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  // InfoWindow
} from "react-google-maps";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
   
} from "reactstrap";

const MapWrapper = withScriptjs(

  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: -7.2288819, lng:-39.3276822 }}
      defaultOptions={{
        scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        styles:MapStyle 
      }}
    >
      {props.maptest.map((park)=>(
        <Marker key={park.id} position={{lat:park.coordinates[0],lng:park.coordinates[1]}}/>
      ))}
    </GoogleMap>
  ))
);

class Map extends React.Component {
constructor(props){
  super(props)

  this.state ={
    maptest :[
      {
        id:"123",
        coordinates:[-7.2288819, -39.3276822]
      },
      {
        id:"124",
        coordinates:[-7.2288819, -39.3276826]
      },
      {
        id:"125",
        coordinates:[-7.2288820, -39.3276822]
      }
    ]
  }
}
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>Google Maps</CardHeader>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    <MapWrapper
                      // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_6riTzFoNuW4f2-PDrVG15MxOb8GNVaI&libraries=places&callback=initialize"
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXJ-ZZenPq8V2gotfJd0BKRVhVBHSV16w&libraries=places&callback=initialize"
                     
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `100%` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                      maptest = {this.state.maptest}
                    />
                  </div>
                </CardBody>
                <Row>

                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Map;
