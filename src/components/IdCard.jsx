function IdCard(props) {

    const {lastName, firstName, gender, height, birth, picture} = props.idCard

    const idCardContainerStyle = {
        border: "2px solid #ccc",
        padding: "2px",
        margin: "1px",
        display: "block",
        width: "100%",
      };
    
      const idCardStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
      };
    
      const idCardImgStyle = {
        maxWidth: "100px",
        maxHeight: "100px",
        marginRight: "10px"
      };
    
      const idCardInfoStyle = {
        fontFamily: "Arial, sans-serif",
        color: "#333",
      };
    
      return (
        <div style={idCardContainerStyle}>
          <div style={idCardStyle}>
            <img src={picture} alt="" style={idCardImgStyle} />
            <div style={idCardInfoStyle}>
              <p><strong>First name:</strong> {firstName}</p>
              <p><strong>Last name:</strong> {lastName}</p>
              <p><strong>Gender:</strong> {gender}</p>
              <p><strong>Height:</strong> {height}</p>
              <p><strong>Birth:</strong> {birth}</p>
            </div>
          </div>
        </div>
      );
    }

export default IdCard