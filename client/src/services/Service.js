import axios from 'axios';

const url = 'http://localhost:9000/keepers/';

class Service {
  static getAnimal() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(data)
      } catch(err) {
        reject(err);
      }
    });
  }

  static addAnimal(name) {
    return axios.post(url, {
      name
    });
  }

  static deleteAnimal(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default Service;