import React, { useState } from "react";
import { addBeamSplice } from "../services/api";

const BeamSpliceForm = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        beam_length: "",
        flange_thickness: "",
        web_thickness: "",
        bolt_diameter: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSplice = await addBeamSplice(formData);
        if (newSplice) {
            onAdd(newSplice);
            setFormData({ beam_length: "", flange_thickness: "", web_thickness: "", bolt_diameter: "" });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" name="beam_length" placeholder="Beam Length" value={formData.beam_length} onChange={handleChange} required />
            <input type="number" name="flange_thickness" placeholder="Flange Thickness" value={formData.flange_thickness} onChange={handleChange} required />
            <input type="number" name="web_thickness" placeholder="Web Thickness" value={formData.web_thickness} onChange={handleChange} required />
            <input type="number" name="bolt_diameter" placeholder="Bolt Diameter" value={formData.bolt_diameter} onChange={handleChange} required />
            <button type="submit">Add Splice</button>
        </form>
    );
};

export default BeamSpliceForm;
