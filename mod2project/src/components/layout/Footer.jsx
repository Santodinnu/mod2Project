import React from "react";

function Footer() {
  return (
    <footer className="bg-gray mt-auto w-full h-full py-8 ">
      <div className="container flex items-center justify-between gap-8">
        <p>©2024 Let's Cook - All rights reserved.</p>
        <p>
          Made by <span className="font-bold">Santoshi</span>
          
          , build with <span className="font-bold">React.js,</span>{" "}
          <span className="font-bold">Tailwind CSS</span>,{" "}
          <a
            href="https://spoonacular.com/food-api/docs"
            target="_blank"
            className="font-bold"
          >
            Spoonacular API
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;