import axios from 'axios';
import {apiEndpoint} from '../configs/env';

export default async function get495Products() {
  const {data} = await axios.get(`${apiEndpoint}/495-products`);
  return data;
}
