import { useEffect, useState } from "react";

function Details(props) {
    const Object = props.Object;
    const [elements, setElements] = useState([]);

    const buildDetails = () => {
        let allElements = [];
        for (let index = 0; index < Object.length; index++) {
            allElements.push(Object[index]);
        }

        setElements(allElements);
    }

    useEffect(() => {
        buildDetails();
    }, []);

    return (
        elements.map((item) => <p>{item}</p>)
    );
}

export default Details