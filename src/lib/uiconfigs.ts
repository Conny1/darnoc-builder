import { BlockConfigs } from "@/types";

export const blockConfigs: BlockConfigs = {
  section: {
    styles: {
      parent: {
        width: "600px",
        maxWidth: "100%",
        minHeight:"150px",
        height: "auto",
        backgroundColor: "#ffffff",
        paddingTop: "0px",
        paddingLeft: "0px",
        paddingBottom: "0px",
        paddingRight: "0px",
        textAlign: "justify",
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
        width: "295px",
        height: "250px",
        maxWidth: "100%",
        backgroundColor: "#ffffff",
        paddingTop: "4px",
        paddingLeft: "4px",
        paddingBottom: "4px",
        paddingRight: "4px",
        textAlign: "justify",
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
        // constants
        display: "inline-block",
        
        verticalAlign: "top",
        // fontSize:"0px"
      },
    },
  },

  text: {
    styles: {
      text: {
        width: "200px",
        maxWidth:"95%",
        fontSize: "16px",
        lineHeight: "1.5",
        color: "#2c3e50",
        fontWeight: "normal",
        letterSpacing: "0.2px",
        textAlign: "justify",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",

        // padding: "40px 20px",
        // border: "1px solid #e1e8f9",
        //
        display: "inline-block",
        verticalAlign:"top",
        paddingTop: "4px",
        paddingLeft: "4px",
        paddingBottom: "4px",
        paddingRight: "4px",
        marginTop: "4px",
        marginBottom: "4px",
        marginLeft: "4px",
        marginRight: "4px",
        textTransform: "none",
        height:"auto",
        overflowWrap:"break-word"
      },
    },
     content:{
      text:"Text area",
      
    }
  },

  image: {
    styles: {
      image: {
        width:"200px",
        display: "inline-block",
        verticalAlign:"top",
        maxWidth: "95%",
        height: "110px",
      
        borderWidth:"0px",
        borderColor:"#fffffff",
        borderRadius:"0px",
        paddingTop: "0px",
        paddingLeft: "0px",
        paddingBottom: "0px",
        paddingRight: "0px",
        marginTop: "4px",
        marginBottom: "4px",
        marginLeft: "4px",
        marginRight: "4px",
      },
      
    },
    content:{
      text:"place holder image",
      link:"https://placehold.co/200x100"
      
    }
  },

  button: {
    styles: {
      button: {
        paddingTop: "20px",
        paddingLeft: "20px",
        paddingBottom: "20px",
        paddingRight: "20px",
        textAlign: "center",
        backgroundColor: "#2563eb",
        color: "#ffffff",
        fontWeight: "normal",
        fontSize: "15px",
        textDecoration: "none",
        borderRadius: "6px",
        borderWidth: "0px",
        borderColor: "#000000",
        cursor: "pointer",
        lineHeight: "1",
        letterSpacing: "0.5px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        //
        display: "inline-block",
        verticalAlign:"top",
        marginTop: "4px",
        marginBottom: "4px",
        marginLeft: "4px",
        marginRight: "4px",
        textTransform: "capitalize",
        maxWidth:"95%"
      },
    },
    content:{
      text:"Click me",
      
    }

  },

  divider: {
    styles: {
      divider: {
        width: "500px",
        height: "1px",
        backgroundColor: "#e6ecf5",
        margin: "20px 0",
        lineHeight: "1px",
      },
    },
  },

  table: {
    styles: {
      table: {
        width: "500px",
        borderCollapse: "collapse" as const,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        margin: "0 auto",
        maxWidth: "600px",
      },
      thead: {
        backgroundColor: "#f5f7fa",
      },
      th: {
        padding: "12px",
        textAlign: "left" as const,
        fontSize: "14px",
        borderBottom: "1px solid #d8e2ef",
        color: "#334e68",
        fontWeight: 600,
      },
      row: {
        backgroundColor: "#ffffff",
      },
      altRow: {
        backgroundColor: "#f9fbfd",
      },
      td: {
        padding: "12px",
        fontSize: "14px",
        color: "#475569",
        borderBottom: "1px solid #e6ecf5",
        verticalAlign: "top" as const,
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
