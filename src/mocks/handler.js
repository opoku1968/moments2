
const baseURL = "https://backend-moments-053582d75bda.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`,(req,res,ctx)=>{
        return res(ctx.json({
            pk: 2,
            username: "brian",
            email:"",
            first_name: "",
            last_name:"",
            profile_id:2,
            profile_image:"https://res/cloudinary.com/dgjrrvdbl/image/upload/v1"
        } ))
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
      }),
]

