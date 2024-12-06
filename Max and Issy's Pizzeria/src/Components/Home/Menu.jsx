import React from 'react';

const Menu = () => {

    const menuData = [
        {
          section: "BREAKFAST & STARTERS",
          items: [
            {
              title: "Tortellini Skewers",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.",
              price: 9,
            },
            {
              title: "Fried Ravioli",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.",
              price: 7,
            },
            {
              title: "Wild Mushroom Arancini",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.",
              price: 9,
            },
          ],
        },
        {
          section: "MAIN COURSE",
          items: [
            {
              title: "Roast Stuffed Chicken",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.",
              price: 18,
            },
            {
              title: "Chicken & Mushroom Pasta",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.",
              price: 20,
            },
            {
              title: "Beef Lasagne",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.",
              price: 14,
            },
          ],
        },
      ];
  return (
    <div className="max-w-5xl mx-auto py-16 text-gray-800">
      <h1 className="text-5xl font-light text-center">MENU</h1>
      <div className="border-t-4 border-red-500 mx-auto w-16 mt-4 mb-12"></div>

      <div className="grid grid-cols-2 gap-12">
        {menuData.map((section, index) => (
          <div key={index}>
            <h2 className="text-3xl font-light">{section.section}</h2>
            <div className="border-t-4 border-red-500 w-20 mt-3 mb-10"></div>
            <div className="space-y-8">
              {section.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-base text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-2xl font-semibold">${item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;