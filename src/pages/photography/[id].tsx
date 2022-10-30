import Directory from "./directory";

export const getStaticProps = async () => {
    const images = Directory();
    const paths = images.map(image => {
        return {
            params: {id: image.toString() }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const Image = () => {
    return (
        <div>
            <h1>Image Details</h1>
        </div>
    );
}

export default Image;