

export const UserViewModel = (title:string) => {
    

    const checkUser = async (email: string, password:string) => {
        try{
            const response = await checkUser(email,password);
            console.log(response);
        } catch (error) {
            console.error("Error mostrando los eventos: ", error)
        }
    }

    return{
        checkUser
    }
}