import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../Shared/PageTitle/PageTitle";

const Addareview = () => {
  return (
    <>
      <PageTitle pagetitle="Dashboard"></PageTitle>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="sidebar sidebar-md">
              <ul className="list-menu">
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/dashboard/myorders">My Orders</Link>
                </li>
                <li className="active">
                  <Link to="/dashboard/addareview">Add A Review</Link>
                </li>
                <li>
                  <Link to="/dashboard/myprofile">My Profile</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            <div className="content">
              <p>
                Addareview Move the needle inclusive improve the world white
                paper uplift co-create NGO thought provoking strengthening
                infrastructure. Leverage external partners move the needle
                energize save the world changemaker shared unit of analysis our
                work communities. Capacity building save the world shine
                commitment; deep dive low-hanging fruit innovate, indicators
                thought leader co-create because disrupt game-changer.
              </p>

              <p>
                Energize; energize global, social entrepreneurship social
                entrepreneur. Outcomes citizen-centered empathetic boots on the
                ground design thinking thought partnership but leverage
                co-creation save the world. Mobilize, communities; when
                movements, scale and impact scale and impact; agile then thought
                partnership state of play support. Capacity building empower
                communities, engaging social intrapreneurship, natural resources
                triple bottom line thought leadership or design thinking.
              </p>

              <p>
                Sustainable venture philanthropy; impact design thinking
                academic, families program area social impact thought
                partnership justice incubator gender rights milestones. Radical
                a her body her rights; storytelling our work equal opportunity
                resilient green space inspiring thought partnership parse.
                Indicators compelling outcomes entrepreneur, milestones, global
                low-hanging fruit targeted external partners thought leader
                overcome injustice challenges and opportunities. Justice radical
                move the needle scale and impact communities greenwashing. A,
                silo revolutionary strategize empower communities inspiring
                shine, improve the world strategize. Leverage; social
                enterprise, LGBTQ+, incubator shine inspiring parse game-changer
                systems thinking inclusion.
              </p>
              <p>
                Move the needle inclusive improve the world white paper uplift
                co-create NGO thought provoking strengthening infrastructure.
                Leverage external partners move the needle energize save the
                world changemaker shared unit of analysis our work communities.
                Capacity building save the world shine commitment; deep dive
                low-hanging fruit innovate, indicators thought leader co-create
                because disrupt game-changer.
              </p>

              <p>
                Energize; energize global, social entrepreneurship social
                entrepreneur. Outcomes citizen-centered empathetic boots on the
                ground design thinking thought partnership but leverage
                co-creation save the world. Mobilize, communities; when
                movements, scale and impact scale and impact; agile then thought
                partnership state of play support. Capacity building empower
                communities, engaging social intrapreneurship, natural resources
                triple bottom line thought leadership or design thinking.
              </p>

              <p>
                Sustainable venture philanthropy; impact design thinking
                academic, families program area social impact thought
                partnership justice incubator gender rights milestones. Radical
                a her body her rights; storytelling our work equal opportunity
                resilient green space inspiring thought partnership parse.
                Indicators compelling outcomes entrepreneur, milestones, global
                low-hanging fruit targeted external partners thought leader
                overcome injustice challenges and opportunities. Justice radical
                move the needle scale and impact communities greenwashing. A,
                silo revolutionary strategize empower communities inspiring
                shine, improve the world strategize. Leverage; social
                enterprise, LGBTQ+, incubator shine inspiring parse game-changer
                systems thinking inclusion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addareview;
