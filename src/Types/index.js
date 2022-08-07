import React, { useState, useEffect } from "react";
import axios from "axios";

export function Types() {


    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState("");

    const fetchTypes = () => {
        const typeLink = "http://localhost:8080/api/v1/type";
        axios
            .get(typeLink)
            .then(res => {
                setTypes(res.data.content);
            })
            .catch(err => {
                console.log(err);
                setTypes([
                    {
                        "name": "INCOME"
                    },
                    {
                        "name": "OUTCOME"
                    }
                ]);
            });
    }

    useEffect(() => {
        fetchTypes();
    }, [])

    return (
        <select value={selectedType} onChange={changed => { setSelectedType(changed.target.value) }} >
            <option value="">All</option>
            {types.map((type, index) => {
                return (
                    <option key={index}>{type.name}</option>
                )
            })
            }
        </select>
    )
}