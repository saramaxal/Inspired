import { Category } from "./Category/Category.jsx"
import { Gender } from "./Gender/Gender.jsx"

export const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <Gender />
                <Category />
            </div>
        </nav>
    )
}