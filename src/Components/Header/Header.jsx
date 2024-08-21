import { Logo } from '../Logo/Logo'
import { Navigation } from '../Navigation/Navigation'
import css from './Header.module.css'

css

export const Header = () => {
    return (<div>
        <Logo/>
        <Navigation />
    </div>)
}