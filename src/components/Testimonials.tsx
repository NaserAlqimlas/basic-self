interface testimonialsProps {
    id: string;
}

const Testimonials = (props: testimonialsProps) => {
    const { id } = props;
    return <div id={id}>I am here</div>;
};

export default Testimonials;
