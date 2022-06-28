// import GoogleMapReact from "google-map-react";
import { HTMLAttributes, useState } from "react";
// import { IconMarker } from "../../assets";

// interface PropsMarker extends HTMLAttributes<HTMLDivElement> {
//     lat: number;
//     lng: number;
// }

interface PropsMap extends HTMLAttributes<HTMLDivElement> {
    onCahngeMap: (lat: number, lng: number) => void;
    center: { lat: number; lng: number };
    draggable: boolean;
}

// const AnyReactComponent = (Props: PropsMarker) => (
//     <div>
//         <img src={`${IconMarker}`} alt="marker" />
//     </div>
// );
export function MapComponent(Props: PropsMap) {
    //     const defaultProps = {
    //         center: {
    //             lat: Props.center.lat,
    //             lng: Props.center.lng,
    //         },
    //         zoom: 17,
    //     };
    //     const [centerLat, setcenterLat] = useState(Props.center.lat);
    //     const [centerLang, setcenterLang] = useState(Props.center.lng);
    //     const markerClicked = (marker: any) => {
    //         setcenterLat(marker.center.lat());
    //         setcenterLang(marker.center.lng());
    //         Props.onCahngeMap(marker.center.lat(), marker.center.lng());
    //  };
    return (
        <></>
//         <div className="map">
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: "AIzaSyCO4K7mWjOdBqd4XaOvKf6G5p15AnB_1qs" }}
//                 defaultCenter={defaultProps.center}
//                 defaultZoom={defaultProps.zoom}
//                 onDrag={(e: any) => {
//                     markerClicked(e);
//                 }}
//                 draggable={Props.draggable}

//             >
//                 <AnyReactComponent lat={centerLat} lng={centerLang} />
//             </GoogleMapReact>
//         </div>
     );
}

export default MapComponent;
