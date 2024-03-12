import countryCodes from "country-codes-list";

export default function Form() {
    return (
        <section className="general">
                <h3>Delivery Information</h3>
                <form action="#">
                    <div>
                        <div>
                                <InputLine label="First Name" _id="first_name"/>
                                <InputLine label="Email" type="email" _id="email" />
                                <InputLine label="House Number/Name" _id="house-num" />
                                <InputLine label="Address 2" _id="address2" />
                                <InputLine label="Post Code" _id="post-code" />
                        </div>
                        <div>
                                <InputLine label="Last Name" _id="last_name" />
                                <InputLine label="Number" type="tel" _id="number" />
                                <InputLine label="Street" _id="street" />
                                <InputLine label="City" _id="city" />
                                <InputLine label="Country" _id="country" />
                        </div>
                    </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

function InputLine({label, type, _id}) {
    return (
        <div className="general-info-wrapper">
            <label htmlFor={_id}>{label}</label>
            {_id == "number" ? (
                <div className="number-wrapper">
                    <CodeSelect />
                    <input type={type} id={_id} />
                </div>
            ) : (
                    <input type={type} id={_id} />
            )}
        </div>
    );
}

function CodeSelect() {
    const countryCodesArray = Object.entries(countryCodes.customList("countryCode", "+{countryCallingCode}"));
    return (
        <select name="countryCode" id="countryCode" defaultValue="GB">
            {countryCodesArray.map(([code, label]) => (
                <option key={code} value={code}>
                    {label}
                </option>
            ))}
        </select>
    )
}