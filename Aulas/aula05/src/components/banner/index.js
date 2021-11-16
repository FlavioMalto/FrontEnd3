const Banner = ({children}) => {
    return (
        <section className="banner">
            <h2>{children}</h2>
            <button>{children}</button>
        </section>
    )
}

export default Banner;