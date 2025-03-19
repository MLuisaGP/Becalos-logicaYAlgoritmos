const fetchUseData = ()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({id:1,nombre:'Alice'});//Obj que simula datos de usuario
        },2000)
    })
}
const getUser = async ()=>{
    const userData = await fetchUseData();
    console.log(userData);
    

}
getUser();