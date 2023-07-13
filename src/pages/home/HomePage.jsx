import React from "react";
// import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Banner from "../../components/home/banner/Banner";
import Freelancer from "../../components/home/freelancers/Freelancer";
import PopularTask from "../../components/home/popularTasks/PopularTask";
import SupportStudent from "../../components/home/supportStudent/SupportStudent";
import Testimonials from "../../components/home/testimonials/Testimonials";
import ShortForm from "../../components/shortForm/ShortForm";
import SellerCard from "../../components/home/sellerCard/SellerCard";

const Home = () => {
  return (
    <>
      <Banner />
      <Freelancer />
      <SellerCard />
      <PopularTask />
      <SupportStudent />
      <Testimonials />
      <ShortForm />
    </>
  );
};

export default Home;
