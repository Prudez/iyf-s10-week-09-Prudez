import useForm from './hooks/useForm'

function ContactForm() {

    const validate = (values) => {
        const errors = {}

        if (!values.email.includes('@')) {
            errors.email = 'Invalid email'
        }

        return errors
    }

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        reset
    } = useForm({ name: '', email: '' }, validate)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Contact Form</h2>

            <input
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            <input
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            {touched.email && errors.email && (
                <p style={{ color: 'red' }}>{errors.email}</p>
            )}

            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm