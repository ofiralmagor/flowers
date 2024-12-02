<<<<<<< HEAD
import './Modal.css';

export default function Modal({ onClose, name, description, time }) {
    return (
        <div className="modal-overlay">
        <div className="modal-container">
          <h1>{name}</h1>
          <p className='flower-item-description'>{description}</p> 
          <h4 className='flower-item-h4'>:עונת הפריחה</h4>
          <p className='flower-item-time'>{time}</p>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
      );
=======
import './Modal.css';

export default function Modal({ onClose, name, description, time }) {
    return (
        <div className="modal-overlay">
        <div className="modal-container">
          <h1>{name}</h1>
          <p className='flower-item-description'>{description}</p> 
          <h4 className='flower-item-h4'>:עונת הפריחה</h4>
          <p className='flower-item-time'>{time}</p>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
      );
>>>>>>> de6cefdb017e4e01fc7456ccfc63753c0091d9f6
}