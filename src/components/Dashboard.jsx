import React from "react";
import Data from "../data.json";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">

      <div className="posts">
       
        {Data.map((post) => {
          return (
            <div className="col">
              <div key={post.userid} className="contents">
      
                <h4>{post.name}</h4>
                <p>{post.email}</p>
                <div className="contents2">
                  <ul>
                    <li>  {post.stepsWalked}</li>
                    <li> {post.stepsTargeted}</li>
                  </ul>
                
                 
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
