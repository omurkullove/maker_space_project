import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { handlePush } from '../../utils/handlePush';

const Main: FC = () => {
   const navigate = useNavigate();

   return (
      <>
         <p>Main</p>
         <button onClick={() => handlePush('/about-us', navigate)}>About us</button>
      </>
   );
};

export default Main;
