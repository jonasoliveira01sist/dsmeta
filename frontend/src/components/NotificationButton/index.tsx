import axios from 'axios';
import iconbutton from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

    type props = {
       saleId:number;   
    }

function handClic(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`).then(response => {
        console.log("sucesso");
    })
}


function NotificationButton({saleId} : props) {

    return (
        <div className="dsmeta-red-btn" onClick={() => handClic(saleId)}>
            <img src={iconbutton} alt="Notificar" />
        </div>

    )
}

export default NotificationButton;
