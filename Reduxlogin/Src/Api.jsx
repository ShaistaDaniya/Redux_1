import { useDispatch } from 'react-redux';
import { fetchDataMethod } from './Action';

export const useApi = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      console.log('data ' + JSON.stringify(data));
      dispatch(fetchDataMethod(data));
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return {
    fetchData,
  };
};
