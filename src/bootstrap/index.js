/*
A pasta bootstrap será o STARTER, sobe as primeiras configurações
*/


import axios from 'axios';

/* 
importar base da url
*/
import { URI_BASE_API } from '../configs/api';


axios.defaults.baseURL = URI_BASE_API

