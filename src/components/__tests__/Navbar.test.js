import { render,screen,fireEvent } from "@testing-library/react"
import NavBar from "../NavBar"
import { BrowserRouter as Router } from "react-router-dom"
import { CurrentUserProvider } from "../../contexts/CurrentUserContext"

test('render Navbar',()=>{
    render (<Router>
        <NavBar/>
    </Router>)

    // screen.debug();
    const signInLink = screen.getByRole('link',{name:'Sign In'})
    expect(signInLink).toBeInTheDocument();

})


test('render Link to the user profile for a logged in user', async ()=>{
    render (<Router><CurrentUserProvider>
        <NavBar/></CurrentUserProvider>
    </Router>)

    const profileAvatar = await screen.findByText("Profile")
    expect(profileAvatar).toBeInTheDocument();



})


test('render sign in and sign up again on logout', async ()=>{
    render (<Router><CurrentUserProvider>
        <NavBar/></CurrentUserProvider>
    </Router>)

    const signOutLink = await screen.findByRole('link', {name: 'Sign out'})
    fireEvent.click(signOutLink)

    const signInLink = await screen.findByRole('link', {name: 'Sign In'})
    const signUpLink = await screen.findByRole('link', {name: 'Sign Up'})


    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument()




})