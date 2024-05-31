import React, { useState } from 'react';
import "./MyComponent.css";

const ModelBranches = () => {
    const [showModel, setShowModel] = useState(false);
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [modelPosition, setModelPosition] = useState({ top: 0, left: 0 });

    const handleBranchClick = (branch, event) => {
        setSelectedBranch(branch);
        const rect = event.target.getBoundingClientRect();
        setModelPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
        setShowModel(true);
    };

    return (
        <div className="model-container">
            <div className='branches'>
                <p onClick={(event) => handleBranchClick('Филиал 1', event)}>Филиал 1</p>
                <p onClick={(event) => handleBranchClick('Филиал 2', event)}>Филиал 2</p>
                <p onClick={(event) => handleBranchClick('Филиал 3', event)}>Филиал 3</p>
                <p onClick={(event) => handleBranchClick('Филиал 4', event)}>Филиал 4</p>
            </div>

            {showModel && (
                <div className="model-options" style={{ top: `${modelPosition.top}px`, left: `${modelPosition.left}px` }}>
                    <p>Книги в {selectedBranch}:</p>
                    <p>Книга 1 (2 шт)</p>
                    <p>Книга 2 (5 шт)</p>
                    <p>Книга 3 (1 шт)</p>
                </div>
            )}
        </div>
    );
};

export default ModelBranches;
