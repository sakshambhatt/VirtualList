import axios from 'axios';
import {apiEndpoint} from '../configs/env';

export default async function getMeeshoProducts() {
  const {data} = await axios.get(`${apiEndpoint}/get-section-wise-products`);
  return data;
}
