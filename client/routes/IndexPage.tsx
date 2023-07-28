import React from "react";
import "./IndexPage.scss";

export default function IndexPage() {
  return (
    <div className="IndexPage">
      <div className="sideBar">
        <h4>KEK</h4>
        <div className="divider" />
        <button>Save</button>
        <button>Load</button>
        <div className="divider" />
      </div>
      <div className="content">
        <div className="main">
          <div className="gallery">
            Drop files here
          </div>
          <div className="preview">
            <canvas width={512} height={512} />
          </div>
          <div className="options">
            Here be options
          </div>
        </div>
        <div className="controls">
          <button>⏮</button>
          <button>⏹</button>
          <button>⏵</button>
          <button>⏭</button>
        </div>
        <div className="timeline">
          <div className="timelineWrap">
            <div className="wrap">
              <div className="music" />
              <div className="visuals">
                <div className="stage">kek</div><div className="stage">lel</div><div className="stage">lmao</div><div className="stage">rofl</div>
                <div className="stage">kek</div><div className="stage">lel</div><div className="stage">lmao</div><div className="stage">rofl</div>
                <div className="stage">kek</div><div className="stage">lel</div><div className="stage">lmao</div><div className="stage">rofl</div>
              </div>
              <div className="ruler">
                <span>0:00</span><span>0:10</span><span>0:20</span><span>0:30</span><span>0:40</span><span>0:50</span>
                <span>1:00</span><span>1:10</span><span>1:20</span><span>1:30</span><span>1:40</span><span>1:50</span>
                <span>2:00</span><span>2:10</span><span>2:20</span><span>2:30</span><span>2:40</span><span>2:50</span>
                <span>3:00</span><span>3:10</span><span>3:20</span><span>3:30</span><span>3:40</span><span>3:50</span>
                <span>4:00</span><span>4:10</span><span>4:20</span><span>4:30</span><span>4:40</span><span>4:50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
