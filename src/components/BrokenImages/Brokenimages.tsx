

const imgStyle = {
    width: '120px',
    height: '90px'
};

const BrokenImages = () => (
    <div>
        <div>
            <h3> Broken Images </h3>
            <img style={imgStyle} src="asdf.jpg" />
            <img style={imgStyle} src="hjkl.jpg" />
            <img style={imgStyle} src="img/avatar-blank.jpg" />
        </div>
    </div>

);

export default BrokenImages;