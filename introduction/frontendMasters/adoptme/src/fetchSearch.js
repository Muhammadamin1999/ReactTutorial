async function fetchSearch({queryKey}){
    const {animal, location, breed} = queryKey[1];

    const res = await fetch(
        `https://pets-v2.dev-apis.com/`
    );

    if(!res.ok){
        throw new Error(`pet search is not ok ${animal}`)
    }
    return res.json();
}

export default fetchSearch;