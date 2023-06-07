import arrow from '../../assets/images/icons/arrow_back-24px.svg';
import './WarehouseDetails.scss';

function WarehouseDetails(){
    return(
        <div className='details'>
            <div>
                <img src={arrow}></img>
                <h1>Washington</h1>
                <button className='details__button'></button>
            </div>
            <div>
                <div>
                   <p>address</p>
                   <p>subtitle</p>
                </div>
                <div>
                    <div>
                        <p>contact</p>
                        <p>name</p>
                        <p>position</p>
                    </div>
                    <div>
                        <p>contact info</p>
                        <p>number</p>
                        <p>email</p>
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default WarehouseDetails;