export const isAuthenticated = () => {
    const chave = sessionStorage.getItem('passetoken')
    if(chave===null){
        return false
    }
    else{
        return true
    }
};
