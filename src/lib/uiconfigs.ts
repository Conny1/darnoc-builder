import { BlockConfigs } from "@/types";

export const blockConfigs: BlockConfigs = {
  section: {
    styles: {
      parent: {
        width: "100%",
        maxWidth: "100%",
        minHeight: "70px",
        height: "auto",
        backgroundColor: "#ffffff",
        paddingTop: "0px",
        paddingLeft: "0px",
        paddingBottom: "0px",
        paddingRight: "0px",
        textAlign: "center",
        borderWidth: "0",
        borderRadius: "0px",
        borderColor: "#ffffff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        position: "static",
        fontWeight: "normal",
        color: "#000000",
        marginTop: "0px",
        marginBottom: "0px",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "0px",
      },
    },
  },

  column: {
    styles: {
      column: {
        width: "100%",
        height: "250px",
        maxWidth: "100%",
        backgroundColor: "#ffffff",
        paddingTop: "0px",
        paddingLeft: "0px",
        paddingBottom: "0px",
        paddingRight: "0px",
        textAlign: "center",
        borderWidth: "0",
        borderRadius: "0px",
        borderColor: "#ffffff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        position: "static",
        fontWeight: "normal",
        color: "#00000",

        marginTop: "0px",
        marginBottom: "0px",
        marginLeft: "0px",
        marginRight: "0px",
        display: "inline-block",
      },
      parent: {
        width: "100%",
        maxWidth: "300px",
        display: "inline-block",
        verticalAlign: "top",
        textAlign: "center",
        margin: "0px",
        padding: "0px",
      },
    },
  },

  text: {
    styles: {
      text: {
        width: "100%",
        maxWidth: "100%",
        fontSize: "16px",
        lineHeight: "1.5",
        color: "#2c3e50",
        fontWeight: "normal",
        letterSpacing: "0.2px",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        verticalAlign: "top",
        paddingTop: "0px",
        paddingLeft: "0px",
        paddingBottom: "0px",
        paddingRight: "0px",
        marginTop: "0px",
        marginBottom: "0px",
        marginLeft: "0px",
        marginRight: "0px",
        textTransform: "none",
        height: "auto",
        overflowWrap: "break-word",
        display: "inline-block",
      },
      parent: {
        width: "100%",
        maxWidth: "100px",
        display: "inline-block",
        verticalAlign: "top",
        textAlign: "center",
      },
    },
    content: {
      text: "Text area",
    },
  },

  image: {
    styles: {
      image: {
        width: "100%",
        verticalAlign: "top",
        maxWidth: "100%",
        height: "110px",
        objectFit: "cover",
        borderWidth: "0px",
        borderColor: "#fffffff",
        borderRadius: "0px",
        paddingTop: "0px",
        paddingLeft: "0px",
        paddingBottom: "0px",
        paddingRight: "0px",
        marginTop: "0px",
        marginBottom: "0px",
        marginLeft: "0px",
        marginRight: "0px",
      },
      parent: {
        width: "100%",
        maxWidth: "200px",
        display: "inline-block",
        verticalAlign: "top",
        textAlign: "center",
      },
    },
    content: {
      text: "place holder image",
      link: "https://placehold.co/200x100",
    },
  },

  button: {
    styles: {
      button: {
        width: "100%",
        maxWidth: "100%",
        fontSize: "16px",
        lineHeight: "1.5",
        color: "#2c3e50",
        fontWeight: "normal",
        letterSpacing: "0.2px",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        verticalAlign: "top",
        paddingTop: "0px",
        paddingLeft: "0px",
        paddingBottom: "0px",
        paddingRight: "0px",
        marginRight: "0px",
        marginTop: "0px",
        marginBottom: "0px",
        marginLeft: "0px",

        textTransform: "none",
        height: "auto",
        overflowWrap: "break-word",
        display: "inline-block",
        borderRadius: "6px",
        backgroundColor: "#155DFC",
        borderWidth: "0px",
      },
      parent: {
        width: "100%",
        maxWidth: "200px",
        display: "inline-block",
        verticalAlign: "top",
        textAlign: "center",
        margin: "0px",
        padding: "0px",
      },
    },
    content: {
      text: "Click me",
      link: "",
    },
  },

  divider: {
    styles: {
      divider: {
        width: "100%",
        height: "1px",
        backgroundColor: "#e6ecf5",
        lineHeight: "1px",
        marginRight: "0px",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "0px",
        display: "inline-block",
        verticalAlign: "top",
      
      },
      parent: {
        width: "100%",
        maxWidth: "300px",
        display: "inline-block",
        verticalAlign: "top",
        textAlign: "center",
        margin: "0px",
        padding: "0px",
        zIndex:7,
        position:"relative"
        
      },
    },
  },

  raw_html: {
    styles: {
      wrapper: {
        width: "100%",
        boxSizing: "border-box" as const,
        margin: 0,
        padding: "40px 20px",
      },
    },
  },
};

export const removeCSSvalues = (style: string) => {
  let newVal = style;
  if (style?.includes("px")) {
    const temp = style.split("px");
    newVal = temp[0];
  }

  if (style?.includes("%")) {
    const temp = style.split("%");
    newVal = temp[0];
  }

  return newVal;
};
