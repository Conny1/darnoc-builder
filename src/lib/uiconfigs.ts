import { BlockConfigs } from "@/types";

export const blockConfigs: BlockConfigs = {
  section: {
    styles: {
      parent: {
        width: "500px",
        maxWidth: "600px",
        height: "250px",
        backgroundColor: "#ffffff",
        paddingTop: "20px",
        paddingLeft: "20px",
        paddingBottom: "20px",
        paddingRight: "20px",
        textAlign: "center",
        borderWidth:"0",
        borderRadius:"0px",
        borderColor:"#ffffff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        position: "static",
        fontWeight:"normal",
        color:"#00000",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        marginRight: "10px",
      },
    },
  },

  column: {
    styles: {
      column: {
        width: "250px",
        height: "250px",
        maxWidth: "600px",
        backgroundColor: "#ffffff",
        borderWidth:"0",
        borderRadius:"0px",
        borderColor:"#ffffff",
        
        boxSizing: "border-box",
        fontFamily: "Helvetica, Arial, sans-serif",
        textAlign:"center",
        fontWeight:"normal",
        color: "#1f2d3a",
        //
        display: "inline-block",
        paddingTop: "20px",
        paddingLeft: "20px",
        paddingBottom: "20px",
        paddingRight: "20px",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        marginRight: "10px",
      },
    },
  },

  text: {
    styles: {
      text: {
        width: "100%",
        fontSize: "16px",
        lineHeight: "1.5",
        color: "#2c3e50",
        fontWeight: "normal",
        letterSpacing: "0.2px",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        margin: 0,
        // padding: "40px 20px",
        border: "1px solid #e1e8f9",
        //
        display: "inline-block",
        paddingTop: "20px",
        paddingLeft: "20px",
        paddingBottom: "20px",
        paddingRight: "20px",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        marginRight: "10px",
      },
    },
  },

  image: {
    styles: {
      image: {
        display: "block",
        maxWidth: "100%",
        height: "auto",
        margin: 0,
        // border: 0,
        outline: "none",
        textDecoration: "none",
        lineHeight: "100%",
        border: "1px solid #e1e8f9",
      },
    },
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
        borderWidth:"0px",
        borderColor:"#000000",
        cursor: "pointer",
        lineHeight: "1",
        letterSpacing: "0.5px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        //
        display: "inline-block",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        marginRight: "10px",
      },
    },
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
    let temp = style.split("px")
    newVal = temp[0]
  }

   if (style?.includes("%")) {
    let temp = style.split("%")
    newVal = temp[0]
  }
  
  return newVal;
};
