const CheckBoxFilter = () => {
    const checkboxes = [
        {
            id: "customCheck1",
            label: "Control Crucero (6,676)",
        },
        {
            id: "customCheck2",
            label: "Asiento Calefactables (9,784)",
        },
        {
            id: "customCheck3",
            label: "Encendido Con Boton (9,784)",
        },
        {
            id: "customCheck4",
            label: "Apple Car Play / Android Auto (9,784)",
        },
        {
            id: "customCheck5",
            label: "Encendido Remoto (9,784)",
        },
    ];

    return (
        <div className="advance_search_style">
            <div className="ui_kit_checkbox text-start me-3">
                {checkboxes.slice(0, 3).map((checkbox) => (
                    <div className="df mb20" key={checkbox.id}>
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id={checkbox.id}
                        />
                        <label
                            className="custom-control-label"
                            htmlFor={checkbox.id}
                        >
                            {checkbox.label}
                        </label>
                    </div>
                ))}
            </div>
            {/* End .ui_kit_checkbox */}

            <div className="ui_kit_checkbox text-start">
                {checkboxes.slice(3).map((checkbox) => (
                    <div className="df mb20" key={checkbox.id}>
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id={checkbox.id}
                        />
                        <label
                            className="custom-control-label"
                            htmlFor={checkbox.id}
                        >
                            {checkbox.label}
                        </label>
                    </div>
                ))}
            </div>
            {/* End .ui_kit_checkbox */}
        </div>
    );
};

export default CheckBoxFilter;
