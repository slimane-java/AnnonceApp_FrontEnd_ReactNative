
import axios from 'axios';

export class AthentificationService {

    login(data)
    {
        return axios.post("http://192.168.100.47:8000/api/login",data)
    }

    
    User(token)
    {
        return axios.get("http://192.168.100.47:8000/api/user",{
            headers: { 
                'Accept': 'application/json', 
                'Authorization': 'Bearer '+ token
              }
        })
    }
     

}
export default new AthentificationService()