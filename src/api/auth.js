export const setAuthToken = (user) =>{
    const currentUser = {
        email: user.email
    }
     //get jwt token
     fetch('https://genius-car-server-osfmg2fdu-kazee-siams-projects.vercel.app/jwt',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        //localstorage is the easiest but  not the best place 
        localStorage.setItem('genius-token',data.token)
    })

}