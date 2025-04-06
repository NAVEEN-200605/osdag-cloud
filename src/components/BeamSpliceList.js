import React, { useEffect, useState } from "react";
import { fetchBeamSplices } from "../services/api";

const BeamSpliceList = () => {
    const [splices, setSplices] = useState([]);

    useEffect(() => {
        const loadSplices = async () => {
            const data = await fetchBeamSplices();
            setSplices(data);
        };
        loadSplices();
    }, []);

    return (
        <div>
            <h2>Beam Splice List</h2>
            <ul>
                {splices.map((splice) => (
                    <li key={splice.id}>
                        Beam Length: {splice.beam_length}, Flange Thickness: {splice.flange_thickness}, Web Thickness: {splice.web_thickness}, Bolt Diameter: {splice.bolt_diameter}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BeamSpliceList;
