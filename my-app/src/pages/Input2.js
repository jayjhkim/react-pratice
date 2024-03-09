import React, {useState} from "react";
import StarRating from './StarRating';

const Input2 = () => {
    const [name, setName] = useState('');
    const [rev, setRev] = useState('');
    const [rating, setRating] = useState(0);
    const [showModal, setShowModal] = useState(false);
  
    const onChange = (e) => {
      const { id, value } = e.target;
      if (id === 'name') {
        setName(value);
      } else if (id === 'rev') {
        setRev(value);
      }
    };

    const handleRatingChange = (selectedStars) => {
        setRating(selectedStars);
      };
    
      const saveReview = () => {
        console.log('Saving review:', { name, rev, rating });
        setShowModal(true);
      };
    
    return(
        <div>
            <div>
                <label>식당이름</label>
                <input type="text" id="name" value={name} onChange={onChange} />
            </div>
            <div>
                <label>한줄평가</label>
                <input type="text" id="rev" value={rev} onChange={onChange}/>
            </div>
            <div>
                <label>평점</label>
                < StarRating totalStars={5} handleRatingChange={handleRatingChange} />
             </div>
             
             <button onClick={saveReview}>저장</button>

             {showModal && (
             <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                     <p>소중한 후기 감사합니다!</p>
                 </div>
            </div>
        )} 
        </div>
    );
};

export default Input2;
