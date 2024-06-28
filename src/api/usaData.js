import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://datausa.io/api/',
  });

export const getUSAData = () => {
    return instance.get('data?drilldowns=Nation&measures=Population').then(
      (res) => {
        return res;
      },
      (error) => {
        console.log(error, "Error !!!");
      },
    );
  };