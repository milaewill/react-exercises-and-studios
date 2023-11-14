export default function HobbyLinks() {
    let pageTitle = "Yarn Stores"
    let hobbyLinks = ["https://www.michaels.com", "https://www.joann.com"];

    return (
        <div>

            <h3>{pageTitle}</h3>
            <a href={hobbyLinks[0]}>JoAnn's</a>
            <a href={hobbyLinks[1]}>Michael's</a>


        </div>
    );
};



