import React from "react";
import "./Blog.css";
import b1 from "../../img/b1.jpg";
import b2 from "../../img/b2.png";
import b3 from "../../img/b3.png";

const Blog = () => {
  return (
    <div className="Blogs">
      <div className="BlogsName" id="blogs">Blogs</div>

      <div className="cards">
        <div style={{ left: "-5rem", top: "8rem" }}>
          <div className="box">
            <h2>The Pros and Cons of Cloud Computing</h2>
            <img
              src={b1}
              alt="Box Image"
              style={{ width: "15rem", height: "10rem" }}
            />
            <span>
              Cloud computing is a model of providing on-demand access to a pool
              of shared computing resources such as servers, storage,
              applications and services at an terminate the Internet.
            </span>

            <a href="https://medium.com/@kasunimaheshika2325/the-pros-and-cons-of-cloud-computing-177c19eca45f">
              <button className="button p-button">More Details</button>
            </a>
          </div>
        </div>
        <div style={{ left: "22rem", top: "8rem" }}>
          <div className="box">
            <h2>What is the Software Development Life Cycle</h2>
            <img
              src={b2}
              alt="Box Image"
              style={{ width: "15rem", height: "10rem" }}
            />
            <span>
              Software developers are guided through the stages of planning,
              designing, creating, testing, deploying, and maintaining a
              software product by the Software Development Life Cycle.
            </span>
            <a href="https://medium.com/@kasunimaheshika2325/what-is-the-software-development-life-cycle-sdlc-2c7d582fad03">
              <button className="button p-button">More Details</button>
            </a>
          </div>
        </div>

        <div style={{ left: "48rem", top: "8rem" }}>
          <div className="box">
            <h2>Exploring SDLC Models</h2>
            <img
                src={b3}
              alt="Box Image"
              style={{ width: "15rem", height: "10rem" }}
            />
            <span>
              Software Development Life Cycle (SDLC) models provide a framework
              that guides developers through the stages of planning, designing,
              building, testing, deploying, and maintaining software.
            </span>
            <a href="https://medium.com/@kasunimaheshika2325/exploring-sdlc-models-eb04c872272d">
              <button className="button p-button">More Details</button>
            </a>
          </div>
        </div>

        <div style={{ left: "24rem", top: "25rem" }}></div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Blog;
