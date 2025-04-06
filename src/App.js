import React, { useState } from "react";
import BeamSpliceForm from "./components/BeamSpliceForm";
import BeamSpliceList from "./components/BeamSpliceList";

function App() {
    const [splices, setSplices] = useState([]);

    const handleAddSplice = (newSplice) => {
        setSplices([...splices, newSplice]);
    };

    return (
        <div>
            <h1>Osdag Beam Splice Manager</h1>
            <BeamSpliceForm onAdd={handleAddSplice} />
            <BeamSpliceList />
        </div>
    );
}

export default App;
