import { BlockConfigs } from "@/types";

export const blockConfigs: BlockConfigs = {
  header: {
    styles: {
      parent: {
        backgroundColor: "#ffffff",
        padding: "20px 0",
        borderBottom: "2px solid #e0e0e0",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      },
      image: { height: "50px", margin: "auto", marginBottom: "10px" },
      title: {
        margin: 0,
        fontSize: "24px",
        color: "#2c3e50",
        fontWeight: 700,
        letterSpacing: "1px",
      },
      subtitle: { margin: 0, fontSize: "14px", color: "#7f8c8d" },
    },
  },

  hero: {
    styles: {
      parent: {
        backgroundColor: "#f9f9f9",
        padding: "40px 20px",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      },
      image: {
        maxWidth: "100%",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
      },
      title: {
        fontSize: "26px",
        margin: "0 0 10px",
        color: "#2c3e50",
        fontWeight: "bold",
      },
      description: {
        fontSize: "16px",
        color: "#555555",
        margin: 0,
        maxWidth: "600px",
        marginInline: "auto",
        lineHeight: "1.5",
      },
    },
  },

  text: {
    styles: {
      parent: {
        backgroundColor: "#ffffff",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2c3e50",
        textAlign: "center",
      },
    },
  },

  features: {
    styles: {
      parent: {
        backgroundColor: "#ffffff",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2c3e50",
        textAlign: "left",
      },
      title: {
        fontSize: "24px",
        marginBottom: "20px",
        textAlign: "center",
        color: "#2c3e50",
      },
      list: {
        listStyle: "none",
        padding: 0,
        maxWidth: "600px",
        margin: "0 auto",
      },
      listItem: {
        marginBottom: "15px",
        display: "flex",
        alignItems: "center",
      },
      bullet: {
        display: "inline-block",
        width: "10px",
        height: "10px",
        backgroundColor: "#3498db",
        borderRadius: "50%",
        marginRight: "10px",
      },
    },
  },

  cta: {
    styles: {
      parent: {
        backgroundColor: "#f0f8ff",
        padding: "40px 20px",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2c3e50",
      },
      message: {
        fontSize: "18px",
        marginBottom: "20px",
        fontWeight: 500,
      },
      button: {
        backgroundColor: "#3498db",
        color: "#ffffff",
        padding: "12px 28px",
        textDecoration: "none",
        borderRadius: "8px",
        display: "inline-block",
        fontSize: "16px",
        fontWeight: "bold",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease",
      },
    },
  },
  about: {
    styles: {
      parent: {
        backgroundColor: "#ffffff",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2c3e50",
        textAlign: "center",
      },
      title: {
        fontSize: "24px",
        marginBottom: "15px",
        color: "#2c3e50",
      },
      description: {
        fontSize: "16px",
        lineHeight: "1.6",
        maxWidth: "600px",
        margin: "0 auto",
        color: "#555555",
      },
    },
  },
  services: {
    styles: {
      parent: {
        backgroundColor: "#fdfdfd",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2c3e50",
        textAlign: "center",
      },
      title: {
        fontSize: "24px",
        marginBottom: "20px",
        color: "#2c3e50",
      },
      list: {
        listStyle: "none",
        padding: 0,
        margin: "0 auto",
        maxWidth: "500px",
        textAlign: "left",
      },
      listItem: {
        marginBottom: "12px",
        display: "flex",
        alignItems: "center",
      },
      bullet: {
        width: "10px",
        height: "10px",
        backgroundColor: "#3498db",
        borderRadius: "50%",
        marginRight: "10px",
        display: "inline-block",
      },
    },
  },

  pricing: {
    styles: {
      parent: {
        backgroundColor: "#ffffff",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2c3e50",
        textAlign: "center",
      },
      title: {
        fontSize: "24px",
        marginBottom: "20px",
        color: "#2c3e50",
      },
      table: {
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        borderCollapse: "collapse",
        border: "1px solid #e0e0e0",
        backgroundColor: "#fdfdfd",
      },
      thead: {
        backgroundColor: "#3498db",
        color: "#ffffff",
      },
      th: {
        padding: "12px",
        fontSize: "16px",
        textAlign: "left",
      },
      row: {
        borderTop: "1px solid #e0e0e0",
      },
      altRow: {
        backgroundColor: "#f9f9f9",
        borderTop: "1px solid #e0e0e0",
      },
      td: {
        padding: "12px",
        fontSize: "15px",
        color: "#2c3e50",
      },
    },
  },
  testimonials: {
    styles: {
      parent: {
        backgroundColor: "#fdfdfd",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2c3e50",
        textAlign: "center",
      },
      title: {
        fontSize: "24px",
        marginBottom: "20px",
        color: "#2c3e50",
      },
      quote: {
        fontStyle: "italic",
        borderLeft: "4px solid #3498db",
        paddingLeft: "20px",
        margin: "0 auto",
        maxWidth: "600px",
        color: "#555555",
        lineHeight: "1.6",
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
      },
    },
  },

  team: {
    styles: {
      parent: {
        backgroundColor: "#ffffff",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2c3e50",
        textAlign: "center",
      },
      title: {
        fontSize: "24px",
        marginBottom: "15px",
      },
      description: {
        fontSize: "16px",
        color: "#555555",
        lineHeight: "1.6",
        maxWidth: "600px",
        margin: "0 auto 40px",
      },
      table: {
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        borderSpacing: "0 30px",
      },
      memberCell: {
        textAlign: "center",
      },
      image: {
        borderRadius: "50%",
        width: "100px",
        height: "100px",
        objectFit: "cover",
        margin: "auto",
        marginBottom: "10px",
      },
      name: {
        margin: "10px 0 5px",
        fontSize: "18px",
        color: "#2c3e50",
      },
      role: {
        margin: 0,
        fontSize: "14px",
        color: "#888888",
      },
      bio: {
        fontSize: "14px",
        color: "#555555",
        lineHeight: "1.4",
        marginTop: "10px",
      },
    },
  },
  blog: {
    styles: {
      parent: {
        backgroundColor: "#fdfdfd",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2c3e50",
        textAlign: "center",
      },
      title: {
        fontSize: "24px",
        marginBottom: "10px",
        color: "#2c3e50",
      },
      subtitle: {
        fontSize: "16px",
        color: "#555555",
        marginBottom: "30px",
        maxWidth: "600px",
        marginInline: "auto",
      },
      post: {
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "20px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        maxWidth: "600px",
        marginInline: "auto",
        textAlign: "left",
      },
      postTitle: {
        margin: "0 0 10px",
        fontSize: "18px",
        color: "#2c3e50",
      },
      postText: {
        margin: "0 0 10px",
        color: "#555555",
        fontSize: "14px",
      },
      readMore: {
        color: "#3498db",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
  },

  contact: {
    styles: {
      parent: {
        backgroundColor: "#ffffff",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2c3e50",
        textAlign: "center",
        borderTop: "1px solid #e0e0e0",
      },
      title: {
        fontSize: "24px",
        marginBottom: "15px",
        color: "#2c3e50",
      },
      emailText: {
        fontSize: "16px",
        color: "#555555",
        marginBottom: "10px",
      },
      emailLink: {
        color: "#3498db",
        textDecoration: "none",
        fontWeight: "bold",
      },
      note: {
        fontSize: "14px",
        color: "#888888",
        marginTop: "5px",
      },
    },
  },

  footer: {
    styles: {
      parent: {
        backgroundColor: "#f5f5f5",
        padding: "30px 20px",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "14px",
        color: "#777777",
        borderTop: "1px solid #dddddd",
      },
      copyright: {
        margin: 0,
      },
      linksWrapper: {
        marginTop: "8px",
      },
      link: {
        color: "#3498db",
        textDecoration: "none",
        margin: "0 10px",
      },
    },
  },

  faq: {
    styles: {
      parent: {
        backgroundColor: "#ffffff",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2c3e50",
        textAlign: "left",
        maxWidth: "600px",
        margin: "0 auto",
      },
      heading: {
        fontSize: "24px",
        marginBottom: "20px",
        textAlign: "center",
        color: "#2c3e50",
      },
      qaBlock: {
        marginBottom: "20px",
      },
      question: {
        margin: 0,
        fontSize: "16px",
        lineHeight: "1.6",
      },
      qHighlight: {
        color: "#3498db",
      },
      answer: {
        margin: "5px 0 0",
        fontSize: "16px",
        color: "#555555",
        lineHeight: "1.6",
      },
      aHighlight: {
        color: "#2c3e50",
      },
    },
  },

  gallery: {
    styles: {
      parent: {
        backgroundColor: "#ffffff",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2c3e50",
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto",
      },
      heading: {
        fontSize: "24px",
        marginBottom: "20px",
        color: "#2c3e50",
      },
      image: {
        maxWidth: "100%",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      },
    },
  },

  countdown: {
    styles: {
      parent: {
        backgroundColor: "#fff3cd",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#856404",
        textAlign: "center",
        borderRadius: "8px",
        border: "1px solid #ffeeba",
        maxWidth: "600px",
        margin: "20px auto",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      },
      heading: {
        fontSize: "24px",
        marginBottom: "10px",
      },
      paragraph: {
        fontSize: "18px",
        fontWeight: "bold",
        margin: "0",
      },
      countdownText: {
        fontFamily: "monospace",
      },
    },
  },
  video: {
    styles: {
      parent: {
        backgroundColor: "#f9f9f9",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
        textAlign: "center",
        borderRadius: "8px",
        maxWidth: "800px",
        margin: "30px auto",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      },
      heading: {
        fontSize: "28px",
        marginBottom: "20px",
      },
      link: {
        display: "inline-block",
        position: "relative",
      },
      image: {
        width: "100%",
        maxWidth: "600px",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "transform 0.3s",
      },
      playOverlay: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(0,0,0,0.6)",
        borderRadius: "50%",
        padding: "20px",
      },
    },
  },
  app_download: {
    styles: {
      parent: {
        backgroundColor: "#f8f9fa",
        padding: "40px 20px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
        fontFamily: "'Segoe UI', sans-serif",
        textAlign: "center",
      },
      heading: {
        fontSize: "28px",
        marginBottom: "10px",
      },
      paragraph: {
        color: "#555",
        marginBottom: "20px",
        fontSize: "16px",
      },
      button: {
        backgroundColor: "#28a745",
        color: "#fff",
        padding: "12px 24px",
        textDecoration: "none",
        borderRadius: "5px",
        fontWeight: "bold",
        fontSize: "16px",
        boxShadow: "0 4px 10px rgba(40,167,69,0.3)",
        transition: "background-color 0.3s ease",
      },
      storeButtonsWrapper: {
        marginTop: "30px",
      },
      storeImg: {
        marginRight: "10px",
        cursor: "pointer",
      },
    },
  },
};
