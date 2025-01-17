import Categories from "../components/categories"
import Hero from "../components/Hero"
import Today from "../components/today"

export default function Home() {
    return (
        <div className="homeContainer">
            <Hero />
            <Today />
            <Categories />
        </div>
    )
}