import GiftAllBooks from "../PagePresent/GiftAllBooks"
import GiftContent from "../PagePresent/GiftContent"

function PagePresent() {
    return (
        <div className="present-content">
            <GiftContent />
            <GiftAllBooks />
        </div>
    )
}

export default PagePresent