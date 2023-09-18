import React, {useState} from 'react';

const ReservationForm = () => {
    const [formData, setFormData] = useState({})

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async () => {
        try {
            const response = await fetch('http', {
                method: "POST",
                body: JSON.stringify(formData)
            })
            return await response
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="col-6">
            <form
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-4"
            >
                <input
                    type="text"
                    name="firstName"
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="lastName"
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="age"
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReservationForm;