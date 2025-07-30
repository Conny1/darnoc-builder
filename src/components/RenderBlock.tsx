import { BlockDataType, BlockType } from "@/types";
import React, { JSX, useEffect } from "react";

type Props = {
  block: BlockDataType;
  setmeasurements: React.Dispatch<
    React.SetStateAction<{
      width: number;
      height: number;
      minConstraints: {
        x: number;
        y: number;
      };
      maxConstraints: {
        x: number;
        y: number;
      };
    }>
  >;
};

const RenderBlock = ({ block, setmeasurements }: Props): JSX.Element | null => {
  const baseStyle: React.CSSProperties = {
    padding: "20px",
    margin: "0 auto",
    maxWidth: "600px",
    fontFamily: "Arial, sans-serif",
  };

  switch (block.name) {
    case "header":
      return (
        <div style={block.configs?.styles?.parent} element-type="container">
          <img
            src="https://placehold.co/100"
            alt="Your Brand Logo"
            style={block.configs?.styles?.image}
            element-type="image"
          />
          <h1 element-type="text" style={block.configs?.styles?.title}>
            Your Brand Name
          </h1>
          <p element-type="text" style={block.configs?.styles?.subtitle}>
            Empowering Your Success
          </p>
        </div>
      );
    case "hero":
      useEffect(() => {
        setmeasurements({
          width: 576,
          height: 500,
          minConstraints: { x: 100, y: 100 },
          maxConstraints: { x: 1000, y: 1000 },
        });
      }, []);

      return (
        <div style={block.configs?.styles?.parent}>
          <img
            src="https://placehold.co/600x400"
            alt="Hero"
            style={block.configs?.styles?.image}
          />
          <h2 style={block.configs?.styles?.title}>Big Hero Title</h2>
          <p style={block.configs?.styles?.description}>
            Hero description goes here. Make a great first impression with a
            clear and impactful message.
          </p>
        </div>
      );
    case "features":
      useEffect(() => {
        setmeasurements({
          width: 576,
          height: 250,
          minConstraints: { x: 100, y: 100 },
          maxConstraints: { x: 1000, y: 1000 },
        });
      }, []);
      return (
        <div style={block.configs?.styles?.parent}>
          <h2 style={block.configs?.styles?.title}>Our Features</h2>
          <ul style={block.configs?.styles?.list}>
            <li style={block.configs?.styles?.listItem}>
              <span style={block.configs?.styles?.bullet}></span>
              Feature One
            </li>
            <li style={block.configs?.styles?.listItem}>
              <span style={block.configs?.styles?.bullet}></span>
              Feature Two
            </li>
            <li style={block.configs?.styles?.listItem}>
              <span style={block.configs?.styles?.bullet}></span>
              Feature Three
            </li>
          </ul>
        </div>
      );
    case "cta":
      return (
        <div style={block.configs?.styles?.parent}>
          <p style={block.configs?.styles?.message}>
            Don’t miss out on this opportunity!
          </p>

          <a href="#" style={block.configs?.styles?.button}>
            Call to Action
          </a>
        </div>
      );
    case "about":
      return (
        <div style={block.configs?.styles?.parent}>
          <h2 style={block.configs?.styles?.title}>About Us</h2>
          <p style={block.configs?.styles?.description}>
            We are a company that values quality and service. Our goal is to
            deliver top-notch solutions to our customers by combining
            innovation, expertise, and dedication in everything we do.
          </p>
        </div>
      );
    case "services":
      useEffect(() => {
        setmeasurements({
          width: 576,
          height: 250,
          minConstraints: { x: 100, y: 100 },
          maxConstraints: { x: 1000, y: 1000 },
        });
      }, []);
      return (
        <div style={block.configs?.styles?.parent}>
          <h2 style={block.configs?.styles?.title}>Our Services</h2>

          <ul style={block.configs?.styles?.list}>
            <li style={block.configs?.styles?.listItem}>
              <span style={block.configs?.styles?.bullet}></span>
              Web Design
            </li>
            <li style={block.configs?.styles?.listItem}>
              <span style={block.configs?.styles?.bullet}></span>
              Marketing
            </li>
            <li style={block.configs?.styles?.listItem}>
              <span style={block.configs?.styles?.bullet}></span>
              Consulting
            </li>
          </ul>
        </div>
      );
    case "pricing":
      useEffect(() => {
        setmeasurements({
          width: 576,
          height: 270,
          minConstraints: { x: 100, y: 100 },
          maxConstraints: { x: 1000, y: 1000 },
        });
      }, []);
      return (
        <div style={block.configs?.styles?.parent}>
          <h2 style={block.configs?.styles?.title}>Pricing Plans</h2>

          <table style={block.configs?.styles?.table}>
            <thead style={block.configs?.styles?.thead}>
              <tr>
                <th style={block.configs?.styles?.th}>Plan</th>
                <th style={block.configs?.styles?.th}>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr style={block.configs?.styles?.row}>
                <td style={block.configs?.styles?.td}>Basic</td>
                <td style={block.configs?.styles?.td}>$10/month</td>
              </tr>
              <tr style={block.configs?.styles?.altRow}>
                <td style={block.configs?.styles?.td}>Pro</td>
                <td style={block.configs?.styles?.td}>$20/month</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    case "testimonials":
      return (
        <div style={block.configs?.styles?.parent}>
          <h2 style={block.configs?.styles?.title}>What Our Clients Say</h2>

          <blockquote style={block.configs?.styles?.quote}>
            “This service changed my business!” <br />
            <strong>— Jane D.</strong>
          </blockquote>
        </div>
      );
    case "team":
      useEffect(() => {
        setmeasurements({
          width: 576,
          height: 850,
          minConstraints: { x: 100, y: 100 },
          maxConstraints: { x: 1000, y: 1000 },
        });
      }, []);
      return (
        <div style={block.configs?.styles?.parent}>
          <h2 style={block.configs?.styles?.title}>Meet the Team</h2>

          <p style={block.configs?.styles?.description}>
            Our talented group of professionals is here to serve you with
            excellence and care.
          </p>

          <table style={block.configs?.styles?.table}>
            <tr>
              <td style={block.configs?.styles?.memberCell}>
                <img
                  src="https://placehold.co/100"
                  alt="Jane Doe"
                  style={block.configs?.styles?.image}
                />
                <h3 style={block.configs?.styles?.name}>Jane Doe</h3>
                <p style={block.configs?.styles?.role}>CEO & Founder</p>
                <p style={block.configs?.styles?.bio}>
                  Jane leads the team with over a decade of experience in
                  business strategy and innovation.
                </p>
              </td>
            </tr>
            <tr>
              <td style={block.configs?.styles?.memberCell}>
                <img
                  src="https://placehold.co/100"
                  alt="John Smith"
                  style={block.configs?.styles?.image}
                />
                <h3 style={block.configs?.styles?.name}>John Smith</h3>
                <p style={block.configs?.styles?.role}>Lead Developer</p>
                <p style={block.configs?.styles?.bio}>
                  John brings technical expertise in building scalable web
                  systems and user-friendly apps.
                </p>
              </td>
            </tr>
            <tr>
              <td style={block.configs?.styles?.memberCell}>
                <img
                  src="https://placehold.co/100"
                  alt="Sarah Lee"
                  style={block.configs?.styles?.image}
                />
                <h3 style={block.configs?.styles?.name}>Sarah Lee</h3>
                <p style={block.configs?.styles?.role}>Marketing Manager</p>
                <p style={block.configs?.styles?.bio}>
                  Sarah leads brand growth and customer engagement through
                  creative marketing strategies.
                </p>
              </td>
            </tr>
          </table>
        </div>
      );
    case "blog":
      useEffect(() => {
        setmeasurements({
          width: 576,
          height: 500,
          minConstraints: { x: 100, y: 100 },
          maxConstraints: { x: 1000, y: 1000 },
        });
      }, []);
      return (
        <div style={block.configs?.styles?.parent}>
          <h2 style={block.configs?.styles?.title}>From the Blog</h2>

          <p style={block.configs?.styles?.subtitle}>
            Stay up to date with our latest news and insights.
          </p>

          <div style={block.configs?.styles?.post}>
            <h3 style={block.configs?.styles?.postTitle}>
              How We’re Redefining Customer Experience
            </h3>
            <p style={block.configs?.styles?.postText}>
              Discover how our approach to service has helped businesses grow
              smarter and faster.
            </p>
            <a href="#" style={block.configs?.styles?.readMore}>
              Read more →
            </a>
          </div>

          {/* <!-- Blog Post 2 --> */}
          <div style={block.configs?.styles?.post}>
            <h3 style={block.configs?.styles?.postTitle}>
              5 Trends Shaping Digital Strategy in 2025
            </h3>
            <p style={block.configs?.styles?.postText}>
              Stay ahead of the curve with insights into what’s driving digital
              transformation.
            </p>
            <a href="#" style={block.configs?.styles?.readMore}>
              Read more →
            </a>
          </div>
        </div>
      );
    case "contact":
      return (
        <div style={block.configs?.styles?.parent}>
          <h2 style={block.configs?.styles?.title}>Contact Us</h2>

          <p style={block.configs?.styles?.emailText}>
            Email:
            <a
              href="mailto:contact@example.com"
              style={block.configs?.styles?.emailLink}
            >
              contact@example.com
            </a>
          </p>

          <p style={block.configs?.styles?.note}>
            We typically respond within 1 business day.
          </p>
        </div>
      );
    case "footer":
      return (
        <div style={block.configs?.styles?.parent}>
          <p style={block.configs?.styles?.copyright}>
            © 2025 Your Company. All rights reserved.
          </p>

          <p style={block.configs?.styles?.linkWrapper}>
            <a href="#" style={block.configs?.styles?.link}>
              Privacy Policy
            </a>
            |
            <a href="#" style={block.configs?.styles?.link}>
              Unsubscribe
            </a>
          </p>
        </div>
      );
    case "faq":
      return (
        <div style={block.configs?.styles?.parent}>
          <h2 style={block.configs?.styles?.title}>
            Frequently Asked Questions
          </h2>

          <div style={block.configs?.styles?.qaBlock}>
            <p style={block.configs?.styles?.question}>
              <strong style={block.configs?.styles?.qaHighlight}>Q:</strong> How
              do I sign up?
            </p>
            <p style={block.configs?.styles?.answer}>
              <strong style={block.configs?.styles?.aHighlight}>A:</strong> Just
              click the sign-up button and follow the instructions. It only
              takes a minute!
            </p>
          </div>
        </div>
      );
    case "gallery":
      useEffect(() => {
        setmeasurements({
          width: 576,
          height: 500,
          minConstraints: { x: 100, y: 100 },
          maxConstraints: { x: 1000, y: 1000 },
        });
      }, []);
      return (
        <div style={block.configs?.styles?.parent}>
          <h2 style={block.configs?.styles?.heading}>Gallery</h2>

          <img
            src="https://placehold.co/600x300"
            alt="Gallery image"
            style={block.configs?.styles?.image}
          />
        </div>
      );
    case "countdown":
      return (
        <div style={block.configs?.styles?.parent}>
          <h2 style={block.configs?.styles?.heading}>⏰ Hurry Up!</h2>
          <p style={block.configs?.styles?.paragraph}>
            Offer ends in:
            <span style={block.configs?.styles?.countdownText}>03:24:12</span>
          </p>
        </div>
      );
    case "video":
      return (
        <div style={block.configs?.styles?.parent}>
          <h2 style={block.configs?.styles?.heading}>🎥 Watch Our Video</h2>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            style={block.configs?.styles?.link}
          >
            <img
              src="https://placehold.co/600x300?text=Video+Thumbnail"
              alt="Video Thumbnail"
              style={block.configs?.styles?.image}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div style={block.configs?.styles?.playOverlay}>
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
            ...block.configs?.styles?.parent,
          }}
        >
          <h2 style={block.configs?.styles?.heading}>📱 Download Our App</h2>
          <p style={block.configs?.styles?.paragraph}>
            Get our app and stay connected on the go!
          </p>
          <a
            href="#"
            style={block.configs?.styles?.button}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#218838")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#28a745")
            }
          >
            Get the App
          </a>

          <div style={block.configs?.styles?.storeButtonsWrapper}>
            <img
              src="hhttps://placehold.co/150x50?text=Google+Play"
              alt="Google Play"
              style={block.configs?.styles?.storeImage}
            />
            <img
              src="https://placehold.co/150x50?text=App+Store"
              alt="App Store"
              style={block.configs?.styles?.storeImage}
            />
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default RenderBlock;
