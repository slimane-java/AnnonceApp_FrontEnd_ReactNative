import axios from 'axios';

export class EntrepriseService{

    Upload(data)

    {
        return axios.post("http://192.168.100.36:8000/api/upload",data)
    }

    User(token)
    {
        return axios.get("http://192.168.100.47:8000/api/user",{
            headers:{
            Accept: "application/json",
            Authorization:'Bearer '+token}
        })
    }

    register(data,token)
    {
        return axios.post("http://192.168.100.47:8000/api/addEntreprise",data,{
            headers:{
                Accept: "application/json",
                'Authorization': 'Bearer '+ token,
                'content-type': 'multipart/form-data'
                
            }

        }
        )
    }

}
export default new EntrepriseService()