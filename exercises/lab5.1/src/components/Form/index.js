/* Imports */
import { useState, useEffect } from "react";
import { GIPHY_API_URL, GIPHY_API_KEY } from "../Data";

/* Form component */
const Form = () => {
    /* States */
    const [phrase, setPhrase] = useState('');
    const [weirdness, setWeirdness] = useState(0);
    const [gifTitle, setGifTitle] = useState('');
    const [gifData, setGifData] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handlePhraseInputChange = (e) => setPhrase(e.target.value);

    const handleWeirdnessSelectChange = (e) => setWeirdness(e.target.value);

    const fetchGiphyData = async () => {
        const version = 'v1';
        const type = 'gifs';
        const endpoint = `${version}/${type}/translate`;
        const phraseQueryParam = `s=${encodeURIComponent(phrase)}`; // Handle spaces in the phrase
        try {
            const response = await fetch(`https://${GIPHY_API_URL}/${endpoint}?api_key=${GIPHY_API_KEY}&${phraseQueryParam}&weirdness=${weirdness}`);
            console.log("response", response);
            if (response.ok) {
                const data = await response.json();
                console.log("data", data.data);
                setGifTitle(data.data.title);
                setGifData(data.data.embed_url);
                setError(false); // Reset error state on success
            } else {
                setError(true);
                setErrorMessage('An error occurred while fetching film details. Please try again later.');
            }
        } catch (error) {
            setError(true);
            setErrorMessage('An error occurred while fetching film details. Please try again later.');
        }
    }

    const handleTranslateClick = (e) => {
        e.preventDefault();
        fetchGiphyData();
    }

    useEffect(() => {
        // When weirdness changes, refetch the GIPHY API data
        fetchGiphyData();
    }, [weirdness]);

    return (
        <>
            <form>
                <input type="text" value={phrase} onChange={handlePhraseInputChange} />
                <button onClick={handleTranslateClick}>Translate</button>
                <div className="weirdness">
                    <select onChange={handleWeirdnessSelectChange} value={weirdness}>
                        {[...Array(11)].map((_, i) => i)
                    .map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                </div>
            </form>

            {error ? (
                <p className="error-message">{errorMessage}</p>
            ) : (
                <>
                    <iframe src={gifData} width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                    <p>{gifTitle}</p>
                </>
            )}
        </>
    )
}

export default Form;
