const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0 0 2px black",
  },

  header:{
    height: "50px",
    backgroundColor: "#011222",
    color: "#fff",
  },
  headerText:{
    margin:"0",
    padding:"6px",
    fontSize: "32px",
    fontFamily:"sans-serif, helvetica"
  },
  newChatBtn: {
    borderRadius: "0",
  },
  unreadMessage: {
    color: "red",
    position: "absolute",
    top: "0",
    right: "5px",
  },
  newNoteBtn: {
    width: "100%",
    height: "35px",
    borderBottom: "1px solid black",
    borderRadius: "0",
    backgroundColor: "#03203C",
    color: "white",
    "&:hover": {
      backgroundColor: "#011222",
    },
  },
  sidebarContainer: {
    marginTop: "0",
    width: "300px",
    height: "100%",
    boxSizing: "border-box",
    overflowY: "scroll",
  },
  newNoteInput: {
    width: "100%",
    margin: "0px",
    height: "35px",
    outline: "none",
    border: "none",
    paddingLeft: "5px",
    "&:focus": {
      outline: "2px solid #011222",
    },
  },
  newNoteSubmitBtn: {
    width: "100%",
    backgroundColor: "#03203C",
    borderRadius: "0",
    color: "white",
    transition: "all 0.2 linear",
    "&:hover": {
      backgroundColor: "#011222",
    },
  },

});

export default styles;
