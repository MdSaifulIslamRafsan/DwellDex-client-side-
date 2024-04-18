
import L from 'leaflet';
import image from "../assets/istockphoto-1182235539-1024x1024-removebg-preview__1_-removebg-preview.png"
const iconPerson = new L.Icon({
    iconUrl: image,
    iconRetinaUrl: image,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 45),
    className: 'leaflet-div-icon'
});

export { iconPerson };