import './Banner.css'

export const Banner = () => {
    //  JSX -> This is how React read the elements writen above and tranform
    //into DOM elements. This is not HTML is JSX.
    return (
        <header className="banner">
            <img src="imagens/banner.png" alt="O banner principal da pagina do Organo"/>
        </header>
    )
}