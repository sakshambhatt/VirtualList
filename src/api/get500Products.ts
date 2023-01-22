import axios from 'axios';
import {apiEndpoint} from '../configs/env';

export default async function get500Products() {
  const {data} = await axios.get(`${apiEndpoint}/500-products`);
  return data;
}
