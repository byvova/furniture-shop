import { Header } from "../Components/Header/Header"
import css from '../../src/css/Home.module.css'


export const Home = () => {
    return (
        <div className={css.container}>
            <Header></Header>
        </div>
    )
}