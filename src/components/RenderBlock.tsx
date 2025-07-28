import { BlockDataType, BlockType } from "@/types";
import React, { JSX } from "react";

type Props = {
  block: BlockDataType;
};

const RenderBlock = ({ block }: Props): JSX.Element | null => {
  const baseStyle: React.CSSProperties = {
    padding: "20px",
    margin: "0 auto",
    maxWidth: "600px",
    fontFamily: "Arial, sans-serif",
  };

  switch (block.name) {
    case "header":
      return (
        <div style={block.configs?.styles?.parent}>
          <img
            src="https://yourbrand.com/logo.png"
            alt="Your Brand Logo"
            style={{ height: "50px", marginBottom: "10px" }}
          />
          <h1
            style={{
              margin: 0,
              fontSize: "24px",
              color: "#2c3e50",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            Your Brand Name
          </h1>
          <p style={{ margin: 0, fontSize: "14px", color: "#7f8c8d" }}>
            Empowering Your Success
          </p>
        </div>
      );
    case "hero":
      return (
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "40px 20px",
            textAlign: "center",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          <img
            src="https://via.placeholder.com/600x200"
            alt="Hero"
            style={{
              maxWidth: "100%",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
            }}
          />
          <h2
            style={{
              fontSize: "26px",
              margin: "0 0 10px",
              color: "#2c3e50",
              fontWeight: "bold",
            }}
          >
            Big Hero Title
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#555555",
              margin: 0,
              maxWidth: "600px",
              marginInline: "auto",
              lineHeight: "1.5",
            }}
          >
            Hero description goes here. Make a great first impression with a
            clear and impactful message.
          </p>
        </div>
      );
    case "features":
      return (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "40px 20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "#2c3e50",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "20px",
              textAlign: "center",
              color: "#2c3e50",
            }}
          >
            Our Features
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <li
              style={{
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#3498db",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></span>
              Feature One
            </li>
            <li
              style={{
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#3498db",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></span>
              Feature Two
            </li>
            <li
              style={{
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#3498db",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></span>
              Feature Three
            </li>
          </ul>
        </div>
      );
    case "cta":
      return (
        <div
          style={{
            backgroundColor: "#f0f8ff",
            padding: "40px 20px",
            textAlign: "center",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "#2c3e50",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              marginBottom: "20px",
              fontWeight: 500,
            }}
          >
            Don’t miss out on this opportunity!
          </p>

          <a
            href="#"
            style={{
              backgroundColor: "#3498db", // Brand color
              color: "#ffffff",
              padding: "12px 28px",
              textDecoration: "none",
              borderRadius: "8px",
              display: "inline-block",
              fontSize: "16px",
              fontWeight: "bold",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease",
            }}
          >
            Call to Action
          </a>
        </div>
      );
    case "about":
      return (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "40px 20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "#2c3e50",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "15px",
              color: "#2c3e50",
            }}
          >
            About Us
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: "0 auto",
              color: "#555555",
            }}
          >
            We are a company that values quality and service. Our goal is to
            deliver top-notch solutions to our customers by combining
            innovation, expertise, and dedication in everything we do.
          </p>
        </div>
      );
    case "services":
      return (
        <div
          style={{
            backgroundColor: "#fdfdfd",
            padding: "40px 20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "#2c3e50",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "20px",
              color: "#2c3e50",
            }}
          >
            Our Services
          </h2>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 auto",
              maxWidth: "500px",
              textAlign: "left",
            }}
          >
            <li
              style={{
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#3498db",
                  borderRadius: "50%",
                  marginRight: "10px",
                  display: "inline-block",
                }}
              ></span>
              Web Design
            </li>
            <li
              style={{
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#3498db",
                  borderRadius: "50%",
                  marginRight: "10px",
                  display: "inline-block",
                }}
              ></span>
              Marketing
            </li>
            <li
              style={{
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#3498db",
                  borderRadius: "50%",
                  marginRight: "10px",
                  display: "inline-block",
                }}
              ></span>
              Consulting
            </li>
          </ul>
        </div>
      );
    case "pricing":
      return (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "40px 20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "#2c3e50",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "20px",
              color: "#2c3e50",
            }}
          >
            Pricing Plans
          </h2>

          <table
            style={{
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto",
              borderCollapse: "collapse",
              border: "1px solid #e0e0e0",
              backgroundColor: "#fdfdfd",
            }}
          >
            <thead style={{ backgroundColor: "#3498db", color: "#ffffff" }}>
              <tr>
                <th
                  style={{
                    padding: "12px",
                    fontSize: "16px",
                    textAlign: "left",
                  }}
                >
                  Plan
                </th>
                <th
                  style={{
                    padding: "12px",
                    fontSize: "16px",
                    textAlign: "left",
                  }}
                >
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderTop: "1px solid #e0e0e0" }}>
                <td
                  style={{
                    padding: "12px",
                    fontSize: "15px",
                    color: "#2c3e50",
                  }}
                >
                  Basic
                </td>
                <td
                  style={{
                    padding: "12px",
                    fontSize: "15px",
                    color: "#2c3e50",
                  }}
                >
                  $10/month
                </td>
              </tr>
              <tr
                style={{
                  backgroundColor: "#f9f9f9",
                  borderTop: "1px solid #e0e0e0",
                }}
              >
                <td
                  style={{
                    padding: "12px",
                    fontSize: "15px",
                    color: "#2c3e50",
                  }}
                >
                  Pro
                </td>
                <td
                  style={{
                    padding: "12px",
                    fontSize: "15px",
                    color: "#2c3e50",
                  }}
                >
                  $20/month
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    case "testimonials":
      return (
        <div
          style={{
            backgroundColor: "#fdfdfd",
            padding: "40px 20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "#2c3e50",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "20px",
              color: "#2c3e50",
            }}
          >
            What Our Clients Say
          </h2>

          <blockquote
            style={{
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
            }}
          >
            “This service changed my business!” <br />{" "}
            <strong>— Jane D.</strong>
          </blockquote>
        </div>
      );
    case "team":
      return (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "40px 20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "#2c3e50",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "15px",
            }}
          >
            Meet the Team
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#555555",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: "0 auto 40px",
            }}
          >
            Our talented group of professionals is here to serve you with
            excellence and care.
          </p>

          <table
            style={{
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto",
              borderSpacing: "0 30px",
            }}
          >
            <tr>
              <td style={{ textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/100"
                  alt="Jane Doe"
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <h3
                  style={{
                    margin: "10px 0 5px",
                    fontSize: "18px",
                    color: "#2c3e50",
                  }}
                >
                  Jane Doe
                </h3>
                <p style={{ margin: 0, fontSize: "14px", color: "#888888" }}>
                  CEO & Founder
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#555555",
                    lineHeight: "1.4",
                    marginTop: "10px",
                  }}
                >
                  Jane leads the team with over a decade of experience in
                  business strategy and innovation.
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/100"
                  alt="John Smith"
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <h3
                  style={{
                    margin: "10px 0 5px",
                    fontSize: "18px",
                    color: "#2c3e50",
                  }}
                >
                  John Smith
                </h3>
                <p style={{ margin: 0, fontSize: "14px", color: "#888888" }}>
                  Lead Developer
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#555555",
                    lineHeight: "1.4",
                    marginTop: "10px",
                  }}
                >
                  John brings technical expertise in building scalable web
                  systems and user-friendly apps.
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                <img
                  src="https://via.placeholder.com/100"
                  alt="Sarah Lee"
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <h3
                  style={{
                    margin: "10px 0 5px",
                    fontSize: "18px",
                    color: "#2c3e50",
                  }}
                >
                  Sarah Lee
                </h3>
                <p style={{ margin: 0, fontSize: "14px", color: "#888888" }}>
                  Marketing Manager
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#555555",
                    lineHeight: "1.4",
                    marginTop: "10px",
                  }}
                >
                  Sarah leads brand growth and customer engagement through
                  creative marketing strategies.
                </p>
              </td>
            </tr>
          </table>
        </div>
      );
    case "blog":
      return (
        <div
          style={{
            backgroundColor: "#fdfdfd",
            padding: "40px 20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "#2c3e50",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "10px",
              color: "#2c3e50",
            }}
          >
            From the Blog
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#555555",
              marginBottom: "30px",
              maxWidth: "600px",
              marginInline: "auto",
            }}
          >
            Stay up to date with our latest news and insights.
          </p>

          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "20px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              maxWidth: "600px",
              marginInline: "auto",
              textAlign: "left",
            }}
          >
            <h3
              style={{ margin: "0 0 10px", fontSize: "18px", color: "#2c3e50" }}
            >
              How We’re Redefining Customer Experience
            </h3>
            <p
              style={{ margin: "0 0 10px", color: "#555555", fontSize: "14px" }}
            >
              Discover how our approach to service has helped businesses grow
              smarter and faster.
            </p>
            <a
              href="#"
              style={{
                color: "#3498db",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Read more →
            </a>
          </div>

          {/* <!-- Blog Post 2 --> */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              maxWidth: "600px",
              marginInline: "auto",
              textAlign: "left",
            }}
          >
            <h3
              style={{ margin: "0 0 10px", fontSize: "18px", color: "#2c3e50" }}
            >
              5 Trends Shaping Digital Strategy in 2025
            </h3>
            <p
              style={{ margin: "0 0 10px", color: "#555555", fontSize: "14px" }}
            >
              Stay ahead of the curve with insights into what’s driving digital
              transformation.
            </p>
            <a
              href="#"
              style={{
                color: "#3498db",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Read more →
            </a>
          </div>
        </div>
      );
    case "contact":
      return (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "40px 20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "#2c3e50",
            textAlign: "center",
            borderTop: "1px solid #e0e0e0",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "15px",
              color: "#2c3e50",
            }}
          >
            Contact Us
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#555555",
              marginBottom: "10px",
            }}
          >
            Email:{" "}
            <a
              href="mailto:contact@example.com"
              style={{
                color: "#3498db",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              contact@example.com
            </a>
          </p>

          <p
            style={{
              fontSize: "14px",
              color: "#888888",
              marginTop: "5px",
            }}
          >
            We typically respond within 1 business day.
          </p>
        </div>
      );
    case "footer":
      return (
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "30px 20px",
            textAlign: "center",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "14px",
            color: "#777777",
            borderTop: "1px solid #dddddd",
          }}
        >
          <p style={{ margin: 0 }}>© 2025 Your Company. All rights reserved.</p>

          <p style={{ marginTop: "8px" }}>
            <a
              href="#"
              style={{
                color: "#3498db",
                textDecoration: "none",
                margin: "0 10px",
              }}
            >
              Privacy Policy
            </a>
            |
            <a
              href="#"
              style={{
                color: "#3498db",
                textDecoration: "none",
                margin: "0 10px",
              }}
            >
              Unsubscribe
            </a>
          </p>
        </div>
      );
    case "faq":
      return (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "40px 20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "#2c3e50",
            textAlign: "left",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "20px",
              textAlign: "center",
              color: "#2c3e50",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ marginBottom: "20px" }}>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: "1.6" }}>
              <strong style={{ color: "#3498db" }}>Q:</strong> How do I sign up?
            </p>
            <p
              style={{
                margin: "5px 0 0",
                fontSize: "16px",
                color: "#555555",
                lineHeight: "1.6",
              }}
            >
              <strong style={{ color: "#2c3e50" }}>A:</strong> Just click the
              sign-up button and follow the instructions. It only takes a
              minute!
            </p>
          </div>
        </div>
      );
    case "gallery":
      return (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "40px 20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "#2c3e50",
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "20px",
              color: "#2c3e50",
            }}
          >
            Gallery
          </h2>

          <img
            src="https://via.placeholder.com/600x300"
            alt="Gallery image"
            style={{
              maxWidth: "100%",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      );
    case "countdown":
      return (
        <div
          style={{
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
          }}
        >
          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
            ⏰ Hurry Up!
          </h2>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              margin: "0",
            }}
          >
            Offer ends in:{" "}
            <span style={{ fontFamily: "monospace" }}>03:24:12</span>
          </p>
        </div>
      );
    case "video":
      return (
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "40px 20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "#333",
            textAlign: "center",
            borderRadius: "8px",
            maxWidth: "800px",
            margin: "30px auto",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            🎥 Watch Our Video
          </h2>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", position: "relative" }}
          >
            <img
              src="https://via.placeholder.com/600x300?text=Video+Thumbnail"
              alt="Video Thumbnail"
              style={{
                width: "100%",
                maxWidth: "600px",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0,0,0,0.6)",
                borderRadius: "50%",
                padding: "20px",
              }}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
        </div>
      );
    case "app_download":
      return (
        <div
          style={{
            ...baseStyle,
            textAlign: "center",
            backgroundColor: "#f8f9fa",
            padding: "40px 20px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
            fontFamily: "'Segoe UI', sans-serif",
          }}
        >
          <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
            📱 Download Our App
          </h2>
          <p style={{ color: "#555", marginBottom: "20px", fontSize: "16px" }}>
            Get our app and stay connected on the go!
          </p>
          <a
            href="#"
            style={{
              backgroundColor: "#28a745",
              color: "#fff",
              padding: "12px 24px",
              textDecoration: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              fontSize: "16px",
              boxShadow: "0 4px 10px rgba(40,167,69,0.3)",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#218838")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#28a745")
            }
          >
            Get the App
          </a>

          <div style={{ marginTop: "30px" }}>
            <img
              src="https://via.placeholder.com/150x50?text=Google+Play"
              alt="Google Play"
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
            <img
              src="https://via.placeholder.com/150x50?text=App+Store"
              alt="App Store"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default RenderBlock;
