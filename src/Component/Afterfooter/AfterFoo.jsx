import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Afterfooter/Afterfoo.css";

const AfterFoo = () => {
  return (
    <div>
      <Card className=" After-foo text-center mb-4 p-5 ">
        <div className="Image-start">
          <img src="https://th.bing.com/th/id/R.e7a69cfe5d8e5c57c7d800cba1b6b3b5?rik=reBQS1LUcWwCUQ&riu=http%3a%2f%2fwww.adsrex.com%2fwallpapers%2fanimals%2fcat%2fcat_31.jpg&ehk=Q9Pcf7d2o5QFluncG7GxIlRM7Q5gXu3IxTSI41mYhVA%3d&risl=&pid=ImgRaw&r=0" />
        </div>
        <Card.Body>
          <Card.Title>Open Reseller</Card.Title>
          <Card.Text>Just make money from home with your smartPhone</Card.Text>
          <Button variant="primary" href="#">
            let's join
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default AfterFoo;
